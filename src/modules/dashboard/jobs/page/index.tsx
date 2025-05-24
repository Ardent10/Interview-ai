import Navbar from "../../../common/layout/Navbar";
import { Briefcase, Expand, Trash2 } from "lucide-react";
import Sidebar from "../../../common/layout/Sidebar";
import { useJobs } from "../../hooks";
import { useState } from "react";
import Modal from "../../../common/Modal";
import JobDetailView from "../../components/JobView";
import { Job } from "../../hooks";
import Tooltip from "../../../common/Tooltip";

export default function AllJobsPage() {
  const { jobs, loading } = useJobs();
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  return (
    <div className="p-6 min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <Sidebar />

        <div className="flex-1 px-10 py-8">
          <div className="flex items-center gap-2 mb-6">
            <Briefcase className="text-primary" />
            <h2 className="text-3xl font-bold text-primary">All Jobs</h2>
          </div>

          {loading ? (
            <p className="text-center text-tertiary mt-10">Loading jobs...</p>
          ) : jobs.length === 0 ? (
            <div className="flex flex-col items-center justify-center mt-20">
              <img
                src="/assets/jobs/empty.png"
                alt="No jobs"
                className="w-64 h-64 mb-6"
              />
              <p className="text-lg text-tertiary">No jobs posted yet.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-secondary p-6 rounded-2xl shadow-md relative"
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

                  <div className="text-right">
                    <Tooltip text="View">
                      <button
                        onClick={() => setSelectedJob(job)}
                        className="text-sm p-1 text-primary underline rounded-md hover:text-white hover:bg-primary/80"
                      >
                        <Expand />
                      </button>
                    </Tooltip>

                    <Tooltip text="Delete">
                      <button
                        onClick={() => setSelectedJob(job)}
                        className="text-sm text-red-800 p-1 underline rounded-md hover:bg-primary/80"
                      >
                        <Trash2 />
                      </button>
                    </Tooltip>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Modal isOpen={!!selectedJob} onClose={() => setSelectedJob(null)}>
        {selectedJob && <JobDetailView job={selectedJob} />}
      </Modal>
    </div>
  );
}
