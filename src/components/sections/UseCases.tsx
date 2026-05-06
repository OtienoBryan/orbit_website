import { useState } from "react";
import { Utensils, Hospital, Fuel, ShoppingCart, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";

type TabKey = "restaurant" | "healthcare" | "petrol" | "retail";
interface TabConfig {
  key: TabKey; label: string; Icon: LucideIcon;
  headline: string; description: string; bullets: string[];
  visual: "phone-agent" | "phone-merchant" | "cdm";
}

const TABS: TabConfig[] = [
  {
    key: "restaurant", label: "Restaurants", Icon: Utensils,
    headline: "Pay-at-Table Interoperability",
    description: "Servers process payments from 38+ banks directly at the table. Tips and bill payments settled instantly, providing immediate digital float for evening inventory orders.",
    bullets: ["Process payments from 38+ banks at the table", "Instant gratuity and settlement", "Immediate digital float for inventory orders", "PesaLink-powered confirmation via SMS"],
    visual: "phone-merchant",
  },
  {
    key: "healthcare", label: "Healthcare", Icon: Hospital,
    headline: "Insurance & Bank Integration",
    description: "Seamlessly handle co-payments and full settlements across banking partners. Secure identification for high-value medical billing reduces fraud.",
    bullets: ["Seamless insurance co-payment processing", "Biometric verification for high-value billing", "Real-time funds for maintaining stock", "Critical speed for ER and pharmacy tills"],
    visual: "phone-merchant",
  },
  {
    key: "petrol", label: "Petrol Stations", Icon: Fuel,
    headline: "Forecourt Management",
    description: "Orbit devices integrate with forecourt management systems to automate pump-to-payment workflows. Designed for bright, busy outdoor environments.",
    bullets: ["Solaris integration for automated workflows", "Outdoor durability for forecourt environments", "Fleet and corporate fuel account management", "Instant rebalancing for 24/7 continuity"],
    visual: "phone-agent",
  },
  {
    key: "retail", label: "Supermarkets", Icon: ShoppingCart,
    headline: "Platinum Tier Bulk Handling",
    description: "High-tier POS systems allow supermarkets to act as 'mini-banks' — shoppers can perform Cash In or Cash Out while doing groceries.",
    bullets: ["Handheld units for queue busting anywhere", "Bulk cash offloading for insurance compliance", "Mini-bank services for shoppers", "Real-time management for high-volume tills"],
    visual: "cdm",
  },
];

export const UseCases = () => {
  const [active, setActive] = useState<TabKey>("restaurant");
  const tab = TABS.find((t) => t.key === active)!;

  return (
    <section id="use-cases" className="py-8 lg:py-20" style={{ background: "var(--bg-2)" }}>
      <div className="container-orbit">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Sector Use Cases</span>
          <h2
            className="font-extrabold text-white mt-3 mb-3"
            style={{ fontSize: "clamp(22px,4vw,56px)", lineHeight: 1.05, letterSpacing: "-0.025em" }}
          >
            Banking without limits,{" "}
            <span style={{ color: "var(--green)" }}>in every industry.</span>
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "clamp(13px,1.2vw,17px)", lineHeight: 1.6 }}>
            Orbit POS devices ensure merchants are never tethered to a single bank.
          </p>
        </Reveal>

        {/* Tab switcher */}
        <Reveal className="mt-6 flex justify-center">
          <div
            className="inline-flex flex-wrap justify-center gap-1 rounded-2xl p-1"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid var(--line)" }}
          >
            {TABS.map(({ key, label, Icon }) => {
              const isActive = key === active;
              return (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className="inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs lg:text-sm font-semibold transition-all"
                  style={{
                    background: isActive ? "var(--green)" : "transparent",
                    color: isActive ? "#06180e" : "rgba(244,246,242,0.65)",
                  }}
                >
                  <Icon size={13} />
                  {label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Content */}
        <div
          key={active}
          className="mt-8 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center animate-in fade-in duration-500"
        >
          <div>
            <span
              className="inline-flex items-center gap-2 rounded-lg px-2.5 py-1 text-xs font-semibold mb-4"
              style={{
                background: "oklch(0.68 0.20 145 / 0.14)",
                color: "var(--green)",
                border: "1px solid oklch(0.68 0.20 145 / 0.25)",
              }}
            >
              <tab.Icon size={13} />
              {tab.label}
            </span>
            <h3
              className="font-bold text-white mb-3"
              style={{ fontSize: "clamp(18px,3vw,34px)", letterSpacing: "-0.02em" }}
            >
              {tab.headline}
            </h3>
            <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>{tab.description}</p>
            <ul className="mt-6 space-y-3">
              {tab.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span
                    className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                    style={{ background: "oklch(0.68 0.20 145 / 0.20)" }}
                  >
                    <svg width="8" height="8" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <span className="text-sm text-white/80">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="hidden lg:flex justify-center items-center p-6 rounded-2xl"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--line)" }}
          >
            <img src="/pos1.png" alt="Orbit POS terminal" className="w-full h-auto object-contain" style={{ maxHeight: 340 }} />
          </div>
        </div>
      </div>
    </section>
  );
};
