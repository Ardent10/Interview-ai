import React from "react";
import { useFormContext, RegisterOptions } from "react-hook-form";

type FormInputProps = {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  wrapperClass?: string;
  labelClass?: string;
  inputClass?: string;
  errorClass?: string;
  validation?: RegisterOptions;
};

export const FormInput: React.FC<FormInputProps> = ({
  name,
  label,
  type = "text",
  placeholder,
  required,
  className = "",
  wrapperClass = "",
  labelClass = "",
  inputClass = "",
  errorClass = "text-red-500 text-sm mt-1",
  validation,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const fieldError = errors[name];

  return (
    <div className={`${wrapperClass} ${className}`}>
      {label && (
        <div className="flex items-center">
          <label
            htmlFor={name}
            className={`text-tertiary block mb-1 font-medium ${labelClass}`}
          >
            {label}
          </label>
          {required && <span className="text-red-700">*</span>}
        </div>
      )}
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name, validation)}
        className={`border py-2 px-4 w-full rounded bg-white ${inputClass} ${
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
