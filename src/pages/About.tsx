import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import Section from "@/components/Section";
import DataTable from "@/components/DataTable";
import { Info } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <SEOHead
        title="About Chios Car Rental — Our Sources and Methods"
        description="How Chios Car Rental researches Greek Law 4850/2021, Law 5209/2025, HCAA airport operations, local fuel prices, and operator policies to compare Chios rentals honestly."
        canonical="https://chios-car-rental.com/about"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Chios Car Rental",
            "url": "https://chios-car-rental.com/about",
            "publisher": {
              "@type": "Organization",
              "name": "Chios Car Rental",
              "url": "https://chios-car-rental.com",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://chios-car-rental.com/" },
              { "@type": "ListItem", "position": 2, "name": "About", "item": "https://chios-car-rental.com/about" },
            ],
          },
        ]}
      />

      <Breadcrumbs items={[{ label: "About" }]} />

      <Section icon={<Info className="w-6 h-6" />}>
        <h1 className="text-3xl md:text-4xl font-bold mb-6">About Chios Car Rental</h1>

        <h2 className="text-2xl font-bold mt-6 mb-3">Who We Are</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Chios Car Rental is an independent car rental comparison platform focused exclusively on Chios island in the North Aegean. We cover pickups at Chios Island National Airport "Omiros" (JKH), Chios Town port transfers off the Piraeus and Çeşme ferries, and hotel delivery in Karfas, Kampos, Vrontados, Volissos, and Lithi. We compare published rates and policies from local Chios operators (SMART Rent A Car, Aegean Atsalis, Kampas Rent A Car, Masticars) and international franchises present at JKH (Hertz, Avis, Budget, Thrifty, Enterprise, Alamo, Europcar, AbbyCar, AutoUnion, Goldcar).
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-3">How We Research</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          We cross-reference Greek legislation directly: <strong>Law 4850/2021</strong> (International Driving Permit exemption for USA, Canada, UK, Australia, and Gibraltar licences) and <strong>Law 5209/2025</strong> (new Highway Code effective Autumn 2025, introducing the 30 km/h urban single-lane limit and stepped fines up to €4,000 for repeat DUI). We verify airport operational details with the <strong>Hellenic Civil Aviation Authority (HCAA)</strong>, which directly administers JKH — correcting the widespread misconception that JKH is Fraport-managed. We cite the <strong>Hellenic Police (EL.AS)</strong> and the <strong>Ministry of Infrastructure and Transport (YPOMEDI)</strong> for every traffic-fine schedule. Fuel prices are cross-checked weekly against station data from Chios Town (EL.IN on Veriti 41, EKO on Kontari near the airport) and the national <a href="https://www.fuel-prices.eu/Greece/" rel="nofollow" className="text-primary underline hover:text-accent">fuel-prices.eu</a> dataset. Ferry schedules come from Blue Star Ferries direct publications plus independent verification via Ferryhopper and Direct Ferries. For a worked example of this methodology applied to road rules, see <a href="/driving-in-chios" className="text-primary underline hover:text-accent">Chios driving essentials</a>.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-3">What We Cover</h2>
        <DataTable
          headers={["Topic", "Example page", "Primary sources"]}
          rows={[
            ["Airport pickup at JKH", "Airport guide", "HCAA, operator desk surveys, Arrivals-Hall layout verification"],
            ["Greek driving rules", "Driving essentials", "Law 4850/2021, Law 5209/2025, EL.AS, YPOMEDI"],
            ["Mastic villages itinerary", "Day trips", "PIOP (Piraeus Bank Group Cultural Foundation), municipal records"],
            ["Parking and fuel logistics", "Parking and fuel", "fuel-prices.eu, Chios municipal parking codes"],
            ["Common rental questions", "FAQ", "Gap analysis vs. aegeanatsalis.gr, smartchios.gr, kampasrentacar.gr"],
          ]}
        />

        <h2 className="text-2xl font-bold mt-8 mb-3">Affiliate Disclosure</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Chios Car Rental earns commissions when readers book through our partner rental platform. Commissions do not change the price you pay; the rate displayed is the same rate the partner offers to all customers. We do not receive payments from individual local operators in exchange for coverage; our comparisons reflect public rates, published terms, and verified operator policies only. Where insurance terms are relevant we identify whether a booking includes <strong>CDW</strong>, <strong>SCDW</strong>, <strong>FDW</strong>, zero excess, or full coverage, plus any preauthorisation or franchise requirement, so readers can compare the actual risk transfer before checkout.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-3">Contact and Consumer Protection</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Business inquiries: <a href="mailto:info@chios-car-rental.com" className="text-primary underline hover:text-accent">info@chios-car-rental.com</a>. For rental disputes, Greek consumers and tourists may file a complaint with the <strong>Hellenic Consumer's Ombudsman</strong> at <a href="https://www.synigoros-katanaloti.gr/" rel="nofollow" className="text-primary underline hover:text-accent">synigoros-katanaloti.gr</a>, an independent state authority accepting complaints against car rental companies operating on Chios. Legitimate Chios rental operators are registered with the <strong>Chios Chamber of Commerce</strong> (<a href="https://www.chioschamber.gr/" rel="nofollow" className="text-primary underline hover:text-accent">chioschamber.gr</a>). For the full list of answers we publish to common questions, see <a href="/chios-car-rental-faq" className="text-primary underline hover:text-accent">the Chios car rental FAQ</a>.
        </p>
      </Section>
    </Layout>
  );
};

export default About;
