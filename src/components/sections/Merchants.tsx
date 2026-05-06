import { Reveal } from "@/components/Reveal";

const MERCHANT_TYPES = [
  {
    label: "Hotels & Hospitality",
    desc: "Give guests a seamless payment experience at check-in, checkout, and every touchpoint in between — connected to 30+ banks.",
    points: ["Rapid cash handling & CIT reduced", "Real-time deposits & settlements", "Seamless guest payments", "Bank-grade security"],
  },
  {
    label: "Restaurants & Eateries",
    desc: "Process interbank payments right at the table. Instant settlement means digital float is always ready for your next order.",
    points: ["Pay-at-table from 30+ banks", "Instant gratuity & settlement", "Digital float for inventory", "PesaLink-powered SMS confirmation"],
  },
  {
    label: "Supermarkets & Retail",
    desc: "Turn your checkout into a mini-bank. Shoppers can cash-in, cash-out, and pay bills while doing their groceries.",
    points: ["Cash-In / Cash-Out at checkout", "Bulk cash offloading for compliance", "30+ banks, one terminal", "Handheld units for queue busting"],
  },
];

const IMAGES = [
  { src: "/supermarket orbit.png", alt: "Orbit 24/7 Supermarket Merchant" },
  { src: "/hotel agent.png",       alt: "Orbit 24/7 Hotel Merchant" },
];

export const Merchants = () => {
  return (
    <section id="merchants" className="py-10 lg:py-20" style={{ background: "var(--bg-2)" }}>
      <div className="container-orbit">

        {/* Header */}
        <Reveal>
          <span className="eyebrow">Merchant Partners</span>
        </Reveal>
        <Reveal delay={60}>
          <h2
            className="font-extrabold text-white mt-3 mb-3"
            style={{ fontSize: "clamp(24px,4vw,52px)", lineHeight: 1.05, letterSpacing: "-0.025em" }}
          >
            Banking built for{" "}
            <span style={{ color: "var(--green)" }}>every business.</span>
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p style={{ color: "var(--muted)", fontSize: "clamp(13px,1.2vw,16px)", lineHeight: 1.6, maxWidth: "58ch" }}>
            From hotel lobbies to supermarket checkouts — Orbit 24/7 gives every merchant a direct connection to Kenya's full banking network.
          </p>
        </Reveal>

        {/* Images */}
        <Reveal delay={140}>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {IMAGES.map(({ src, alt }) => (
              <div key={alt} className="rounded-2xl overflow-hidden shadow-xl">
                <img src={src} alt={alt} className="w-full h-auto object-cover" />
              </div>
            ))}
          </div>
        </Reveal>

        {/* Merchant type cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {MERCHANT_TYPES.map(({ label, desc, points }, i) => (
            <Reveal key={label} delay={i * 80}>
              <div
                className="rounded-2xl p-5 lg:p-6 h-full flex flex-col"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--line)" }}
              >
                <h3 className="font-bold text-white mb-2 text-[15px] lg:text-[17px]">{label}</h3>
                <p className="text-xs lg:text-sm mb-4" style={{ color: "var(--muted)", lineHeight: 1.6 }}>{desc}</p>
                <ul className="mt-auto space-y-2">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-xs" style={{ color: "rgba(244,246,242,0.80)" }}>
                      <span
                        className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                        style={{ background: "oklch(0.68 0.20 145 / 0.20)" }}
                      >
                        <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={200}>
          <div className="mt-8 flex flex-wrap gap-3 items-center">
            <a
              href="/contact"
              className="btn-pill btn-pill-primary"
            >
              Become a Merchant Partner
            </a>
            <span className="text-xs" style={{ color: "var(--muted)" }}>
              Hotels · Restaurants · Supermarkets · Retail Outlets
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
