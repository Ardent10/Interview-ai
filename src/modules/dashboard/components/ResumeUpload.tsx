import { useRef } from "react";
import Modal from "../../common/Modal";
import { Loader2 } from "lucide-react";
import { useAppState } from "../../../store";

interface ResumeUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobId: string;
  jobTitle: string;
}

const MAX_FILE_SIZE = 5 * 1024 * 1024;

export default function ResumeUploadModal({
  isOpen,
  onClose,
  jobId,
  jobTitle,
}: ResumeUploadModalProps) {
  const [state, dispatch] = useAppState();
  const { resumeFile, loading, score, error } = state.resumeModal;
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    if (file && file.size > MAX_FILE_SIZE) {
      dispatch({
        type: "UPDATE_RESUME_MODAL",
        payload: { resumeFile: null, error: "File size exceeds 5MB limit." },
      });
      return;
    }

    dispatch({
      type: "UPDATE_RESUME_MODAL",
      payload: { resumeFile: file, score: null, error: null },
    });
  };

  const handleUpload = async () => {
    if (!resumeFile) return;

    dispatch({ type: "UPDATE_RESUME_MODAL", payload: { loading: true } });

    setTimeout(() => {
      const randomScore = Math.floor(Math.random() * 100) + 1;
      dispatch({
        type: "UPDATE_RESUME_MODAL",
        payload: { score: randomScore, loading: false },
      });
    }, 1500);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0] || null;

    if (file && file.size > MAX_FILE_SIZE) {
      dispatch({
        type: "UPDATE_RESUME_MODAL",
        payload: { resumeFile: null, error: "File size exceeds 5MB limit." },
      });
      return;
    }

    dispatch({
      type: "UPDATE_RESUME_MODAL",
      payload: { resumeFile: file, score: null, error: null },
    });
  };

  const openFilePicker = () => inputRef.current?.click();

  const handleClose = () => {
    dispatch({ type: "RESET_RESUME_MODAL", payload: {} });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={`Apply for ${jobTitle}`}
      footer={
        <div className="flex justify-end gap-2">
          <button
            onClick={handleClose}
            className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
          >
            Close
          </button>
          <button
            onClick={handleUpload}
            disabled={!resumeFile || loading}
            className={`px-4 py-2 rounded-lg text-white transition ${
              resumeFile && !loading
                ? "bg-primary hover:bg-primary/90"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="animate-spin w-4 h-4" />
                Parsing...
              </span>
            ) : (
              "Submit Resume"
            )}
          </button>
        </div>
      }
    >
      <div className="flex flex-col gap-4">
        <label className="text-left text-md font-medium text-gray-700">
          Upload your resume (PDF only)
        </label>

        <div
          onClick={openFilePicker}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          className="border-2 border-dashed border-primary rounded-xl px-6 py-12 text-center cursor-pointer hover:border-primary transition"
        >
          <p className="text-gray-500">
            {resumeFile
              ? resumeFile.name
              : "Drag and drop your resume here or click to upload"}
          </p>
          <input
            ref={inputRef}
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        {score !== null && (
          <div className="text-center mt-4">
            <p className="text-lg font-semibold text-tertiary">
              Matching Score: <span className="text-primary">{score}%</span>
            </p>
            {score >= 70 ? (
              <p className="text-green-600 font-medium mt-1">
                Great match! You’re eligible for the AI interview.
              </p>
            ) : (
              <p className="text-red-500 font-medium mt-1">
                Not a strong match. Consider enhancing your resume.
              </p>
            )}
          </div>
        )}
      </div>
    </Modal>
  );
}
