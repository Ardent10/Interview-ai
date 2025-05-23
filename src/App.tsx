// AppRoutes.tsx
import { Routes, Route } from "react-router-dom";
import HomePage from "../src/modules/home/pages";
import LoginPage from "./modules/auth/pages/Login";
import SignupPage from "./modules/auth/pages/Signup";
import DashboardRouter from "./modules/dashboard/DashboardRouter";
import NotFoundPage from "./modules/404/page";
import AllJobsPage from "./modules/dashboard/jobs/page";
import ProtectedRoute from "./modules/auth/components/ProtectedRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardRouter />} />
        <Route path="/dashboard/jobs" element={<AllJobsPage />} />
      </Route>

      {/* Catch-all */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
