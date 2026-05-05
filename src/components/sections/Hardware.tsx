import { Reveal } from "@/components/Reveal";
import { Z100Terminal } from "@/components/devices/Z100Terminal";

const SPECS = [
  "Integrated directly into PesaLink rails",
  "Multi-Bank Connectivity (38+ institutions)",
  "Instant transaction confirmation via SMS",
  "End-to-End HMAC-signed encryption",
  "Android 11, fully locked kiosk mode",
  "Built-in high-speed thermal printer",
];

export const Hardware = () => {
  return (
    <section id="hardware" className="py-8 lg:py-20" style={{ background: "var(--bg-2)" }}>
      <div className="container-orbit grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <Reveal className="order-2 lg:order-1 flex justify-center">
          <div
            className="p-4 lg:p-8 rounded-2xl lg:rounded-3xl w-full max-w-xs lg:max-w-none"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--line)" }}
          >
            <Z100Terminal />
          </div>
        </Reveal>

        <Reveal delay={100} className="order-1 lg:order-2">
          <span className="eyebrow">Hardware</span>
          <h2
            className="font-extrabold text-white mt-3 mb-3"
            style={{ fontSize: "clamp(24px,4vw,52px)", lineHeight: 1.05, letterSpacing: "-0.025em" }}
          >
            The Orbit Smart-POS
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "clamp(13px,1.2vw,17px)", lineHeight: 1.6 }}>
            Our agents don't use standard card readers. The Orbit Smart-POS is a proprietary gateway integrated directly into PesaLink real-time clearing rails.
          </p>
          <ul className="mt-8 space-y-3">
            {SPECS.map((s) => (
              <li key={s} className="flex items-start gap-3">
                <span
                  className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                  style={{ background: "var(--green)" }}
                >
                  <svg width="8" height="8" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#06180e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span className="text-sm font-medium text-white/85">{s}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};
