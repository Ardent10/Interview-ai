import { Navigate, Outlet } from "react-router-dom";
import { useAppState } from "../../../store/index";

const ProtectedRoute = () => {
  const [state] = useAppState();
  const isAuthenticated = Boolean(state.userProfile);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
