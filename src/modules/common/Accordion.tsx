import { useRef, useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export default function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div
      className={`rounded-4xl mb-2 p-4 overflow-hidden shadow-sm transition-all duration-300 ${
        isOpen ? "bg-primary text-white" : "bg-white hover:bg-gray-100"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left"
      >
        <span className="font-medium">{title}</span>
        <ChevronDown
          className={`h-5 w-5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        ref={contentRef}
        style={{ height }}
        className="transition-all duration-300 ease-in-out overflow-hidden"
      >
        <div className="p-4 bg-white text-black rounded-4xl mt-2">
          {children}
        </div>
      </div>
    </div>
  );
}
