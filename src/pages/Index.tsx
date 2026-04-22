import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/HeroSection";
import AffiliateWidget from "@/components/AffiliateWidget";
import Section from "@/components/Section";
import ImageDivider from "@/components/ImageDivider";
import DataTable from "@/components/DataTable";
import { InfoBox, WarningBox } from "@/components/InfoBox";
import CompanyCard from "@/components/CompanyCard";
import { Car, DollarSign, MapPin } from "lucide-react";

const Index = () => {
  const breadcrumbSchema =
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://chios-car-rental.com"
      }
    ]
  };

  const websiteSchema =
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Chios Car Rental",
    "url": "https://chios-car-rental.com"
  };

  const organizationSchema =
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Chios Car Rental",
    "url": "https://chios-car-rental.com",
    "logo": "https://chios-car-rental.com/favicon-512x512.png",
    "description": "Independent car rental comparison guide for Chios. Compare deals from local and international providers.",
    "areaServed": {
      "@type": "Place",
      "name": "Chios"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@chios-car-rental.com",
      "url": "https://chios-car-rental.com/contact"
    }
  };

  const faqSchema =
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How Much Does Car Rental Cost in Chios?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Chios car rental prices vary by season, transmission, and insurance bundle, and the most useful comparison is a rate with CDW included versus a rate with full coverage or zero excess. In 2025, economy cars in Chios often start near €22/day in shoulder months and rise to about €55–€70/day in August, while airport desks and local suppliers such as SMART Rent A Car, Aegean Atsalis, Kampas Rent A Car, and Masticars can quote higher weekend rates when availability tightens. Rental companies in Chios usually preauthorise the security deposit on a credit card, and the amount can vary with the vehicle class and the insurer’s policy. Basic CDW generally reduces the franchise, SCDW can lower the excess further, and FDW or a written full coverage add-on can remove most damage liability if the rental contract says so. For comparison and booking, check [airport pickup and insurance rules](/chios-airport-car-rental) and [parking, fuel, and refill basics](/parking-and-fuel-chios)."
        }
      },
      {
        "@type": "Question",
        "name": "Where Can I Pick Up a Rental Car in Chios?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Chios rentals are concentrated around the airport, the main port, and selected hotel zones, and each pickup point has a different company mix and handover process. If you are planning around ferry or flight timing, the practical options are Chios Airport JKH, Chios Town Port, Mesta Port, hotel delivery in the Kampos district, and village delivery for destinations such as Karfas, Vrontados, Volissos, and Nea Moni access roads. Chios Airport is the island’s main arrival hub, and the HCAA manages the terminal where international desks for Hertz, Avis, Budget, Thrifty, Enterprise, Alamo, Europcar, AbbyCar, AutoUnion, and Goldcar operate alongside local representatives from SMART Rent A Car, Aegean Atsalis, Kampas Rent A Car, and Masticars. The runway is 1,511 m long, which is why aircraft such as the Airbus A320 are commonly associated with regular service patterns, and the airport sits close enough to Chios Town that many handovers happen within minutes of landing. For a step-by-step arrival plan, use [the airport pickup guide](/chios-airport-car-rental). Blue Star Ferries connects Chios Town with Piraeus on overnight sailings, and local agencies can meet passengers at the disembarkation area if the booking includes the ferry name and ETA. This arrangement is easiest for travelers who want to continue straight to the Kampos district, Vrontados, or the southern villages without waiting for an office transfer. Mesta Port receives services from Turyol, Sunrise Lines, and Erturk Lines on selected schedules, and rental handover here is usually prearranged because no permanent airport-style counter operates at the terminal. Cars are typically delivered for onward use to Mesta, Pyrgi, Olympi, Kalamoti, Armolia, and the wider Mastichochoria area. Hotel delivery is common in Karfas, Kampos district, Vrontados, Volissos, and beach areas near Mavra Volia, and suppliers often charge a delivery fee instead of a walk-in counter surcharge. The local operator and the delivery window should be confirmed on the voucher before arrival, especially during August."
        }
      },
      {
        "@type": "Question",
        "name": "Who Rents Cars on Chios?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Chios car rental market includes global brands, national chains, and island operators, and each company type brings a different balance of price, deposit size, and insurance flexibility. On-airport desks are commonly staffed by Hertz, Avis, Budget, Thrifty, Enterprise, Alamo, Europcar, AbbyCar, AutoUnion, and Goldcar, while local businesses such as SMART Rent A Car, Aegean Atsalis, Kampas Rent A Car, and Masticars often focus on hotel delivery and island-wide handover. Local firms may accept debit cards with a higher preauthorisation, but most rental contracts still prefer a credit card because the deposit is blocked rather than charged. For consumers who want an official complaint path, the Hellenic Consumer’s Ombudsman at synigoros-katanaloti.gr, the Chios Chamber of Commerce, and the GNTO at visitgreece.gr are relevant reference points if a booking dispute escalates."
        }
      },
      {
        "@type": "Question",
        "name": "What Should You Know Before Driving in Chios?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Driving in Chios is manageable for most visitors, but the island combines narrow mountain roads, village access restrictions, and changing legal rules that are worth checking before departure. Greek Law 5209/2025 sets a 30 km/h default in single-lane urban streets, while Law 4850/2021 affects which foreign licences are accepted without an IDP, so the legal details matter as much as the route choice. For route planning, parking, and petrol stops, read [Chios driving essentials](/chios-driving-essentials) and use [parking and fuel locations](/parking-and-fuel-chios) to avoid low-fuel detours."
        }
      }
    ]
  };

  return (
    <Layout>
      <SEOHead
        title="Chios Car Rental — Compare Deals | Chios Car Rental"
        description="Renting a car in Chios is the most practical way to reach the island’s beaches, mountain villages, and monasteries because public buses are limited"
        canonical="https://chios-car-rental.com"
        jsonLd={[breadcrumbSchema, websiteSchema, organizationSchema, faqSchema]}
      />

      <HeroSection
        title="Chios Car Rental"
        subtitle={<><p className="text-white drop-shadow-md">Renting a car in Chios is the most practical way to reach the island’s beaches, mountain villages, and monasteries because public buses are limited outside Chios Town and the road network spreads across the North Aegean, from the Kampos district to the Pelineon mountain range. A pre-booked vehicle at Chios Airport helps you avoid queue time, compare CDW and SCDW options before arrival, and start driving immediately after landing at JKH (ICAO: LGHI), also called "Omiros" Airport.</p></>}
        image="/1.webp"
        imageAlt="Aerial view of Chios Town harbour at golden hour with mountains in the distance"
        ctaText="Compare Car Rental Deals"
        ctaHref="#compare"
      />

      <AffiliateWidget id="compare" />

      <Section
        icon={<DollarSign className="w-6 h-6" />}
        title="How Much Does Car Rental Cost in Chios?"
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Chios car rental prices vary by season, transmission, and insurance bundle, and the most useful comparison is a rate with CDW included versus a rate with full coverage or zero excess. In 2025, economy cars in Chios often start near €22/day in shoulder months and rise to about €55–€70/day in August, while airport desks and local suppliers such as SMART Rent A Car, Aegean Atsalis, Kampas Rent A Car, and Masticars can quote higher weekend rates when availability tightens.</p>
          <DataTable headers={["Car Category", "Example Models", "Typical Use Case", "Shoulder Season Avg.", "August Avg.", "Insurance Notes"]} rows={[["A1 mini", "Kia Picanto, Hyundai i10", "City hops, Kampos district stays", "\u20ac22\u2013\u20ac30/day", "\u20ac55\u2013\u20ac70/day", "CDW included, SCDW optional"], ["B compact", "Ford Fiesta, Hyundai Accent", "Couples, mixed island driving", "\u20ac28\u2013\u20ac38/day", "\u20ac65\u2013\u20ac85/day", "Excess/deductible often \u20ac800\u2013\u20ac2,500"], ["C comfort", "Volkswagen Golf class", "Longer routes to Volissos or Nea Moni", "\u20ac35\u2013\u20ac50/day", "\u20ac80\u2013\u20ac110/day", "Ask for zero excess or full coverage"], ["D power", "Manual turbo hatchback class", "Faster motorway-style touring", "\u20ac45\u2013\u20ac65/day", "\u20ac95\u2013\u20ac130/day", "Franchise may still apply without SCDW"], ["F SUV", "Suzuki Jimny, compact SUV", "Gravel access near beaches", "\u20ac55\u2013\u20ac75/day", "\u20ac120\u2013\u20ac155/day", "Useful for steeper roads"], ["R 4\u00d74", "True 4\u00d74 rental class", "Remote west coast and mountain tracks", "\u20ac70\u2013\u20ac90/day", "\u20ac140\u2013\u20ac180+/day", "Confirm damage exclusions in writing"]]} />
          <p className="text-gray-700 mb-4 leading-relaxed">Rental companies in Chios usually preauthorise the security deposit on a credit card, and the amount can vary with the vehicle class and the insurer’s policy. Basic CDW generally reduces the franchise, SCDW can lower the excess further, and FDW or a written full coverage add-on can remove most damage liability if the rental contract says so. For comparison and booking, check <a href="/chios-airport-car-rental" className="text-primary underline hover:text-accent">airport pickup and insurance rules</a> and <a href="/parking-and-fuel-guide" className="text-primary underline hover:text-accent">parking, fuel, and refill basics</a>.</p>
          <InfoBox><p>💡 <strong>Tip:</strong> Ask the desk for the exact preauthorisation amount before you sign, because local operators such as SMART Rent A Car and Kampas Rent A Car may hold a smaller deposit than a branded airport counter if you accept a manual transmission and a limited mileage plan.</p></InfoBox>
      </Section>

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Where Can I Pick Up a Rental Car in Chios?"
        alt
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Chios rentals are concentrated around the airport, the main port, and selected hotel zones, and each pickup point has a different company mix and handover process. If you are planning around ferry or flight timing, the practical options are Chios Airport JKH, Chios Town Port, Mesta Port, hotel delivery in the Kampos district, and village delivery for destinations such as Karfas, Vrontados, Volissos, and Nea Moni access roads.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Chios Airport "Omiros" (JKH / LGHI)</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Chios Airport is the island’s main arrival hub, and the HCAA manages the terminal where international desks for Hertz, Avis, Budget, Thrifty, Enterprise, Alamo, Europcar, AbbyCar, AutoUnion, and Goldcar operate alongside local representatives from SMART Rent A Car, Aegean Atsalis, Kampas Rent A Car, and Masticars. The runway is 1,511 m long, which is why aircraft such as the Airbus A320 are commonly associated with regular service patterns, and the airport sits close enough to Chios Town that many handovers happen within minutes of landing. For a step-by-step arrival plan, use <a href="/chios-airport-car-rental" className="text-primary underline hover:text-accent">the airport pickup guide</a>.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Chios Town Port</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Blue Star Ferries connects Chios Town with Piraeus on overnight sailings, and local agencies can meet passengers at the disembarkation area if the booking includes the ferry name and ETA. This arrangement is easiest for travelers who want to continue straight to the Kampos district, Vrontados, or the southern villages without waiting for an office transfer.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Mesta Port</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Mesta Port receives services from Turyol, Sunrise Lines, and Erturk Lines on selected schedules, and rental handover here is usually prearranged because no permanent airport-style counter operates at the terminal. Cars are typically delivered for onward use to Mesta, Pyrgi, Olympi, Kalamoti, Armolia, and the wider Mastichochoria area.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Hotel and Villa Delivery</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Hotel delivery is common in Karfas, Kampos district, Vrontados, Volissos, and beach areas near Mavra Volia, and suppliers often charge a delivery fee instead of a walk-in counter surcharge. The local operator and the delivery window should be confirmed on the voucher before arrival, especially during August.</p>
          <WarningBox><p>⚠️ <strong>Warning:</strong> Rental cars cannot practically cross to Turkey on the Çeşme ferry, so do not plan a cross-border road trip unless the contract explicitly includes Green Card international insurance, written permission, and a separate ferry-friendly policy.</p></WarningBox>
      </Section>

      <ImageDivider src="/2.webp" alt="Chios car rental" />

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Who Rents Cars on Chios?"
      >
          <p className="text-gray-700 mb-4 leading-relaxed">The Chios car rental market includes global brands, national chains, and island operators, and each company type brings a different balance of price, deposit size, and insurance flexibility. On-airport desks are commonly staffed by Hertz, Avis, Budget, Thrifty, Enterprise, Alamo, Europcar, AbbyCar, AutoUnion, and Goldcar, while local businesses such as SMART Rent A Car, Aegean Atsalis, Kampas Rent A Car, and Masticars often focus on hotel delivery and island-wide handover.</p>
          <CompanyCard><p><strong>SMART Rent A Car:</strong> SMART Rent A Car is a long-running local operator with an island fleet that is often cited for broad vehicle choice, and the company is a useful benchmark when comparing A1 mini, B compact, and family SUV rates.</p></CompanyCard>
          <CompanyCard><p><strong>Aegean Atsalis:</strong> Aegean Atsalis is a local Chios supplier that typically emphasizes delivery flexibility, and its quotes are worth comparing if you need airport handover plus Kampos district or Karfas drop-off.</p></CompanyCard>
          <CompanyCard><p><strong>Kampas Rent A Car:</strong> Kampas Rent A Car is an owner-run business that often appeals to travelers who want direct communication, transparent mileage rules, and practical help with village access routes.</p></CompanyCard>
          <CompanyCard><p><strong>Masticars:</strong> Masticars is a Chios-based rental name that is useful for travelers comparing mastic-village itineraries, because its service profile is often aligned with local road knowledge and delivery logistics.</p></CompanyCard>
          <p className="text-gray-700 mb-4 leading-relaxed">Local firms may accept debit cards with a higher preauthorisation, but most rental contracts still prefer a credit card because the deposit is blocked rather than charged. For consumers who want an official complaint path, the Hellenic Consumer’s Ombudsman at synigoros-katanaloti.gr, the Chios Chamber of Commerce, and the GNTO at visitgreece.gr are relevant reference points if a booking dispute escalates.</p>
          <InfoBox><p>💡 <strong>Tip:</strong> Compare the rental voucher with the actual counter contract line by line, because a “zero excess” offer can still exclude tires, glass, underbody, or lost key fees unless the policy says FDW or full coverage in writing.</p></InfoBox>
      </Section>

      <Section
        icon={<Car className="w-6 h-6" />}
        title="What Should You Know Before Driving in Chios?"
        alt
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Driving in Chios is manageable for most visitors, but the island combines narrow mountain roads, village access restrictions, and changing legal rules that are worth checking before departure. Greek Law 5209/2025 sets a 30 km/h default in single-lane urban streets, while Law 4850/2021 affects which foreign licences are accepted without an IDP, so the legal details matter as much as the route choice.</p>
          <DataTable headers={["Topic", "What Chios Drivers Should Know", "Source or Reference"]} rows={[["Urban speed limit", "30 km/h on single-lane roads in built-up areas under Law 5209/2025", "Ministry of Infrastructure and Transport (YPOMEDI)"], ["Licence rules", "Some visitors from the USA, UK, Canada, Australia, and Gibraltar may rent without an IDP under Law 4850/2021", "Greek legal framework and rental policy"], ["Enforcement", "Hellenic Police (EL.AS) checks speed, documents, and parking violations", "EL.AS operations"], ["Agriculture", "Tractors and farm traffic are common near the Mastichochoria during harvest months", "Local road conditions"], ["Mountain roads", "Routes to Volissos, Anavatos, Avgonyma, and Nea Moni can be narrow, steep, and slow", "Island topography"]]} />
          <WarningBox><p>⚠️ <strong>Warning:</strong> If your booking is delayed or your card is declined, the rental company may keep the preauthorisation active for several days after return, so travellers should avoid assuming the hold disappears instantly.</p></WarningBox>
          <InfoBox><p>💡 <strong>Tip:</strong> Fuel planning matters on the west and south sides of Chios, so check stations like EL.IN Veriti 41, EKO Kontari, Leoforos Enoseos Independent, and Kalouta 16 Independent before heading toward Mavra Volia or the remote northwest.</p></InfoBox>
          <p className="text-gray-700 mb-4 leading-relaxed">For route planning, parking, and petrol stops, read <a href="/driving-in-chios" className="text-primary underline hover:text-accent">Chios driving essentials</a> and use <a href="/parking-and-fuel-guide" className="text-primary underline hover:text-accent">parking and fuel locations</a> to avoid low-fuel detours.</p>
      </Section>

      <ImageDivider src="/3.webp" alt="Chios car rental" />

      <Section
        icon={<MapPin className="w-6 h-6" />}
        title="Best Day Trips from Chios Town"
      >
          <p className="text-gray-700 mb-4 leading-relaxed">A rental car makes day trips efficient on Chios because each major attraction sits in a different part of the island, from the Kampos district orchards to the medieval mastic villages and the northwestern castle hill of Volissos. A sensible route plan can group UNESCO sites, beaches, and village lunch stops into one-day loops rather than separate return drives.</p>
          <CompanyCard><p><strong>The Mastic Villages:</strong> The medieval settlements of Mesta, Pyrgi, Olympi, Kalamoti, and Armolia are the core of the Mastichochoria road-trip circuit, and vehicle access inside the historic cores is forbidden, so parking outside the village walls is the normal approach. PIOP at the Piraeus Bank Group Cultural Foundation documents local mastic heritage, while Nea Moni and the surrounding countryside show why Chios remains a cultural priority in the North Aegean.</p></CompanyCard>
          <CompanyCard><p><strong>Nea Moni Monastery:</strong> Nea Moni is an 11th-century UNESCO-listed monastery west of Chios Town, and the road is paved but winding through the foothills of the Pelineon mountain range. Arriving near the official opening time gives you a quieter visit and easier parking.</p></CompanyCard>
          <CompanyCard><p><strong>Anavatos and Avgonyma:</strong> Anavatos sits on a dramatic rocky spur, and Avgonyma is the practical lunch stop on the same west-side loop, which is why many self-drive itineraries combine both villages into one half-day route.</p></CompanyCard>
          <CompanyCard><p><strong>Volissos and the Northwest Coast:</strong> Volissos anchors the northwest, and beaches such as Mavra Volia, Managros, Magemena, and Limnia make the drive worthwhile for visitors who want both coastal views and castle scenery.</p></CompanyCard>
          <InfoBox><p>💡 <strong>Tip:</strong> If you plan to visit Pyrgi, Mesta, and the surrounding Mastichochoria, park once, walk the lanes, and keep your rental agreement in the car so that Hellenic Police checks or village logistics do not slow you down.</p></InfoBox>
          <h3 className="text-xl font-bold mt-6 mb-3">When Should You Book?</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">For July and August travel, book your Chios car rental 2–3 months in advance because the island fleet is finite and the busiest weeks can see the best automatic cars sold out first. Ferry traffic from Piraeus on Blue Star Ferries and from Turkey on Turyol, Sunrise Lines, and Erturk Lines creates a seasonal squeeze, while shoulder months such as May, June, and September usually deliver a better balance of price and availability. The local market includes smaller categories such as A1 mini and B compact, but also family choices like C comfort, D power, F SUV, and R 4×4 if you want extra space or traction.</p>
          <WarningBox><p>⚠️ <strong>Warning:</strong> A short ferry crossing does not guarantee cross-border driving rights, and rental companies generally require separate written approval plus a Green Card international insurance add-on before any border-related use is considered.</p></WarningBox>
      </Section>
    </Layout>
  );
};

export default Index;
