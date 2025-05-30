import { Routes, Route } from "react-router-dom";
import HomePage from "../src/modules/home/pages";
import LoginPage from "./modules/auth/pages/Login";
import SignupPage from "./modules/auth/pages/Signup";
import NotFoundPage from "./modules/404/page";
import ProtectedRoute from "./modules/auth/components/ProtectedRoutes";
import DashboardRouter from "./modules/dashboard/layout/Router";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      {/* Protected Dashboard Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard/*" element={<DashboardRouter />} />
      </Route>

      {/* Catch-all */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
