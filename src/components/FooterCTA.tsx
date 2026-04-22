import type { ReactNode } from "react";

interface FooterCTAProps {
  image: string;
  imageAlt?: string;
  overlayClass?: string;
  children?: ReactNode;
}

const FooterCTA = ({
  image,
  imageAlt = "",
  overlayClass = "footer-cta-overlay",
  children,
}: FooterCTAProps) => (
  <section className="relative" aria-label="Compare car rental deals">
    <img
      src={image}
      alt={imageAlt}
      width={1600}
      height={900}
      className="absolute inset-0 w-full h-full object-cover"
      loading="lazy"
    />
    <div className={`absolute inset-0 ${overlayClass}`} aria-hidden="true" />
    <div className="container relative z-10 py-16 text-center">
      {children}
    </div>
  </section>
);

export default FooterCTA;
