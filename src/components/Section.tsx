import type { ReactNode } from "react";

interface SectionProps {
  title?: string;
  alt?: boolean;
  children: ReactNode;
  className?: string;
}

const Section = ({ title, alt, children, className = "" }: SectionProps) => {
  const bgClass = alt ? "bg-sandstone" : "";

  return (
    <section className={`py-12 ${bgClass} ${className}`.trim()}>
      <div className="container">
        {title && (
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
