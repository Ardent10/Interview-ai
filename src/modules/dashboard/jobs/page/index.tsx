import { useEffect, useState } from "react";
import Navbar from "../../../common/layout/Navbar";
import { Briefcase } from "lucide-react";
import Sidebar from "../../../common/layout/Sidebar";

const mockJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    type: "Full-time",
    skills: ["React", "TypeScript", "TailwindCSS"],
    experience: "2-4 years",
    description: "Build UI interfaces using React and Tailwind...",
  },
  {
    id: 2,
    title: "Backend Engineer",
    type: "Contract",
    skills: ["Node.js", "MongoDB", "Express"],
    experience: "3-5 years",
    description: "Design REST APIs, manage databases and scalability...",
  },
];

export default function AllJobsPage() {
  const [jobs, setJobs] = useState<typeof mockJobs>([]);  


  useEffect(() => {
    setJobs(mockJobs);
  }, []);

  return (
    <div className="p-6 min-h-screen bg-background">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="px-10 py-8">
          <div className="flex items-center gap-2 mb-6">
            <Briefcase className="text-primary" />
            <h2 className="text-3xl font-bold text-primary">All Jobs</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-secondary p-6 rounded-2xl shadow-sm border border-border"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-primary">
                    {job.title}
                  </h3>
                  <span className="text-sm px-3 py-1 bg-primary text-white rounded-full">
                    {job.type}
                  </span>
                </div>

                <p className="text-sm text-tertiary mb-2">
                  <strong>Experience:</strong> {job.experience}
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <p className="text-tertiary text-sm line-clamp-3">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
