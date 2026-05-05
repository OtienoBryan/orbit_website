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
      <div className="container-orbit py-8 lg:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand col */}
          <div className="col-span-2 lg:col-span-1">
            <OrbitLogo tone="light" />
            <p
              className="mt-3 leading-relaxed"
              style={{ color: "var(--muted)", fontSize: 13, maxWidth: "32ch" }}
            >
              Kenya's always-on cash network — CDMs and agent POS terminals connected to every major bank and SACCO.
            </p>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <h5
                className="font-semibold uppercase mb-4"
                style={{
                  fontSize: 12,
                  letterSpacing: "0.14em",
                  color: "var(--muted)",
                }}
              >
                {col.title}
              </h5>
              <ul className="flex flex-col gap-0.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.href.startsWith("/") && !l.href.startsWith("/#") ? (
                      <Link
                        to={l.href}
                        className="block py-1 transition-colors"
                        style={{ fontSize: 14.5, color: "rgba(244,246,242,0.75)" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "var(--green)")}
                        onMouseLeave={e => (e.currentTarget.style.color = "rgba(244,246,242,0.75)")}
                      >
                        {l.label}
                      </Link>
                    ) : (
                      <a
                        href={l.href}
                        className="block py-1 transition-colors"
                        style={{ fontSize: 14.5, color: "rgba(244,246,242,0.75)" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "var(--green)")}
                        onMouseLeave={e => (e.currentTarget.style.color = "rgba(244,246,242,0.75)")}
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
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid var(--line)", color: "var(--muted)", fontSize: 13 }}
        >
          <p>© 2026 Orbit POS. Built for the Kenyan market.</p>
          <p>Nairobi · Kenya</p>
        </div>
      </div>
    </footer>
  );
};
