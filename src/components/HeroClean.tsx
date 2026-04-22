interface HeroCleanProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  overlayClass?: string;
  backgroundImage: string;
  imageAlt?: string;
  children?: React.ReactNode;
}

const HeroClean = ({
  title,
  subtitle,
  ctaText,
  ctaHref,
  overlayClass = "hero-overlay",
  backgroundImage,
  imageAlt = "",
  children,
}: HeroCleanProps) => (
  <section className="relative min-h-[420px] flex items-center" aria-label="Hero">
    <img
      src={backgroundImage}
      alt={imageAlt}
      width={1600}
      height={900}
      className="absolute inset-0 w-full h-full object-cover"
      loading="eager"
    />
    <div className={`absolute inset-0 ${overlayClass}`} aria-hidden="true" />
    <div className="container relative z-10 py-16 md:py-24">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground max-w-3xl leading-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg md:text-xl text-primary-foreground/95 max-w-2xl">
          {subtitle}
        </p>
      )}
      {ctaText && ctaHref && (
        <a
          href={ctaHref}
          className="inline-block mt-6 bg-primary text-primary-foreground font-medium px-6 py-3 rounded-md hover:bg-primary-hover transition-colors min-h-[44px]"
        >
          {ctaText}
        </a>
      )}
      {children}
    </div>
  </section>
);

export default HeroClean;
