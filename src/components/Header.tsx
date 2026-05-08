import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Airport", path: "/chios-airport-car-rental" },
  { label: "Driving Tips", path: "/driving-in-chios" },
  { label: "Day Trips", path: "/day-trips-from-chios" },
  { label: "Parking & Fuel", path: "/parking-and-fuel-guide" },
  { label: "FAQ", path: "/chios-car-rental-faq" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border" aria-label="Main navigation">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="text-xl font-bold text-primary">
          Chios Car Rental
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.path ? "text-primary" : "text-muted-foreground"
              }`}
              aria-current={location.pathname === link.path ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle — 44x44px minimum touch target */}
        <button
          className="md:hidden flex items-center justify-center w-11 h-11 text-foreground rounded-md"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      </nav>
      {open && (
        <div className="md:hidden fixed inset-0 top-16 z-40 bg-background" role="dialog" aria-label="Mobile navigation">
          <nav className="flex flex-col p-6 gap-1" aria-label="Mobile navigation links">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`text-lg font-medium py-3 min-h-[44px] flex items-center border-b border-border transition-colors hover:text-primary ${
                  location.pathname === link.path ? "text-primary" : "text-foreground"
                }`}
                aria-current={location.pathname === link.path ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
