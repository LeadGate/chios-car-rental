import type { ReactNode } from "react";

interface ProseSectionProps {
  title: string;
  children: ReactNode;
  alt?: boolean;
  className?: string;
}

const ProseSection = ({ title, children, alt, className = "" }: ProseSectionProps) => {
  const bgClass = alt ? "bg-sandstone" : "";

  return (
    <section className={`py-12 ${bgClass} ${className}`.trim()}>
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default ProseSection;
