import { useSearchParams } from "react-router-dom";
import JobSeekerDashboard from "./jobseeker/page";
import RecruiterDashboard from "./recruiter/page";

export default function DashboardRouter() {
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role");

  if (role === "recruiter") {
    return <RecruiterDashboard />;
  }

  if (role === "jobseeker") {
    return <JobSeekerDashboard />;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-red-600">
        Invalid role specified.
      </h1>
      <p className="text-gray-600 mt-2">Please login again with a valid role.</p>
    </div>
  );
}
