import React from "react";

interface PrimaryButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: React.ReactNode;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  type = "button",
  onClick,
  children,
  icon,
  fullWidth = true,
  className = "",
  disabled = false,
  loading = false,
}) => {
  const baseStyles =
    "cursor-pointer flex items-center justify-center bg-primary text-white p-3 rounded transition hover:bg-opacity-90 hover:scale-105";
  const widthStyle = fullWidth ? "w-full" : "w-auto";
  const disabledStyle = disabled || loading ? "opacity-50 cursor-not-allowed" : "";

  const combinedClassName = `${baseStyles} ${widthStyle} ${disabledStyle} ${className}`.trim();

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={combinedClassName}
    >
      {loading ? (
        <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-white" />
      ) : (
        <>
          {children}
          {icon && <span className="ml-2">{icon}</span>}
        </>
      )}
    </button>
  );
};

export default PrimaryButton;
