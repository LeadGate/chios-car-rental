import { Link } from "react-router-dom";

const internalLinks = [
  { label: "Airport", path: "/chios-airport-car-rental" },
  { label: "Driving Tips", path: "/driving-in-chios" },
  { label: "Day Trips", path: "/day-trips-from-chios" },
  { label: "Parking & Fuel", path: "/parking-and-fuel-guide" },
  { label: "FAQ", path: "/chios-car-rental-faq" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Privacy Policy", path: "/privacy" },
];

const outboundLinks = [
  { label: "Hellenic Civil Aviation Authority", url: "https://www.ypa.gr/en" },
  { label: "Hellenic Police (EL.AS)", url: "https://www.astynomia.gr/?lang=en" },
  { label: "Chios Chamber of Commerce", url: "https://www.chioschamber.gr/" },
];

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground" role="contentinfo">
      <p className="text-xs opacity-60 leading-relaxed mb-4 px-4 max-w-4xl mx-auto">
        chios-car-rental.com is an independent car rental guide. We may earn a commission when you book through partner links or the booking widget. Final prices, availability, deposits, insurance terms and supplier conditions are provided by the booking partner or rental supplier.
      </p>
    <div className="container py-12">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <Link to="/" className="text-xl font-bold block mb-3">
            Chios Car Rental
          </Link>
          <p className="text-sm opacity-80">
            <a href="mailto:info@chios-car-rental.com" className="hover:opacity-100 transition-opacity">
              info@chios-car-rental.com
            </a>
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-3 opacity-80">Pages</h3>
          <ul className="space-y-2">
            {internalLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-3 opacity-80">Trusted Sources</h3>
          <ul className="space-y-2">
            {outboundLinks.map((link) => (
              <li key={link.url}>
                <a
                  href={link.url}
                  rel="nofollow noopener"
                  target="_blank"
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-3 opacity-80">Affiliate disclosure</h3>
          <p className="text-xs opacity-70 leading-relaxed">
            chios-car-rental.com is an independent Chios car rental comparison. We earn commissions on partner bookings; prices you see are the same prices the partner charges all customers, and we never accept paid placement from local operators.
          </p>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-primary-foreground/20 flex flex-col gap-2 text-sm opacity-70">
        <p>Last updated: April 2026</p>
        <p>&copy; {new Date().getFullYear()} chios-car-rental.com</p>
      </div>
    </div>
  </footer>
);

export default Footer;
