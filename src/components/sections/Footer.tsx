import { Link } from "react-router-dom";
import { OrbitLogo } from "@/components/OrbitLogo";

type LinkItem = { label: string; href: string };
const COLS: { title: string; links: LinkItem[] }[] = [
  {
    title: "Platform",
    links: [
      { label: "How it Works",       href: "/#how-it-works" },
      { label: "Strategic Locations", href: "/#locations" },
      { label: "Orbit Smart-POS",    href: "/#hardware" },
    ],
  },
  {
    title: "Network",
    links: [
      { label: "Agent Network",       href: "/#agents" },
      { label: "Liquidity Ecosystem", href: "/#ecosystem" },
      { label: "Orbit Mtaani",        href: "/#mtaani" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Security & Compliance", href: "/#security" },
      { label: "Contact Us",            href: "/contact" },
      { label: "Request a Demo",        href: "/contact" },
      { label: "Privacy Policy",        href: "#" },
      { label: "Terms of Service",      href: "#" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer style={{ borderTop: "1px solid var(--line)", background: "var(--bg)" }}>
      <div className="container-orbit py-8 lg:py-12">
        {/* Brand row — full width on mobile */}
        <div className="mb-6 pb-6" style={{ borderBottom: "1px solid var(--line)" }}>
          <OrbitLogo tone="light" />
          <p
            className="mt-2 leading-relaxed"
            style={{ color: "var(--muted)", fontSize: 12, maxWidth: "38ch" }}
          >
            Kenya's always-on cash network — CDMs and agent POS terminals connected to every major bank and SACCO.
          </p>
        </div>

        {/* Link columns — 3 cols on mobile */}
        <div className="grid grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-10">
          {COLS.map((col) => (
            <div key={col.title}>
              <h5
                className="font-semibold uppercase mb-3"
                style={{ fontSize: 10, letterSpacing: "0.12em", color: "var(--muted)" }}
              >
                {col.title}
              </h5>
              <ul className="flex flex-col gap-0.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.href.startsWith("/") && !l.href.startsWith("/#") ? (
                      <Link
                        to={l.href}
                        className="block py-0.5 transition-colors text-[11px] lg:text-[14px]"
                        style={{ color: "rgba(244,246,242,0.70)" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "var(--green)")}
                        onMouseLeave={e => (e.currentTarget.style.color = "rgba(244,246,242,0.70)")}
                      >
                        {l.label}
                      </Link>
                    ) : (
                      <a
                        href={l.href}
                        className="block py-0.5 transition-colors text-[11px] lg:text-[14px]"
                        style={{ color: "rgba(244,246,242,0.70)" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "var(--green)")}
                        onMouseLeave={e => (e.currentTarget.style.color = "rgba(244,246,242,0.70)")}
                      >
                        {l.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-6 pt-4 flex flex-col sm:flex-row items-center justify-between gap-2"
          style={{ borderTop: "1px solid var(--line)", color: "var(--muted)", fontSize: 11 }}
        >
          <p>© 2026 Orbit POS. Built for the Kenyan market.</p>
          <p>Nairobi · Kenya</p>
        </div>
      </div>
    </footer>
  );
};
