import { LogIn, LogOut, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo";
import Dropdown from "../Dropdown";
import { useAppState } from "../../../store";

export default function Navbar() {
  const navigate = useNavigate();
  const [state, dispatch] = useAppState();
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const isLoggedIn = !!state?.userProfile;

  const serviceItems = [
    { label: "Demo", action: () => navigate("/demo") },
    ...(isLoggedIn
      ? [
          { label: "Jobs", action: () => navigate("/dashboard/jobs") },
          { label: "Dashboard", action: () => navigate("/dashboard") },
        ]
      : []),
    { label: "AI-Powered Interviews" },
    { label: "Resume Review & Tips" },
    { label: "Job Matching Engine" },
    { label: "Recruiter Dashboard" },
    { label: "Candidate Analytics" },
  ];

  const handleLogout = () => {
    dispatch({ type: "LOGOUT", payload: {} });
    navigate("/");
  };

  return (
    <nav className="w-full px-4 py-4 bg-secondary rounded-3xl shadow-sm mb-4">
      <div className="flex items-center justify-between">

        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <Logo height={30} width={40} />
          <h1 className="font-bold text-xl text-primary">Interview AI</h1>
        </div>


        <div className="hidden md:flex items-center gap-6 text-tertiary font-medium">
          <button
            className="hover:text-primary transition-colors"
            onClick={() => navigate("/demo")}
          >
            Demo
          </button>

          {isLoggedIn && (
            <>
              <button
                className="hover:text-primary transition-colors"
                onClick={() => navigate("/dashboard/jobs")}
              >
                Jobs
              </button>
              <button
                className="hover:text-primary transition-colors"
                onClick={() => navigate("/dashboard")}
              >
                Dashboard
              </button>
            </>
          )}

        </div>


        <div className="block sm:hidden">
          <Dropdown label="Services" items={serviceItems} />
        </div>


        <div className="relative ml-4">
          {isLoggedIn ? (
            <>
              <button
                className="flex items-center gap-2 text-tertiary hover:text-primary"
                onClick={() => setProfileMenuOpen((prev) => !prev)}
              >
                <img
                  src={
                    state.userProfile?.avatar || "/assets/testimonials/boy.png"
                  }
                  alt="avatar"
                  className="w-8 h-8 rounded-full object-cover border"
                />
                <ChevronDown size={16} />
              </button>

              {profileMenuOpen && (
                <ul className="absolute right-0 top-12 w-40 bg-primary rounded-xl shadow-lg z-50">
                  <li
                    className="px-4 py-2 text-white cursor-pointer flex items-center gap-2"
                    onClick={handleLogout}
                  >
                    <LogOut size={16} /> Logout
                  </li>
                </ul>
              )}
            </>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="text-white bg-primary rounded-2xl px-4 py-2 gap-2 flex items-center font-medium hover:opacity-90 transition"
            >
              Login
              <LogIn size={18} />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
