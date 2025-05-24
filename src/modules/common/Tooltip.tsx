import React, { ReactNode } from "react";

interface TooltipProps {
  text: string;
  children: ReactNode;
  position?: "top" | "bottom" | "left" | "right";
}

const Tooltip: React.FC<TooltipProps> = ({ text, children, position = "top" }) => {
  return (
    <div className="relative group inline-block">
      {children}
      <div
        className={`absolute z-10 hidden group-hover:block bg-gray-800 text-white text-sm rounded px-2 py-1 whitespace-nowrap
          ${position === "top" && "bottom-full mb-2 left-1/2 -translate-x-1/2"}
          ${position === "bottom" && "top-full mt-2 left-1/2 -translate-x-1/2"}
          ${position === "left" && "right-full mr-2 top-1/2 -translate-y-1/2"}
          ${position === "right" && "left-full ml-2 top-1/2 -translate-y-1/2"}
        `}
      >
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
