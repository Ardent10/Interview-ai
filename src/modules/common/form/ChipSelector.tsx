import { useController, useFormContext } from "react-hook-form";
import { ChevronDown, X } from "lucide-react";
import { useState } from "react";

interface ChipMultiSelectProps {
  name: string;
  options: string[];
  label?: string;
  placeholder?: string;
}

export default function ChipMultiSelect({
  name,
  options,
  label = "Select Items",
  placeholder = "Choose...",
}: ChipMultiSelectProps) {
  const { control } = useFormContext();
  const { field } = useController({ name, control });

  const [open, setOpen] = useState(false);

  const toggleValue = (value: string) => {
    const current = field.value || [];
    const updated = current.includes(value)
      ? current.filter((v: string) => v !== value)
      : [...current, value];

    field.onChange(updated);
  };

  const removeChip = (value: string) => {
    const updated = field.value.filter((v: string) => v !== value);
    field.onChange(updated);
  };

  const filteredOptions = options.filter((o) => !field.value?.includes(o));

  return (
    <div className="relative mb-4">
      {label && (
        <label className="block font-medium text-tertiary mb-1">{label}</label>
      )}

      <div
        className="p-4 shadow-sm rounded-xl cursor-pointer bg-white flex justify-between items-center"
        onClick={() => setOpen(!open)}
      >
        <span className="text-gray-500">
          {field.value?.length > 0
            ? `${field.value.length} selected`
            : placeholder}
        </span>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </div>

      {open && (
        <div className="absolute z-10 mt-1 w-full border rounded-xl bg-white shadow max-h-48 overflow-y-auto">
          {filteredOptions.length ? (
            filteredOptions.map((opt) => (
              <div
                key={opt}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                onClick={() => {
                  toggleValue(opt);
                  setOpen(false);
                }}
              >
                {opt}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-sm text-gray-400">
              No more options
            </div>
          )}
        </div>
      )}

      {field.value?.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {field.value.map((value: string) => (
            <div
              key={value}
              className="bg-primary text-white text-sm px-3 py-1 rounded-full flex items-center gap-2"
            >
              {value}
              <button
                type="button"
                onClick={() => removeChip(value)}
                className="hover:text-gray-200"
              >
                <X size={14} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
