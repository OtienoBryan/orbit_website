import { MapPin, Users, Store, Smartphone } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const SERVICES = [
  { icon: Store,     title: "Mtaani Cash In/Out",       desc: "Agent-assisted cash deposits and withdrawals. Perfect for small business daily takings." },
  { icon: Smartphone,title: "Neighbourhood Bill Pay",   desc: "Utility bills, school fees, and local services — all at your local point." },
  { icon: Users,     title: "Community Pillars",         desc: "Turn your local shop into a community pillar by providing essential financial services." },
  { icon: MapPin,    title: "Truly Local",               desc: "Financial services as close as your nearest kiosk, no need to travel to the CBD." },
];

export const Mtaani = () => {
  return (
    <section id="mtaani" className="py-8 lg:py-20" style={{ background: "var(--bg)" }}>
      <div className="container-orbit">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          {/* Left */}
          <div className="lg:w-1/2">
            <Reveal>
              <span className="eyebrow">Orbit Mtaani</span>
            </Reveal>
            <Reveal delay={60}>
              <h2
                className="font-extrabold text-white mt-3 mb-3"
                style={{ fontSize: "clamp(24px,4vw,56px)", lineHeight: 1.05, letterSpacing: "-0.025em" }}
              >
                Banking at your doorstep.{" "}
                <span style={{ color: "var(--green)" }}>Truly local.</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p style={{ color: "var(--muted)", fontSize: "clamp(13px,1.2vw,17px)", lineHeight: 1.6 }}>
                Full-service banking inside local shops, dukas, and community centres — as close as your nearest kiosk.
              </p>
            </Reveal>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {SERVICES.map(({ icon: Icon, title, desc }, i) => (
                <Reveal key={title} delay={i * 60}>
                  <div className="flex flex-col gap-2">
                    <div
                      className="flex h-8 w-8 items-center justify-center rounded-lg"
                      style={{ background: "oklch(0.68 0.20 145 / 0.14)", color: "var(--green)" }}
                    >
                      <Icon size={15} />
                    </div>
                    <h4 className="font-bold text-white text-[13px] lg:text-[15px]">{title}</h4>
                    <p style={{ color: "var(--muted)", fontSize: "clamp(11px,1vw,13.5px)", lineHeight: 1.5 }}>{desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right — join card */}
          <div className="lg:w-1/2">
            <Reveal delay={150}>
              <div
                className="rounded-3xl overflow-hidden"
                style={{ border: "1px solid var(--line-strong)" }}
              >
                <div
                  className="p-5 lg:p-10"
                  style={{
                    background:
                      "radial-gradient(80% 100% at 0% 0%, oklch(0.36 0.14 148 / 0.60), transparent 60%), linear-gradient(180deg, oklch(0.24 0.09 150), oklch(0.16 0.06 152))",
                  }}
                >
                  <h3 className="text-2xl font-bold mb-6" style={{ color: "var(--green)" }}>
                    Become a Mtaani Agent
                  </h3>
                  <ul className="space-y-4 mb-10">
                    {[
                      "Serve customers from 38+ banks on a single terminal.",
                      "Drive more foot traffic with essential cash and bill pay.",
                      "Earn commission on every deposit, withdrawal, and bill.",
                      "Low initial investment with full training and support.",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm" style={{ color: "rgba(244,246,242,0.80)" }}>
                        <span className="font-bold shrink-0" style={{ color: "var(--green)", fontFamily: "'JetBrains Mono',monospace" }}>
                          0{i + 1}.
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className="w-full inline-flex items-center justify-center rounded-2xl px-6 py-4 text-sm font-bold transition-all"
                    style={{ background: "var(--green)", color: "#06180e" }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = "0.90")}
                    onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                  >
                    Join the Network
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
