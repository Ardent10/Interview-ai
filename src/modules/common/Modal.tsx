import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  footer,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full mx-4">
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-lg font-semibold text-primary">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition"
          >
            ✕
          </button>
        </div>

        <div className="px-6 py-4">{children}</div>

        {/* Custom Footer Support */}
        <div className="px-6 py-4 border-t text-right">
          {footer ? (
            footer
          ) : (
            <button
              onClick={onClose}
              className="bg-primary text-white px-4 py-2 rounded-xl hover:bg-primary/90 transition"
            >
              Close
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
