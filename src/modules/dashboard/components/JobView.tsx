import { Job } from "../hooks";

export default function JobDetailView({ job }: { job: Job }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2 text-primary">{job.title}</h2>
      <p className="mb-4 text-sm text-gray-500">
        {job.type} • {job.experience} years experience
      </p>

      <div className="mb-4">
        <h4 className="font-semibold mb-1 text-sm">Skills Required:</h4>
        <div className="flex flex-wrap gap-2">
          {job.skills.map((skill) => (
            <span
              key={skill}
              className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="max-h-[40vh] overflow-y-auto">
        <h4 className="font-semibold mb-1 text-sm">Job Description:</h4>
        <p className="text-sm text-gray-700 whitespace-pre-line">
          {job.description}
        </p>
      </div>
    </div>
  );
}
