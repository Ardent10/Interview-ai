import { ChevronDown } from "lucide-react";
import { useState } from "react";

type DropdownItem = {
  label: string;
  onClick?: () => void;
};

type DropdownProps = {
  label: string;
  items: DropdownItem[];
};

export default function Dropdown({ label, items }: DropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative cursor-pointer text-primary">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 font-medium text-tertiary hover:text-primary"
      >
        {label}
        <ChevronDown size={18} />
      </button>

      {open && (
        <ul className="cursor-pointer absolute mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          {items.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer"
              onClick={() => {
                item.onClick?.();
                setOpen(false);
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
