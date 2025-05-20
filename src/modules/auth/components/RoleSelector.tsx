import React from "react";

interface RoleSelectorProps {
  selectedRole: string;
  setSelectedRole: (role: "job-seeker" | "recruiter") => void;
}

const RoleSelector: React.FC<RoleSelectorProps> = ({
  selectedRole,
  setSelectedRole,
}) => {
  return (
    <div className="relative w-full max-w-md bg-gray-100 rounded-full p-1 mb-6">
      <div
        className="absolute bg-white rounded-full transition-all duration-300 ease-in-out shadow-sm"
        style={{
          width: "50%",
          height: "calc(100% - 8px)",
          top: "4px",
          left: selectedRole === "job-seeker" ? "4px" : "calc(50% + 4px)",
        }}
      />
      <div className="relative flex z-10">
        <button
          type="button"
          onClick={() => setSelectedRole("job-seeker")}
          className={`flex-1 py-2 rounded-full text-center transition-colors duration-200 cursor-pointer ${
            selectedRole === "job-seeker"
              ? "text-primary font-medium"
              : "text-gray-500"
          }`}
        >
          Job Seeker
        </button>
        <button
          type="button"
          onClick={() => setSelectedRole("recruiter")}
          className={`flex-1 py-2 rounded-full text-center transition-colors duration-200 cursor-pointer ${
            selectedRole === "recruiter"
              ? "text-primary font-medium"
              : "text-gray-500"
          }`}
        >
          Recruiter
        </button>
      </div>
    </div>
  );
};

export default RoleSelector;
