import { Link } from "react-router-dom";

export default function WorkInProgress() {
  return (
    <div className="min-h-screen  flex flex-col items-center justify-start px-4 text-center">
      <h1 className="text-5xl md:text-5xl font-bold text-tertiary mb-4">
        Work In Progress 🚧
      </h1>
      <p className="text-lg md:text-xl max-w-4xl mb-8">
        This page is currently under construction — we're busy building
        something amazing for you. In the meantime, why not explore other
        sections or check back soon? Good things take time!
      </p>

      <img
        src="/assets/jobs/wip.png"
        alt="Work in progress"
        className="w-full max-w-md rounded-2xl shadow-lg border-4 border-white bg-primary"
      />
    </div>
  );
}
