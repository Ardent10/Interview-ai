import { useState } from "react";
import {
  FilePlus,
  Users,
  FileText,
  BarChart2,
  ChevronLeft,
  ChevronRight,
  ScrollText,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import Tooltip from "../Tooltip";
import { useAppState } from "../../../store";

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [state] = useAppState();

  const role = state.userProfile?.role;

  const allMenuItems = [
    {
      label: "All Jobs",
      icon: <ScrollText size={20} />,
      path: "/dashboard/jobs",
      match: "/jobs",
      roles: ["recruiter", "job-seeker"],
    },
    {
      label: "Post Job",
      icon: <FilePlus size={20} />,
      path: "/dashboard/jobs/new",
      match: "/jobs/new",
      roles: ["recruiter"],
    },
    {
      label: "Applicants",
      icon: <Users size={20} />,
      path: "/dashboard/jobseeker",
      match: "/jobseeker",
      roles: ["recruiter"],
    },
    {
      label: "AI Attempts",
      icon: <FileText size={20} />,
      path: "/dashboard/attempts",
      match: "/attempts",
      roles: ["job-seeker"],
    },
    {
      label: "Analytics",
      icon: <BarChart2 size={20} />,
      path: "/dashboard/analytics",
      match: "/analytics",
      roles: ["recruiter"],
    },
  ];

  const filteredMenuItems = allMenuItems.filter((item) =>
    item.roles.includes(role)
  );

  const isActive = (match: string) => {
    const pathname = location.pathname;
    return pathname.startsWith(match);
  };

  return (
    <aside
      className={`${
        expanded ? "w-60" : "w-20"
      } transition-all duration-300 h-[80vh] ease-in-out bg-secondary p-4 pt-8 flex flex-col gap-6 rounded-3xl shadow-md`}
    >
      <div className="flex justify-center items-center">
        <button
          onClick={() => setExpanded(!expanded)}
          className="p-2 rounded-full text-tertiary hover:bg-primary/10 transition"
        >
          {expanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>

      {filteredMenuItems.map((item) => {
        const button = (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition ${
              isActive(item.path)
                ? "bg-primary text-white"
                : "text-tertiary hover:bg-primary/10"
            }`}
          >
            {item.icon}
            {expanded && <span>{item.label}</span>}
          </button>
        );

        return !expanded ? (
          <Tooltip key={item.path} text={item.label} position="right">
            {button}
          </Tooltip>
        ) : (
          button
        );
      })}
    </aside>
  );
}
