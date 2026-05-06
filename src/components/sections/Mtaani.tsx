import { MapPin, Users, Store, Smartphone } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const SERVICES = [
  { icon: Store,      title: "Mtaani Cash In/Out",     desc: "Agent-assisted cash deposits and withdrawals. Perfect for small business daily takings." },
  { icon: Smartphone, title: "Neighbourhood Bill Pay", desc: "Utility bills, school fees, and local services — all at your local point." },
  { icon: Users,      title: "Community Pillars",      desc: "Turn your local shop into a community pillar by providing essential financial services." },
  { icon: MapPin,     title: "Truly Local",            desc: "Financial services as close as your nearest kiosk, no need to travel to the CBD." },
];

export const Mtaani = () => {
  return (
    <section id="mtaani" className="py-10 lg:py-20" style={{ background: "#fff" }}>
      <div className="container-orbit">

        {/* Header */}
        <Reveal>
          <span className="eyebrow" style={{ color: "var(--green-2)" }}>Orbit Mtaani</span>
        </Reveal>
        <Reveal delay={60}>
          <h2
            className="font-extrabold mt-3 mb-3"
            style={{ fontSize: "clamp(24px,4vw,52px)", lineHeight: 1.05, letterSpacing: "-0.025em", color: "var(--ink)" }}
          >
            Banking at your doorstep.{" "}
            <span style={{ color: "var(--green-2)" }}>Truly local.</span>
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p style={{ color: "var(--muted-dark)", fontSize: "clamp(13px,1.2vw,16px)", lineHeight: 1.6, maxWidth: "58ch" }}>
            Full-service banking inside local shops, dukas, and community centres — as close as your nearest kiosk.
          </p>
        </Reveal>

        {/* Main content */}
        <div className="mt-8 grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">

          {/* Left — image */}
          <Reveal delay={100}>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/mtaani agent.png"
                alt="Orbit Mtaani Agent"
                className="w-full h-auto object-cover"
              />
            </div>
          </Reveal>

          {/* Right — services + join card */}
          <div className="flex flex-col gap-5">

            {/* Service cards */}
            <div className="grid grid-cols-2 gap-3">
              {SERVICES.map(({ icon: Icon, title, desc }, i) => (
                <Reveal key={title} delay={i * 60}>
                  <div
                    className="flex flex-col gap-2 rounded-xl p-4"
                    style={{ background: "var(--paper)", border: "1px solid rgba(10,20,14,0.08)" }}
                  >
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-lg"
                      style={{ background: "oklch(0.68 0.20 145 / 0.14)", color: "var(--green-2)" }}
                    >
                      <Icon size={17} />
                    </div>
                    <h4 className="font-bold text-[13px] lg:text-[14px]" style={{ color: "var(--ink)" }}>{title}</h4>
                    <p style={{ color: "var(--muted-dark)", fontSize: "clamp(11px,0.9vw,13px)", lineHeight: 1.5 }}>{desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Join card */}
            <Reveal delay={200}>
              <div
                className="rounded-2xl p-5 lg:p-7"
                style={{
                  background: "linear-gradient(135deg, oklch(0.22 0.09 150), oklch(0.16 0.06 152))",
                  border: "1px solid oklch(0.68 0.20 145 / 0.25)",
                }}
              >
                <h3 className="text-lg lg:text-xl font-bold mb-4" style={{ color: "var(--green)" }}>
                  Become a Mtaani Agent
                </h3>
                <ul className="space-y-3 mb-6">
                  {[
                    "Serve customers from 38+ banks on a single terminal.",
                    "Drive more foot traffic with essential cash and bill pay.",
                    "Earn commission on every deposit, withdrawal, and bill.",
                    "Low initial investment with full training and support.",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-xs lg:text-sm" style={{ color: "rgba(244,246,242,0.85)" }}>
                      <span className="font-bold shrink-0" style={{ color: "var(--green)", fontFamily: "'JetBrains Mono',monospace" }}>
                        0{i + 1}.
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="w-full inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-bold transition-all"
                  style={{ background: "var(--green)", color: "#06180e" }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.90")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                >
                  Join the Network
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
