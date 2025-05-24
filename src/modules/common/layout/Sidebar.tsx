import { useState } from "react";
import {
  FilePlus,
  Users,
  FileText,
  BarChart2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import Tooltip from "../Tooltip";

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    {
      label: "All Jobs",
      icon: <FilePlus size={20} />,
      path: "/dashboard/jobs",
      match: "jobs",
    },
    {
      label: "Post Job",
      icon: <FilePlus size={20} />,
      path: "/dashboard?role=recruiter",
      match: "recruiter",
    },
    {
      label: "Applicants",
      icon: <Users size={20} />,
      path: "/dashboard?role=jobseeker",
      match: "jobseeker",
    },
    {
      label: "AI Attempts",
      icon: <FileText size={20} />,
      path: "/dashboard/attempts",
      match: "attempts",
    },
    {
      label: "Analytics",
      icon: <BarChart2 size={20} />,
      path: "/dashboard/analytics",
      match: "analytics",
    },
  ];

  const isActive = (match: string) => {
    return (
      location.pathname.includes(match) ||
      location.search.includes(`role=${match}`)
    );
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

      {menuItems.map((item) => {
        const button = (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition ${
              isActive(item.match)
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
