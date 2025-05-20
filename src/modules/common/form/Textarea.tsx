import React from "react";
import { useFormContext, RegisterOptions } from "react-hook-form";

type TextareaProps = {
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  wrapperClass?: string;
  labelClass?: string;
  inputClass?: string;
  errorClass?: string;
  validation?: RegisterOptions;
  rows?: number;
};

const Textarea: React.FC<TextareaProps> = ({
  name,
  label,
  placeholder,
  required = false,
  className = "",
  wrapperClass = "",
  labelClass = "",
  inputClass = "",
  errorClass = "text-red-500 text-sm mt-1",
  validation,
  rows = 5,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const fieldError = errors[name];

  return (
    <div className={`${wrapperClass} ${className}`}>
      {label && (
        <div className="flex items-center mb-1">
          <label
            htmlFor={name}
            className={`text-tertiary font-medium ${labelClass}`}
          >
            {label}
          </label>
          {required && <span className="text-red-700 ml-1">*</span>}
        </div>
      )}

      <textarea
        id={name}
        rows={rows}
        placeholder={placeholder}
        {...register(name, validation)}
        className={`border p-3 w-full rounded bg-white ${inputClass} ${
          fieldError ? "border-red-500" : "border-gray-300"
        }`}
      />

      {fieldError && (
        <p className={errorClass}>
          {(fieldError as any)?.message || "Invalid input"}
        </p>
      )}
    </div>
  );
};

export default Textarea;
