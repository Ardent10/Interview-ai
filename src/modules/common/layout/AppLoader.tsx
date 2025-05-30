import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../../../store";
import { supabase } from "../../../lib/supabaseClient";
import { useAuth } from "../../auth/hooks";

const AppLoader = () => {
  const { userProfile } = useAuth();
  const { data: profile, isSuccess } = userProfile();
  const [_, dispatch] = useAppState();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess && profile) {
      dispatch({ type: "SET_USER_PROFILE", payload: profile });
      const isAtRoot =
        location.pathname === "/login" || location.pathname === "/signup";

      if (isAtRoot) {
        navigate("/dashboard", { replace: true });
      }
    }
  }, [isSuccess, profile, dispatch, navigate]);

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        if (!session) {
          dispatch({ type: "LOGOUT", payload: {} });
        }
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, [dispatch]);

  return null;
};

export default AppLoader;
