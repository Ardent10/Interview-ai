interface SectionWrapperProps {
  children: any;
  className?: string;
}

export default function SectionWrapper({
  children,
  className,
}: SectionWrapperProps) {
  return (
    <section
      className={`relative h-screen p-6 rounded-3xl overflow-hidden ${className}`}
    >
      <div className="max-w-7xl mx-auto h-full flex flex-col justify-center">
        {children}
      </div>
    </section>
  );
}
