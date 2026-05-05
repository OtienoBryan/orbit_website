import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { OrbitLogo } from "./OrbitLogo";

type NavItem = { label: string; href: string };

const NAV: NavItem[] = [
  { label: "Products", href: "/#hardware" },
  { label: "Locations", href: "/#locations" },
  { label: "Network", href: "/#agents" },
  { label: "PesaLink", href: "/#ecosystem" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Security", href: "/#security" },
  { label: "Contact", href: "/contact" },
];

const isInternal = (href: string) => href.startsWith("/") && !href.startsWith("/#");

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-300 px-4 lg:px-8 h-14 lg:h-16 ${
        scrolled
          ? "bg-[rgba(7,18,12,0.72)] backdrop-blur-[18px] border-b border-[rgba(255,255,255,0.08)]"
          : "border-b border-transparent"
      }`}
    >
      <Link to="/" className="flex items-center">
        <OrbitLogo tone="light" />
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-1">
        {NAV.map((item) =>
          isInternal(item.href) ? (
            <Link
              key={item.label}
              to={item.href}
              className="px-3.5 py-2 rounded-full text-sm font-medium text-[rgba(244,246,242,0.78)] hover:text-white hover:bg-[rgba(255,255,255,0.06)] transition-all"
            >
              {item.label}
            </Link>
          ) : (
            <a
              key={item.label}
              href={item.href}
              className="px-3.5 py-2 rounded-full text-sm font-medium text-[rgba(244,246,242,0.78)] hover:text-white hover:bg-[rgba(255,255,255,0.06)] transition-all"
            >
              {item.label}
            </a>
          )
        )}
      </nav>

      <div className="hidden md:flex items-center gap-3">
        <a
          href="tel:0788585932"
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-[rgba(255,255,255,0.06)]"
        >
          <Phone size={15} style={{ color: "var(--green)" }} />
          0788 585 932
        </a>
      </div>

      {/* Mobile burger */}
      <button
        aria-label="Toggle menu"
        onClick={() => setOpen((o) => !o)}
        className="md:hidden p-2 -mr-2 text-white"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden absolute top-14 left-0 right-0 bg-[rgba(7,18,12,0.96)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.08)]">
          <div className="flex flex-col gap-1 px-6 py-4">
            {NAV.map((item) =>
              isInternal(item.href) ? (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className="py-2.5 text-sm font-medium text-[rgba(244,246,242,0.80)] hover:text-white"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-2.5 text-sm font-medium text-[rgba(244,246,242,0.80)] hover:text-white"
                >
                  {item.label}
                </a>
              )
            )}
            <a
              href="tel:0788585932"
              className="mt-3 inline-flex items-center gap-2 py-2.5 text-sm font-semibold text-white"
            >
              <Phone size={15} style={{ color: "var(--green)" }} />
              0788 585 932
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
