import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/HeroSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import Section from "@/components/Section";
import ImageDivider from "@/components/ImageDivider";
import DataTable from "@/components/DataTable";
import { InfoBox, WarningBox } from "@/components/InfoBox";
import CompanyCard from "@/components/CompanyCard";
import AffiliateWidget from "@/components/AffiliateWidget";
import { Car, HelpCircle, MapPin, Plane } from "lucide-react";

const AirportPage = () => {
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
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Airport",
        "item": "https://chios-car-rental.com/chios-airport-car-rental"
      }
    ]
  };

  const faqSchema =
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What Is JKH Airport and Who Runs It?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "**Chios Island National Airport “Omiros”** is the island’s main air gateway, using the IATA code **JKH** and the ICAO code **LGHI**. The **Hellenic Civil Aviation Authority (HCAA)** operates **JKH**, and the airport is not part of the 14-airport Fraport Greece concession; that distinction matters for passenger services, complaint channels, and operational notices. For official reference, the HCAA is the competent body, while the **Greek National Tourism Organisation (GNTO / visitgreece.gr)** lists Chios as a North Aegean destination. The airport runway measures **1,511 metres**, and it is suitable for narrow-body aircraft such as the **Airbus A320**. As a practical travel benchmark, that infrastructure supports regular domestic capacity and seasonal demand tied to ferry arrivals from **Blue Star Ferries**, **Turyol**, **Sunrise Lines**, and **Erturk Lines** through the wider island transport network."
        }
      },
      {
        "@type": "Question",
        "name": "How Does the JKH Pickup Process Work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The pickup process at **Omiros Airport** is short, but the document and insurance checks matter because Greek rental contracts often include a card hold, damage excess, and a named insurance tier. After baggage claim and customs, check whether your supplier is a terminal-desk operator or a curbside operator. **Hertz**, **Europcar**, **Thrifty**, **Enterprise**, **Alamo**, **Budget**, and **AutoUnion** are commonly handled through an arrivals-hall desk, while **SMART Rent A Car**, **Aegean Atsalis**, **Kampas Rent A Car**, and **Masticars** usually coordinate a representative at the exit. The primary driver should present a driving licence, passport, and payment card. Under Greek rental practice, non-EU drivers may need an International Driving Permit depending on licence format and company policy, and the company may place a **preauthorisation** on a credit card rather than charging the deposit immediately. **Insurance terms matter here:** many Chios contracts separate **CDW** from the remaining **excess/deductible**, while upgrades such as **SCDW**, **FDW**, or **full coverage** may reduce or remove the **franchise**. Some companies advertise **zero excess**, but the policy wording still needs to be checked for glass, tyres, underbody, lost keys, and towing exclusions. Walk around the vehicle with the representative and photograph every panel, wheel, mirror, roof, and windshield before leaving the lot. A damage note on the handover sheet is essential because disputed dents, scratches, or wheel marks can be charged against the deductible if they were not recorded at pickup. Ask for the fuel rule in writing, confirm the return time, and verify the exact drop-off point. If the rental includes “same-to-same” fuel, return the car with the gauge at the same level and keep the receipt from the nearest station, such as **EL.IN Veriti 41**, **EKO Kontari**, **Leoforos Enoseos Independent**, or **Kalouta 16 Independent**."
        }
      },
      {
        "@type": "Question",
        "name": "What Insurance Should You Choose for a Chios Airport Rental?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The right insurance depends on the rental car category, the road plan, and your tolerance for a deposit hold or excess exposure. **CDW**, **SCDW**, and **FDW** are not identical, and the contract language matters more than the headline name. Ask whether the quote includes a **zero excess** option, whether the rental uses a **franchise**, and whether the policy extends to a **Green Card international insurance** document if you intend to cross outside Greece."
        }
      },
      {
        "@type": "Question",
        "name": "Where Exactly Is the SMART Rent A Car Lot?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "**SMART Rent A Car** operates a local Chios airport service with an off-terminal vehicle lot roughly **400 metres** from the arrivals building. The company can deliver a car curbside or arrange a short walk to the lot, which is a useful arrangement if you are arriving with light luggage. SMART also maintains a Chios Town base at **Neoreion 3** and a port-facing branch at **Neoreion 35**, making it practical for travelers arriving by sea from **Blue Star Ferries**, **Turyol**, **Sunrise Lines**, or **Erturk Lines**. If you are comparing routes and neighborhoods, the town offices are also convenient for travelers staying in the **Kampos district** or connecting to the airport road."
        }
      },
      {
        "@type": "Question",
        "name": "How Do I Get from JKH to Common Destinations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A rental car from **JKH** gives access to the entire island, from the **Pelineon mountain range** in the north to the mastic villages in the south. From the airport, the simplest island loop is southbound toward **Pyrgi**, **Mesta**, **Olympi**, **Kalamoti**, and **Armolia**, or westbound toward **Avgonyma**, **Anavatos**, **Volissos**, and **Mavra Volia**. For a deeper itinerary, combine the airport pickup with [Chios driving essentials](/chios-driving-essentials) and [the mastic villages road trip](/mastic-villages-road-trip)."
        }
      },
      {
        "@type": "Question",
        "name": "What Should You Do Before Returning the Car to JKH?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A clean return process depends on fuel proof, damage photos, and timing, especially if the company uses a deposit hold or later inspection. Fuel prices near the airport can differ materially from town stations. On **16 April 2026**, one independent station on **Leoforos Enoseos Independent** priced Euro 95 at **€2.099/litre**, while **EL.IN Veriti 41** listed the same fuel at **€1.939/litre** on **19 April 2026**. **EKO Kontari** and **Kalouta 16 Independent** are also useful comparison points, so the best price is worth checking before return. Take photos of the fuel gauge, odometer, and cabin condition before handing back the keys. This protects you if the final invoice includes a cleaning fee or missing-fuel charge, and it is especially useful when the rental company performs a later inspection after you leave the lot."
        }
      },
      {
        "@type": "Question",
        "name": "What Ferry and Cross-Border Rules Matter for a Chios Rental?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Chios rental car is ideal for island travel, but ferry and cross-border assumptions need to stay realistic."
        }
      },
      {
        "@type": "Question",
        "name": "Which Authorities and Consumer Bodies Can Help If There Is a Problem?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If a dispute arises, the first reference point is the rental contract, followed by the island’s local business bodies and the Greek consumer framework. The **Chios Chamber of Commerce** can help you identify registered local operators, while the **Hellenic Consumer’s Ombudsman** at **synigoros-katanaloti.gr** is the national complaint channel for unfair commercial practices. For regulatory context, the **Ministry of Infrastructure and Transport (YPOMEDI)** and the **Hellenic Police (EL.AS)** are the state bodies most relevant to road use and enforcement. If you need a public-information route before booking, the **Piraeus Bank Group Cultural Foundation (PIOP)** provides museum and cultural context for the island’s mastic heritage, and the **GNTO** site remains a useful tourism reference when planning routes around **Nea Moni**, **Anavatos**, and **Mastichochoria**."
        }
      }
    ]
  };

  return (
    <Layout>
      <SEOHead
        title="JKH Airport Car Rental Pickup | Chios Car Rental"
        description="Picking up a rental car at Chios Island National Airport “Omiros” (JKH / LGHI) is simple when you know the pickup flow, the insurance rules, and the local"
        canonical="https://chios-car-rental.com/chios-airport-car-rental"
        jsonLd={[breadcrumbSchema, faqSchema]}
      />

      <Breadcrumbs items={[{ label: "Airport" }]} />

      <HeroSection
        title="Your Complete Guide to Chios Airport Car Rental Pickup at JKH"
        subtitle={<><p className="text-white drop-shadow-md">Picking up a rental car at <strong>Chios Island National Airport “Omiros” (JKH / LGHI)</strong> is simple when you know the pickup flow, the insurance rules, and the local road layout. <strong>HCAA</strong> manages the airport, not Fraport, and the field has a <strong>1,511 m runway</strong> that can handle an <strong>Airbus A320</strong>, which is why both terminal desks and curbside meet-and-greet handovers work efficiently at this North Aegean gateway.</p></>}
        image="/4.webp"
        imageAlt="Chios Island National Airport Omiros terminal building exterior"
        ctaText="Compare Car Rental Deals"
        ctaHref="#compare"
      />

      <AffiliateWidget />

      <Section
        icon={<Plane className="w-6 h-6" />}
        title="What Is JKH Airport and Who Runs It?"
      >
          <p className="text-gray-700 mb-4 leading-relaxed"><strong>Chios Island National Airport “Omiros”</strong> is the island’s main air gateway, using the IATA code <strong>JKH</strong> and the ICAO code <strong>LGHI</strong>.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">The <strong>Hellenic Civil Aviation Authority (HCAA)</strong> operates <strong>JKH</strong>, and the airport is not part of the 14-airport Fraport Greece concession; that distinction matters for passenger services, complaint channels, and operational notices. For official reference, the HCAA is the competent body, while the <strong>Greek National Tourism Organisation (GNTO / visitgreece.gr)</strong> lists Chios as a North Aegean destination.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">The airport runway measures <strong>1,511 metres</strong>, and it is suitable for narrow-body aircraft such as the <strong>Airbus A320</strong>. As a practical travel benchmark, that infrastructure supports regular domestic capacity and seasonal demand tied to ferry arrivals from <strong>Blue Star Ferries</strong>, <strong>Turyol</strong>, <strong>Sunrise Lines</strong>, and <strong>Erturk Lines</strong> through the wider island transport network.</p>
          <InfoBox><p>💡 <strong>Tip:</strong> Use JKH for fast access to the south of the island, including <strong>Karfas</strong>, <strong>Kampos district</strong>, and <strong>Mastichochoria</strong>, because the airport-to-resort drive is much shorter than arriving by ferry and then crossing the whole island.</p></InfoBox>
      </Section>

      <Section
        icon={<Plane className="w-6 h-6" />}
        title="Which Rental Companies Operate at Chios Airport?"
        alt
      >
          <CompanyCard><p><strong>AutoUnion:</strong> Airport counter presence and airport-style handover, typically used for travelers who want an on-terminal pickup.</p></CompanyCard>
          <CompanyCard><p><strong>Hertz:</strong> International brand option with desk-based service and standard deposit procedures.</p></CompanyCard>
          <CompanyCard><p><strong>Europcar:</strong> Terminal-adjacent pickup and delivery structure, usually paired with card-based preauthorisation.</p></CompanyCard>
          <CompanyCard><p><strong>Thrifty:</strong> Budget-oriented branded counter service with standard condition-report documentation.</p></CompanyCard>
          <CompanyCard><p><strong>Enterprise:</strong> Major-network rental with a formal agreement process and damage check at handover.</p></CompanyCard>
          <CompanyCard><p><strong>Alamo:</strong> Similar group structure to Enterprise, with airport collection and contract confirmation.</p></CompanyCard>
          <CompanyCard><p><strong>Budget:</strong> Compact-to-midrange airport rental option with standard deposit and fuel-policy terms.</p></CompanyCard>
          <CompanyCard><p><strong>AbbyCar:</strong> Greek operator that may use desk support or a meet-and-greet format depending on season.</p></CompanyCard>
          <CompanyCard><p><strong>SMART Rent A Car:</strong> Local operator with curbside handover and an off-terminal lot, often used for faster collection.</p></CompanyCard>
          <CompanyCard><p><strong>Aegean Atsalis:</strong> Local operator with name-card pickup, popular for personalized airport meet-and-greet.</p></CompanyCard>
          <CompanyCard><p><strong>Kampas Rent A Car:</strong> Independent local provider that usually coordinates direct handover close to the terminal.</p></CompanyCard>
          <CompanyCard><p><strong>Masticars:</strong> Chios-based operator suited to travelers who want island-local service and route advice for the mastic villages.</p></CompanyCard>
          <DataTable headers={["Pickup model", "Companies", "Typical value"]} rows={[["Desk inside Arrivals Hall", "Hertz, Europcar, Thrifty, Enterprise, Alamo, Budget, AutoUnion", "Terminal-based paperwork and card preauthorisation"], ["Curbside meet-and-greet", "SMART Rent A Car, Aegean Atsalis, Kampas Rent A Car, AbbyCar, Masticars", "Faster handover and lower queue time"]]} />
          <InfoBox><p>💡 <strong>Tip:</strong> For a first day in Chios, a compact <strong>A1 mini</strong> or <strong>B compact</strong> category such as a <strong>Kia Picanto</strong> or <strong>Hyundai i10</strong> is easier to park in <strong>Chios Town</strong>, <strong>Karfas</strong>, and the narrow streets near <strong>Pyrgi</strong> and <strong>Mesta</strong>.</p></InfoBox>
      </Section>

      <div className="flex justify-center py-6">
        <a href="/" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-primary-foreground font-semibold shadow-md hover:opacity-90 transition">
          Compare Car Rental Deals
        </a>
      </div>

      <Section
        icon={<Car className="w-6 h-6" />}
        title="How Does the JKH Pickup Process Work?"
      >
          <p className="text-gray-700 mb-4 leading-relaxed">The pickup process at <strong>Omiros Airport</strong> is short, but the document and insurance checks matter because Greek rental contracts often include a card hold, damage excess, and a named insurance tier.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Step 1: Locate Your Rental Company</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">After baggage claim and customs, check whether your supplier is a terminal-desk operator or a curbside operator. <strong>Hertz</strong>, <strong>Europcar</strong>, <strong>Thrifty</strong>, <strong>Enterprise</strong>, <strong>Alamo</strong>, <strong>Budget</strong>, and <strong>AutoUnion</strong> are commonly handled through an arrivals-hall desk, while <strong>SMART Rent A Car</strong>, <strong>Aegean Atsalis</strong>, <strong>Kampas Rent A Car</strong>, and <strong>Masticars</strong> usually coordinate a representative at the exit.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Step 2: Prepare the Required Documents</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">The primary driver should present a driving licence, passport, and payment card. Under Greek rental practice, non-EU drivers may need an International Driving Permit depending on licence format and company policy, and the company may place a <strong>preauthorisation</strong> on a credit card rather than charging the deposit immediately.</p>
          <p className="text-gray-700 mb-4 leading-relaxed"><strong>Insurance terms matter here:</strong> many Chios contracts separate <strong>CDW</strong> from the remaining <strong>excess/deductible</strong>, while upgrades such as <strong>SCDW</strong>, <strong>FDW</strong>, or <strong>full coverage</strong> may reduce or remove the <strong>franchise</strong>. Some companies advertise <strong>zero excess</strong>, but the policy wording still needs to be checked for glass, tyres, underbody, lost keys, and towing exclusions.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Step 3: Inspect the Vehicle Before You Sign</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Walk around the vehicle with the representative and photograph every panel, wheel, mirror, roof, and windshield before leaving the lot. A damage note on the handover sheet is essential because disputed dents, scratches, or wheel marks can be charged against the deductible if they were not recorded at pickup.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Step 4: Confirm Fuel and Return Terms</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Ask for the fuel rule in writing, confirm the return time, and verify the exact drop-off point. If the rental includes “same-to-same” fuel, return the car with the gauge at the same level and keep the receipt from the nearest station, such as <strong>EL.IN Veriti 41</strong>, <strong>EKO Kontari</strong>, <strong>Leoforos Enoseos Independent</strong>, or <strong>Kalouta 16 Independent</strong>.</p>
          <WarningBox><p>⚠️ <strong>Warning:</strong> <strong>Law 5209/2025</strong> changed Greek urban driving rules, including a <strong>30 km/h limit on single-lane roads</strong> in specific urban contexts, so do not rely on a generic 50 km/h assumption when leaving the airport or entering dense village streets.</p></WarningBox>
      </Section>

      <ImageDivider src="/3.webp" alt="Chios car rental" />

      <Section
        icon={<Plane className="w-6 h-6" />}
        title="What Insurance Should You Choose for a Chios Airport Rental?"
        alt
      >
          <p className="text-gray-700 mb-4 leading-relaxed">The right insurance depends on the rental car category, the road plan, and your tolerance for a deposit hold or excess exposure.</p>
          <DataTable headers={["Insurance type", "What it usually changes", "Common caveat"]} rows={[["CDW", "Lowers damage liability", "Often leaves an excess/deductible"], ["SCDW", "Reduces the excess/franchise", "May exclude tyres, glass, and underbody"], ["FDW", "Can remove more damage liability", "Company terms still control non-collision items"], ["Zero excess", "Aims to remove the deductible", "Card preauthorisation may still apply"], ["Full coverage", "Broadest marketed protection", "Policy wording can still list exclusions"]]} />
          <p className="text-gray-700 mb-4 leading-relaxed"><strong>CDW</strong>, <strong>SCDW</strong>, and <strong>FDW</strong> are not identical, and the contract language matters more than the headline name. Ask whether the quote includes a <strong>zero excess</strong> option, whether the rental uses a <strong>franchise</strong>, and whether the policy extends to a <strong>Green Card international insurance</strong> document if you intend to cross outside Greece.</p>
          <CompanyCard><p><strong>SMART Rent A Car:</strong> local contracts often pair competitive daily rates with flexible excess options, but the renter must still read the exclusions list before signing.</p></CompanyCard>
          <CompanyCard><p><strong>Hertz:</strong> branded rental policies usually rely on standardized terms, so the deductible and card hold are easier to verify at the counter.</p></CompanyCard>
          <CompanyCard><p><strong>Europcar:</strong> airport collection often includes optional insurance upgrades, and the final price depends on whether the agreement includes full coverage or a reduced excess.</p></CompanyCard>
          <WarningBox><p>⚠️ <strong>Warning:</strong> Do not assume “full coverage” means every loss is covered, because Greek rental agreements may still exclude tyres, wheels, glass, key loss, and ferry damage unless the contract explicitly says otherwise.</p></WarningBox>
      </Section>

      <div className="flex justify-center py-6">
        <a href="/" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-primary-foreground font-semibold shadow-md hover:opacity-90 transition">
          Compare Car Rental Deals
        </a>
      </div>

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Where Exactly Is the SMART Rent A Car Lot?"
      >
          <p className="text-gray-700 mb-4 leading-relaxed"><strong>SMART Rent A Car</strong> operates a local Chios airport service with an off-terminal vehicle lot roughly <strong>400 metres</strong> from the arrivals building. The company can deliver a car curbside or arrange a short walk to the lot, which is a useful arrangement if you are arriving with light luggage.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">SMART also maintains a Chios Town base at <strong>Neoreion 3</strong> and a port-facing branch at <strong>Neoreion 35</strong>, making it practical for travelers arriving by sea from <strong>Blue Star Ferries</strong>, <strong>Turyol</strong>, <strong>Sunrise Lines</strong>, or <strong>Erturk Lines</strong>. If you are comparing routes and neighborhoods, the town offices are also convenient for travelers staying in the <strong>Kampos district</strong> or connecting to the airport road.</p>
          <InfoBox><p>💡 <strong>Tip:</strong> If you plan to refuel before return, check the route from SMART’s lot to <strong>EL.IN Veriti 41</strong> or <strong>EKO Kontari</strong> in advance so you do not circle back through congested airport traffic.</p></InfoBox>
      </Section>

      <Section
        icon={<MapPin className="w-6 h-6" />}
        title="How Do I Get from JKH to Common Destinations?"
        alt
      >
          <p className="text-gray-700 mb-4 leading-relaxed">A rental car from <strong>JKH</strong> gives access to the entire island, from the <strong>Pelineon mountain range</strong> in the north to the mastic villages in the south.</p>
          <DataTable headers={["Destination", "Distance from JKH", "Estimated drive time", "Local note"]} rows={[["Chios Town Centre", "4 km", "8 minutes", "Closest urban base for hotels and port access"], ["Karfas", "3 km", "6 minutes", "Main beach resort near the airport"], ["Kampos district", "8 km", "15 minutes", "Citrus mansions and historic lanes"], ["Nea Moni", "19 km", "30 minutes", "UNESCO-listed monastery route"], ["Vrontados", "8 km", "15 minutes", "Northern seafront settlement near Chios Town"], ["Anavatos", "24 km", "35 minutes", "Hill village with strong sightseeing value"], ["Avgonyma", "28 km", "35\u201340 minutes", "Gateway to western mountain routes"], ["Volissos", "45 km", "~1 hour", "North-west village and castle access"], ["Pyrgi", "25 km", "30 minutes", "Mastic village with decorative fa\u00e7ades"], ["Mesta", "32 km", "35\u201340 minutes", "Fortified village in the mastic zone"], ["Emporios", "38 km", "45 minutes", "South-west coast access point"], ["Mavra Volia", "39 km", "45 minutes", "Black-pebble beach near Emporios"], ["Olympi", "29 km", "35 minutes", "Mastic village with cave access"], ["Kalamoti", "30 km", "35 minutes", "Southern village route"], ["Armolia", "27 km", "35 minutes", "Ceramic and mastic-village access"]]} />
          <p className="text-gray-700 mb-4 leading-relaxed">From the airport, the simplest island loop is southbound toward <strong>Pyrgi</strong>, <strong>Mesta</strong>, <strong>Olympi</strong>, <strong>Kalamoti</strong>, and <strong>Armolia</strong>, or westbound toward <strong>Avgonyma</strong>, <strong>Anavatos</strong>, <strong>Volissos</strong>, and <strong>Mavra Volia</strong>. For a deeper itinerary, combine the airport pickup with <a href="/driving-in-chios" className="text-primary underline hover:text-accent">Chios driving essentials</a> and <a href="/day-trips-from-chios" className="text-primary underline hover:text-accent">the mastic villages road trip</a>.</p>
          <InfoBox><p>💡 <strong>Tip:</strong> The mastic villages are best visited by car, but vehicle access into the historical cores is forbidden, so park outside and continue on foot when you reach <strong>Pyrgi</strong>, <strong>Mesta</strong>, or <strong>Olympi</strong>.</p></InfoBox>
      </Section>

      <ImageDivider src="/4.webp" alt="Chios car rental" />

      <Section
        icon={<Car className="w-6 h-6" />}
        title="What Should You Do Before Returning the Car to JKH?"
      >
          <p className="text-gray-700 mb-4 leading-relaxed">A clean return process depends on fuel proof, damage photos, and timing, especially if the company uses a deposit hold or later inspection.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Refuel Smartly</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Fuel prices near the airport can differ materially from town stations. On <strong>16 April 2026</strong>, one independent station on <strong>Leoforos Enoseos Independent</strong> priced Euro 95 at <strong>€2.099/litre</strong>, while <strong>EL.IN Veriti 41</strong> listed the same fuel at <strong>€1.939/litre</strong> on <strong>19 April 2026</strong>. <strong>EKO Kontari</strong> and <strong>Kalouta 16 Independent</strong> are also useful comparison points, so the best price is worth checking before return.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Document Everything</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Take photos of the fuel gauge, odometer, and cabin condition before handing back the keys. This protects you if the final invoice includes a cleaning fee or missing-fuel charge, and it is especially useful when the rental company performs a later inspection after you leave the lot.</p>
          <WarningBox><p>⚠️ <strong>Warning:</strong> If you are driving back from the west or south, slow down early because <strong>Law 4850/2021</strong> and local enforcement by <strong>Hellenic Police (EL.AS)</strong> support fines for noncompliant roadside stopping, improper parking, and unsafe driving near busy airport access roads.</p></WarningBox>
      </Section>

      <Section
        icon={<Car className="w-6 h-6" />}
        title="What Ferry and Cross-Border Rules Matter for a Chios Rental?"
        alt
      >
          <p className="text-gray-700 mb-4 leading-relaxed">A Chios rental car is ideal for island travel, but ferry and cross-border assumptions need to stay realistic.</p>
          <CompanyCard><p><strong>Blue Star Ferries:</strong> Main domestic operator for Piraeus and Aegean routes, useful if you arrive by sea and pick up locally.</p></CompanyCard>
          <CompanyCard><p><strong>Turyol:</strong> Cross-channel ferry company serving the Chios–Çeşme corridor for passengers, but rental-car export rules are usually restricted by insurer terms.</p></CompanyCard>
          <CompanyCard><p><strong>Sunrise Lines:</strong> Seasonal or regional sea-link operator that can affect arrival timing and same-day pickup plans.</p></CompanyCard>
          <CompanyCard><p><strong>Erturk Lines:</strong> Another Chios–Turkey service name that can influence passenger travel plans, but not every rental contract allows cross-border use.</p></CompanyCard>
          <WarningBox><p>⚠️ <strong>Warning:</strong> Do not assume you can take a rented Chios car onto the Çeşme ferry into Turkey, because many rental agreements prohibit practical cross-border vehicle movement and require explicit permission, a Green Card, and written insurer approval.</p></WarningBox>
      </Section>

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Which Authorities and Consumer Bodies Can Help If There Is a Problem?"
      >
          <p className="text-gray-700 mb-4 leading-relaxed">If a dispute arises, the first reference point is the rental contract, followed by the island’s local business bodies and the Greek consumer framework.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">The <strong>Chios Chamber of Commerce</strong> can help you identify registered local operators, while the <strong>Hellenic Consumer’s Ombudsman</strong> at <strong>synigoros-katanaloti.gr</strong> is the national complaint channel for unfair commercial practices. For regulatory context, the <strong>Ministry of Infrastructure and Transport (YPOMEDI)</strong> and the <strong>Hellenic Police (EL.AS)</strong> are the state bodies most relevant to road use and enforcement.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">If you need a public-information route before booking, the <strong>Piraeus Bank Group Cultural Foundation (PIOP)</strong> provides museum and cultural context for the island’s mastic heritage, and the <strong>GNTO</strong> site remains a useful tourism reference when planning routes around <strong>Nea Moni</strong>, <strong>Anavatos</strong>, and <strong>Mastichochoria</strong>.</p>
          <InfoBox><p>💡 <strong>Tip:</strong> For a mixed airport-and-port itinerary, compare car pickup near JKH with port pickup through <strong>SMART Rent A Car</strong> or <strong>Kampas Rent A Car</strong>, then use <a href="/parking-and-fuel-guide" className="text-primary underline hover:text-accent">parking and fuel in Chios</a> to avoid last-minute return fees.</p></InfoBox>
      </Section>

      <ImageDivider src="/6.webp" alt="Chios car rental" />

      <Section
        icon={<HelpCircle className="w-6 h-6" />}
        title="FAQ"
        alt
      >
          <h3 className="text-xl font-bold mt-6 mb-3">Is Chios Airport car rental desk-based or curbside?</h3>
          <p className="text-gray-700 mb-4 leading-relaxed"><strong>Chios Airport car rental is both desk-based and curbside, depending on the company.</strong> Terminal brands such as <strong>Hertz</strong>, <strong>Europcar</strong>, <strong>Thrifty</strong>, <strong>Enterprise</strong>, <strong>Alamo</strong>, <strong>Budget</strong>, and <strong>AutoUnion</strong> use Arrivals Hall counters, while <strong>SMART Rent A Car</strong>, <strong>Aegean Atsalis</strong>, <strong>Kampas Rent A Car</strong>, and <strong>Masticars</strong> often use meet-and-greet pickup. This split reflects airport practice at <strong>JKH / LGHI</strong> under <strong>HCAA</strong> operations, rather than a single concession model. If your booking does not state the pickup model, confirm it before landing.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Do I need a credit card for a Chios Airport rental?</h3>
          <p className="text-gray-700 mb-4 leading-relaxed"><strong>A credit card in the main driver’s name is usually required for the deposit preauthorisation.</strong> Most Greek rental contracts place a block rather than an immediate charge, and the amount depends on whether your booking includes <strong>CDW</strong>, <strong>SCDW</strong>, <strong>FDW</strong>, or <strong>zero excess</strong> coverage. Debit-card acceptance is limited and often tied to premium insurance or a higher deposit. If the supplier offers a debit option, read the franchise and excess clauses before agreeing.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Can I drive a rented Chios car to Turkey via Çeşme?</h3>
          <p className="text-gray-700 mb-4 leading-relaxed"><strong>A rented Chios car usually cannot be taken practically onto the Çeşme ferry to Turkey.</strong> Many contracts require written permission, a <strong>Green Card international insurance</strong> document, and insurer approval before any cross-border use, and some companies prohibit vehicle export entirely. If you need Turkey access, ask the company before paying the deposit, because refusal after pickup can still leave you bound to the rental contract.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Which fuel station is cheapest near Chios Airport?</h3>
          <p className="text-gray-700 mb-4 leading-relaxed"><strong>The cheapest station near Chios Airport is usually the one with the latest lower posted price, not a fixed brand.</strong> In the sample comparisons cited here, <strong>EL.IN Veriti 41</strong> posted <strong>€1.939/litre</strong> on <strong>19 April 2026</strong>, versus <strong>€2.099/litre</strong> at one independent station on <strong>Leoforos Enoseos Independent</strong> on <strong>16 April 2026</strong>. Prices can change daily, and any station on the airport approach road may be more expensive at peak arrival times.</p>
      </Section>

      <div className="flex justify-center pb-12">
        <a href="/#compare" className="cta-button">Compare Car Rental Deals</a>
      </div>
    </Layout>
  );
};

export default AirportPage;
