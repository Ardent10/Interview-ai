import { Expand, Trash2 } from "lucide-react";
import { Job } from "../hooks";
import Tooltip from "../../common/Tooltip";
import { useAppState } from "../../../store";
import { useState } from "react";
import ResumeUploadModal from "./ResumeUpload";

interface JobCardProps {
  job: Job;
  onView: (job: Job) => void;
  onDelete?: (job: Job) => void;
}

export default function JobCard({ job, onView, onDelete }: JobCardProps) {
  const [state] = useAppState();
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="bg-secondary p-6 rounded-2xl shadow-md relative">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-semibold text-primary">{job.title}</h3>
        <span className="text-sm px-3 py-1 bg-primary text-white rounded-full">
          {job.type}
        </span>
      </div>

      <p className="text-sm text-tertiary mb-2">
        <strong>Experience:</strong> {job.experience}
      </p>

      <div className="flex flex-wrap gap-2 mb-3">
        {job.skills?.map((skill: string) => (
          <span
            key={skill}
            className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

      <p className="text-tertiary text-sm line-clamp-3 mb-4">
        {job.description}
      </p>

      <div className="text-right flex gap-2 justify-end">
        <Tooltip text="View">
          <button
            onClick={() => onView(job)}
            className="text-sm p-1 text-primary underline rounded-md hover:text-white hover:bg-primary/80"
          >
            <Expand />
          </button>
        </Tooltip>

        {state.userProfile.role === "job-seeker" ? (
          <button
            onClick={() => setOpenModal(true)}
            className="text-sm  px-2  rounded-lg bg-primary hover:bg-primary/40 hover:text-gray-400 text-white"
          >
            Apply
          </button>
        ) : (
          onDelete && (
            <Tooltip text="Delete">
              <button
                onClick={() => onDelete(job)}
                className="text-sm text-red-800 p-1 underline rounded-md hover:bg-primary/80"
              >
                <Trash2 />
              </button>
            </Tooltip>
          )
        )}
      </div>
      <ResumeUploadModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        jobId={job.id}
        jobTitle={job.title}
      />
    </div>
  );
}
