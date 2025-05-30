import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./index";
import AllJobsPage from "../jobs/page";
import CreateJobPage from "../jobs/page/New";
import { useAppState } from "../../../store";
import NotFoundPage from "../../404/page";
import WorkInProgress from "../components/Wip";

export default function DashboardRoutes() {
  const [state] = useAppState();
  const role = state.userProfile?.role;

  if (!role) return <Navigate to="/login" />;

  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        {/* Default route for both roles */}
        <Route index element={<Navigate to="jobs" replace />} />

        {/* Common route */}
        <Route path="jobs" element={<AllJobsPage />} />

        {/* Recruiter-only route */}
        {role === "recruiter" && (
          <Route path="jobs/new" element={<CreateJobPage />} />
        )}

        {/* Catch-all inside dashboard goes to jobs */}
        <Route path="*" element={<WorkInProgress/>} />
      </Route>
    </Routes>
  );
}
