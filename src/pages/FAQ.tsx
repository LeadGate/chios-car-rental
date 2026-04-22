import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/HeroSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import DataTable from "@/components/DataTable";
import { InfoBox, WarningBox } from "@/components/InfoBox";
import CompanyCard from "@/components/CompanyCard";

const FAQ = () => {
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
        "name": "FAQ",
        "item": "https://chios-car-rental.com/chios-car-rental-faq"
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
        "name": "1) Do I need an International Driving Permit to rent in Chios?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An International Driving Permit is not required for a licence issued by the USA, Canada, the UK, Australia, or Gibraltar, and Law 4850/2021 Article 25 §3 is the legal basis used by Greek rental desks for this exemption. SMART Rent A Car, Hertz, and Aegean Atsalis generally accept those licences without an IDP, but the exact acceptance rule can still vary by supplier and booking channel. If your licence is from another country, or your name on the card and licence do not match, an IDP or a translated licence may still be requested."
        }
      },
      {
        "@type": "Question",
        "name": "2) What is the new 30 km/h speed limit everyone talks about?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Law 5209/2025 introduced a 30 km/h urban limit on single-lane roads, and that lower limit affects built-up areas in Chios Town, Kampos district, Vrontados, and other settlement streets where a single lane is effectively shared by both directions. The law is the key 2025 rule, and the Hellenic Police (EL.AS) can enforce it with roadside checks and automated camera processing. On a Chios rental itinerary, that means extra caution near schools, village entrances, and narrow streets."
        }
      },
      {
        "@type": "Question",
        "name": "3) Can I take my Chios rental car on the Çeşme ferry to Turkey?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Chios rental car is usually not allowed on the Çeşme ferry to Turkey because most rental contracts prohibit cross-border export of the vehicle and require prior written permission plus Green Card international insurance if cross-border travel is even possible. Turyol, Sunrise Lines, and Erturk Lines operate passenger links in the area, but Greek rental fleets on Chios generally remain on island, and the vehicle is expected to stay under the rental agreement’s geographic limits. For Chios-Turkey day trips, the practical option is to travel as a foot passenger and pick up a separate car in Çeşme."
        }
      },
      {
        "@type": "Question",
        "name": "4) How much does an economy rental cost in high season?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An economy rental on Chios typically prices around €66–€82 per day in August and around €22–€30 per day from October to April, with higher rates during ferry-heavy weekends and school-holiday peaks. In fleet terms, that price band usually maps to A1 mini or B compact cars such as the Kia Picanto, Hyundai i10, Suzuki Jimny, Hyundai Accent, or Ford Fiesta, depending on gearbox and availability. Example desk pricing from local channels can rise above the teaser rate by 70% or more once insurance, young-driver fees, and airport surcharges are added."
        }
      },
      {
        "@type": "Question",
        "name": "5) What is the minimum age to rent on Chios?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The minimum rental age on Chios is commonly 21 for basic classes at brands such as Hertz and SMART, 23 at some local operators such as Aegean Atsalis, and 25 for higher-value categories or performance cars. Young-driver surcharges are often charged separately, with examples such as €10/day at Hertz and €13.42/day at SMART, and the rental desk may also require at least 12 months of valid driving history. Age rules can differ by car group, especially for A1 mini, B compact, C comfort, and D power categories."
        }
      },
      {
        "@type": "Question",
        "name": "6) What CDW excess do I actually owe if I damage the car?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The CDW excess on Chios is commonly between €160 and €800 at Hertz, with higher theft-related liabilities that can reach €3,000 for certain luxury groups, while SMART quotations often show a wider excess band of €1,000–€2,500 depending on the fleet class. The amount is usually preauthorised on the primary driver’s credit card at pickup, and that blocked amount acts as the franchise or deductible until the car is returned undamaged. Many desks sell SCDW, FDW, or a zero excess upgrade, and the premium can be around €8–€18/day depending on season and vehicle group."
        }
      },
      {
        "@type": "Question",
        "name": "7) Can I use a debit card for the deposit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A debit card is sometimes accepted for the deposit on Chios, but only with select operators and usually only when the booking includes premium insurance or a zero-excess product. Goldcar, AbbyCar, and some SMART Rent A Car desks may allow debit-card preauthorisation on specific tariffs, while Hertz, Avis, Budget, Thrifty, Enterprise, Alamo, and Europcar generally prefer a credit card in the primary driver’s name. The practical difference is that a debit-card hold can tie up your cash balance until the franchise is released after return."
        }
      },
      {
        "@type": "Question",
        "name": "8) Where do I park in Mesta, Pyrgi, or Olympi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You must park outside the village core in the designated public lots for Mesta, Pyrgi, and Olympi because vehicle access into the medieval streets is forbidden, not merely inconvenient. The stone lanes in these Mastichochoria settlements are too narrow for modern rental cars, and local access rules are consistent with village-preservation practice around the North Aegean mastiha route. Damage caused by attempting to enter the village interior is usually excluded from CDW and SCDW coverage."
        }
      },
      {
        "@type": "Question",
        "name": "9) Where should I refuel before returning to JKH airport?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most practical refuel options before a JKH return are EL.IN Veriti 41, EKO Kontari, Leoforos Enoseos Independent, and Kalouta 16 Independent, because their prices and access routes are commonly used by Chios rental customers. EL.IN Veriti 41 has recently logged Euro 95 at €1.939 and Diesel at €1.950 on 19 April 2026, and station-to-station variation within a 5 km radius of the airport can reach about €0.16 per litre. JKH, also known as Omiros Airport, uses a 1,511 m runway that can serve Airbus A320 operations, so returning with enough fuel helps avoid last-minute airport delays."
        }
      },
      {
        "@type": "Question",
        "name": "10) How do I pay a traffic fine received in a rental car?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A traffic fine in Chios can usually be paid at ELTA or through a Greek bank portal using the RF code on the ticket, and fines from automated cameras may also be forwarded by the rental agency with an administrative charge. The legal and consumer route for disputes runs through the Hellenic Consumer’s Ombudsman at synigoros-katanaloti.gr, and the Hellenic Police (EL.AS) or the Ministry of Infrastructure and Transport (YPOMEDI) may be the relevant authorities depending on how the citation was issued. Some agencies also reserve the right to debit the card for the fine amount plus a €25–€50 processing fee."
        }
      }
    ]
  };

  return (
    <Layout>
      <SEOHead
        title="Chios Car Rental FAQ | Chios Car Rental"
        description="Planning to rent a car on Chios usually comes down to four decisions: driving rules, insurance coverage, airport pickup, and where to park in the mastic"
        canonical="https://chios-car-rental.com/chios-car-rental-faq"
        jsonLd={[breadcrumbSchema, faqSchema]}
      />

      <Breadcrumbs items={[{ label: "FAQ" }]} />

      <HeroSection
        title="Chios Car Rental FAQ: Your Top 10 Questions Answered"
        subtitle={<><p className="text-white drop-shadow-md">Planning to rent a car on Chios usually comes down to four decisions: driving rules, insurance coverage, airport pickup, and where to park in the mastic villages. This FAQ answers the most common Chios car rental questions with 2025 references to Law 4850/2021, Law 5209/2025, HCAA airport operations at JKH (ICAO: LGHI), and policy patterns seen at SMART Rent A Car, Aegean Atsalis, Kampas Rent A Car, Hertz, Avis, Budget, Thrifty, Enterprise, Alamo, Europcar, AbbyCar, AutoUnion, and Goldcar.</p></>}
        image="/16.webp"
        imageAlt="Modern car keys and a rental agreement on a wooden cafe table"
        ctaText="Compare Car Rental Deals"
        ctaHref="#compare"
      />

      <section className="container max-w-4xl py-10">
      <FAQSection
        items={[
          { question: "1) Do I need an International Driving Permit to rent in Chios?", answer: "An International Driving Permit is not required for a licence issued by the USA, Canada, the UK, Australia, or Gibraltar, and Law 4850/2021 Article 25 §3 is the legal basis used by Greek rental desks for this exemption. SMART Rent A Car, Hertz, and Aegean Atsalis generally accept those licences without an IDP, but the exact acceptance rule can still vary by supplier and booking channel. If your licence is from another country, or your name on the card and licence do not match, an IDP or a translated licence may still be requested." },
          { question: "2) What is the new 30 km/h speed limit everyone talks about?", answer: "Law 5209/2025 introduced a 30 km/h urban limit on single-lane roads, and that lower limit affects built-up areas in Chios Town, Kampos district, Vrontados, and other settlement streets where a single lane is effectively shared by both directions. The law is the key 2025 rule, and the Hellenic Police (EL.AS) can enforce it with roadside checks and automated camera processing. On a Chios rental itinerary, that means extra caution near schools, village entrances, and narrow streets." },
          { question: "3) Can I take my Chios rental car on the Çeşme ferry to Turkey?", answer: "A Chios rental car is usually not allowed on the Çeşme ferry to Turkey because most rental contracts prohibit cross-border export of the vehicle and require prior written permission plus Green Card international insurance if cross-border travel is even possible. Turyol, Sunrise Lines, and Erturk Lines operate passenger links in the area, but Greek rental fleets on Chios generally remain on island, and the vehicle is expected to stay under the rental agreement’s geographic limits. For Chios-Turkey day trips, the practical option is to travel as a foot passenger and pick up a separate car in Çeşme." },
          { question: "4) How much does an economy rental cost in high season?", answer: "An economy rental on Chios typically prices around €66–€82 per day in August and around €22–€30 per day from October to April, with higher rates during ferry-heavy weekends and school-holiday peaks. In fleet terms, that price band usually maps to A1 mini or B compact cars such as the Kia Picanto, Hyundai i10, Suzuki Jimny, Hyundai Accent, or Ford Fiesta, depending on gearbox and availability. Example desk pricing from local channels can rise above the teaser rate by 70% or more once insurance, young-driver fees, and airport surcharges are added." },
          { question: "5) What is the minimum age to rent on Chios?", answer: "The minimum rental age on Chios is commonly 21 for basic classes at brands such as Hertz and SMART, 23 at some local operators such as Aegean Atsalis, and 25 for higher-value categories or performance cars. Young-driver surcharges are often charged separately, with examples such as €10/day at Hertz and €13.42/day at SMART, and the rental desk may also require at least 12 months of valid driving history. Age rules can differ by car group, especially for A1 mini, B compact, C comfort, and D power categories." },
          { question: "6) What CDW excess do I actually owe if I damage the car?", answer: "The CDW excess on Chios is commonly between €160 and €800 at Hertz, with higher theft-related liabilities that can reach €3,000 for certain luxury groups, while SMART quotations often show a wider excess band of €1,000–€2,500 depending on the fleet class. The amount is usually preauthorised on the primary driver’s credit card at pickup, and that blocked amount acts as the franchise or deductible until the car is returned undamaged. Many desks sell SCDW, FDW, or a zero excess upgrade, and the premium can be around €8–€18/day depending on season and vehicle group." },
          { question: "7) Can I use a debit card for the deposit?", answer: "A debit card is sometimes accepted for the deposit on Chios, but only with select operators and usually only when the booking includes premium insurance or a zero-excess product. Goldcar, AbbyCar, and some SMART Rent A Car desks may allow debit-card preauthorisation on specific tariffs, while Hertz, Avis, Budget, Thrifty, Enterprise, Alamo, and Europcar generally prefer a credit card in the primary driver’s name. The practical difference is that a debit-card hold can tie up your cash balance until the franchise is released after return." },
          { question: "8) Where do I park in Mesta, Pyrgi, or Olympi?", answer: "You must park outside the village core in the designated public lots for Mesta, Pyrgi, and Olympi because vehicle access into the medieval streets is forbidden, not merely inconvenient. The stone lanes in these Mastichochoria settlements are too narrow for modern rental cars, and local access rules are consistent with village-preservation practice around the North Aegean mastiha route. Damage caused by attempting to enter the village interior is usually excluded from CDW and SCDW coverage." },
          { question: "9) Where should I refuel before returning to JKH airport?", answer: "The most practical refuel options before a JKH return are EL.IN Veriti 41, EKO Kontari, Leoforos Enoseos Independent, and Kalouta 16 Independent, because their prices and access routes are commonly used by Chios rental customers. EL.IN Veriti 41 has recently logged Euro 95 at €1.939 and Diesel at €1.950 on 19 April 2026, and station-to-station variation within a 5 km radius of the airport can reach about €0.16 per litre. JKH, also known as Omiros Airport, uses a 1,511 m runway that can serve Airbus A320 operations, so returning with enough fuel helps avoid last-minute airport delays." },
          { question: "10) How do I pay a traffic fine received in a rental car?", answer: "A traffic fine in Chios can usually be paid at ELTA or through a Greek bank portal using the RF code on the ticket, and fines from automated cameras may also be forwarded by the rental agency with an administrative charge. The legal and consumer route for disputes runs through the Hellenic Consumer’s Ombudsman at synigoros-katanaloti.gr, and the Hellenic Police (EL.AS) or the Ministry of Infrastructure and Transport (YPOMEDI) may be the relevant authorities depending on how the citation was issued. Some agencies also reserve the right to debit the card for the fine amount plus a €25–€50 processing fee." },
          { question: "Useful Chios planning links", answer: "For airport pickup procedures at JKH, read <a href=\"/chios-airport-car-rental\" className=\"text-primary underline hover:text-accent\">Chios Airport car rental details</a>. For road rules, speed limits, and fines, see <a href=\"/driving-in-chios\" className=\"text-primary underline hover:text-accent\">Chios driving essentials</a>. For parking, refuelling, and return-day logistics, check <a href=\"/parking-and-fuel-guide\" className=\"text-primary underline hover:text-accent\">parking and fuel on Chios</a>. For route ideas through Mesta, Pyrgi, and Olympi, use <a href=\"/day-trips-from-chios\" className=\"text-primary underline hover:text-accent\">the mastic villages road trip guide</a>." },
          { question: "FAQ extras: local context and official references", answer: "If you want a broader planning overview, see the Chios car rental FAQ hub or <a href=\"/about\" className=\"text-primary underline hover:text-accent\">about our editorial standards</a>." }
        ]}
      />
      </section>

      <div className="flex justify-center pb-12">
        <a href="/#compare" className="cta-button">Compare Car Rental Deals</a>
      </div>
    </Layout>
  );
};

export default FAQ;
