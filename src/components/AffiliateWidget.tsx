import { useEffect, useRef } from "react";

// Chíos city_id = 91961 in the Localrent widget catalog. Note: the SIGNED
// endpoint (widget.localrent.com/api/cities/18?key=travelpayouts&signature=...)
// exposes 149 GR cities including Chíos; the unsigned endpoint only shows
// 23 cities and omits Chíos — localrent_widget_lookup.py was querying the
// unsigned endpoint. Verified against live widget on 2026-04-22.
const WIDGET_SRC =
  "https://tpembd.com/content?trs=517071&shmarker=713621.chios-car-rental&locale=en&curr=EUR&country=18&city=91961&lang=en&width=100&background=transparent&logo=false&header=false&gearbox=false&cars=false&border=false&footer=false&campaign_id=87&promo_id=4322";

const AffiliateWidget = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const host = ref.current;
    if (!host || host.dataset.loaded === "1") return;
    host.dataset.loaded = "1";
    const script = document.createElement("script");
    script.src = WIDGET_SRC;
    script.async = true;
    script.charset = "utf-8";
    host.appendChild(script);
  }, []);

  return (
    <section className="py-8" id="compare">
      <div className="container max-w-3xl mx-auto">
        <div className="bg-background rounded-lg p-4 border border-border shadow-sm">
          <div ref={ref} className="min-h-[120px]" />
        </div>
      </div>
    </section>
  );
};

export default AffiliateWidget;
