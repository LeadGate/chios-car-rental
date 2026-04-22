import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Airport", path: "/chios-airport-car-rental" },
  { label: "Driving Tips", path: "/driving-in-chios" },
  { label: "Day Trips", path: "/day-trips-from-chios" },
  { label: "Parking & Fuel", path: "/parking-and-fuel-guide" },
  { label: "FAQ", path: "/chios-car-rental-faq" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Privacy Policy", path: "/privacy" },
];

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground" role="contentinfo">
    <div className="container py-12">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        <div>
          <Link to="/" className="text-xl font-bold">
            Chios Car Rental
          </Link>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {footerLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-sm opacity-80 hover:opacity-100 transition-opacity min-h-[44px] inline-flex items-center"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-primary-foreground/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm opacity-70">
        <div className="flex flex-col gap-1">
          <p>&copy; {new Date().getFullYear()} chios-car-rental.com</p>
          <p>
            <a href="mailto:info@chios-car-rental.com" className="hover:opacity-100 transition-opacity">
              info@chios-car-rental.com
            </a>
          </p>
        </div>
        <p>Last updated: April 2026</p>
      </div>
    </div>
  </footer>
);

export default Footer;
