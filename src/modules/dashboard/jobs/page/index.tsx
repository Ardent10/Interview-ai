import Navbar from "../../../common/layout/Navbar";
import { Briefcase } from "lucide-react";
import Sidebar from "../../../common/layout/Sidebar";
import { useJobs, Job } from "../../hooks";
import { useState } from "react";
import Modal from "../../../common/Modal";
import JobDetailView from "../../components/JobView";
import JobCard from "../../components/JobCard";

export default function AllJobsPage() {
  const { jobs, loading } = useJobs();
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  return (
    <div>
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
              <JobCard
                key={job.id}
                job={job}
                onView={() => setSelectedJob(job)}
                onDelete={() => setSelectedJob(job)} // Optional if you implement delete
              />
            ))}
          </div>
        )}
      </div>

      <Modal isOpen={!!selectedJob} onClose={() => setSelectedJob(null)}>
        {selectedJob && <JobDetailView job={selectedJob} />}
      </Modal>
    </div>
  );
}
