import { LogIn, LogOut, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo";
import Dropdown from "../Dropdown";
import { useAppState } from "../../../store";

export default function Navbar() {
  const navigate = useNavigate();
  const [state, dispatch] = useAppState();
  const [menuOpen, setMenuOpen] = useState(false);

  const isLoggedIn = !!state?.user;

  const serviceItems = [
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
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-secondary rounded-3xl shadow-sm mb-4">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <Logo height={30} width={40} />
        <h1 className="font-bold text-xl text-primary">Interview AI</h1>
      </div>

      <div className="flex items-center gap-8 relative">
        <button
          className="text-tertiary font-medium hover:text-primary transition-colors"
          onClick={() => navigate("/demo")}
        >
          Demo
        </button>
        <button
          className="text-tertiary font-medium hover:text-primary transition-colors"
          onClick={() => navigate("/dashboard?role=recruiter")}
        >
          Dashboard
        </button>

        <Dropdown label="Services" items={serviceItems} />

        {isLoggedIn ? (
          <div className="relative">
            <button
              className="flex items-center gap-2 text-tertiary hover:text-primary"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <img
                src={state.user?.avatar || "/assets/default-avatar.png"}
                alt="avatar"
                className="w-8 h-8 rounded-full object-cover border"
              />
              <ChevronDown size={16} />
            </button>
            {menuOpen && (
              <ul className="absolute right-0 top-12 w-40 bg-white border rounded-xl shadow-lg z-50 text-black">
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                  onClick={handleLogout}
                >
                  <LogOut size={16} /> Logout
                </li>
              </ul>
            )}
          </div>
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
    </nav>
  );
}
