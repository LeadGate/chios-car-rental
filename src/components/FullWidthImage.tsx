import type { ReactNode } from "react";

interface FullWidthImageProps {
  image: string;
  imageAlt?: string;
  overlayClass?: string;
  children: ReactNode;
}

const FullWidthImage = ({
  image,
  imageAlt = "",
  overlayClass = "highlights-overlay",
  children,
}: FullWidthImageProps) => (
  <section className="relative" aria-label="Full width image section">
    <img
      src={image}
      alt={imageAlt}
      width={1600}
      height={900}
      className="absolute inset-0 w-full h-full object-cover"
      loading="lazy"
    />
    <div className={`absolute inset-0 ${overlayClass}`} aria-hidden="true" />
    <div className="container relative z-10 py-16">
      {children}
    </div>
  </section>
);

export default FullWidthImage;
