import { Reveal } from "@/components/Reveal";

const STATS = [
  { v: "< 12s",  l: "Average end-to-end transfer" },
  { v: "24/7",   l: "No banking hours, no cutoffs" },
  { v: "999K",   l: "Max single transfer (KES)" },
  { v: "100%",   l: "Bank-to-bank reach in Kenya" },
];

// cx/cy are % of the 600×580 viewBox — used for both SVG endpoints and CSS placement
const NODES = [
  { label: "Bank A",    cx: 13,  cy: 12  },
  { label: "Bank B",    cx: 87,  cy: 12  },
  { label: "Orbit CDM", cx: 6,   cy: 50  },
  { label: "Agent POS", cx: 94,  cy: 50  },
  { label: "SACCO",     cx: 13,  cy: 88  },
  { label: "Wallet",    cx: 87,  cy: 88  },
];

// SVG coords (600×580)
const toSvg = (cx: number, cy: number) => ({ x: cx * 6, y: cy * 5.8 });

export const Liquidity = () => {
  return (
    <section id="ecosystem" className="py-12 lg:py-24" style={{ background: "var(--bg-2)" }}>
      <div className="container-orbit">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <Reveal>
              <span className="eyebrow">Powered by PesaLink</span>
            </Reveal>
            <Reveal delay={60}>
              <h2
                className="font-extrabold text-white mt-3 mb-3"
                style={{ fontSize: "clamp(24px,4vw,56px)", lineHeight: 1.05, letterSpacing: "-0.025em" }}
              >
                Instant.{" "}
                <span style={{ color: "var(--green)" }}>Inter-bank.</span>{" "}
                Always-on.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p style={{ color: "var(--muted)", fontSize: "clamp(13px,1.2vw,17px)", lineHeight: 1.6, maxWidth: "52ch" }}>
                Every Orbit terminal speaks PesaLink — Kenya's real-time inter-bank payment rail. Send and receive funds across{" "}
                <strong className="text-white">38+ banks</strong> in seconds, with no batch windows, no cut-off times, and no working hours.
              </p>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-5 grid grid-cols-2 gap-2 lg:gap-3">
                {STATS.map(({ v, l }) => (
                  <div
                    key={l}
                    className="rounded-2xl p-5"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--line)" }}
                  >
                    <div
                      className="font-bold text-white mb-1"
                      style={{ fontSize: 22, letterSpacing: "-0.02em", fontFamily: "'JetBrains Mono',monospace" }}
                    >
                      {v}
                    </div>
                    <div style={{ color: "var(--muted)", fontSize: 13 }}>{l}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={180}>
              <a href="/contact" className="btn-pill btn-pill-primary mt-8 inline-flex">
                Connect to the network
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </a>
            </Reveal>
          </div>

          {/* Right — PesaLink diagram */}
          <Reveal delay={200}>
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                height: "clamp(280px, 50vw, 520px)",
                background: "linear-gradient(180deg, oklch(0.16 0.06 150), oklch(0.10 0.04 152))",
                border: "1px solid var(--line-strong)",
              }}
            >
              {/* SVG lines + animated dots */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 580" aria-hidden>
                {/* Glow radial behind hub */}
                <radialGradient id="hubGlow" cx="50%" cy="50%" r="30%">
                  <stop offset="0%" stopColor="oklch(0.68 0.20 145)" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                </radialGradient>
                <ellipse cx="300" cy="290" rx="160" ry="160" fill="url(#hubGlow)" />

                {/* Lines from each node to center */}
                {NODES.map(({ cx, cy, label }) => {
                  const s = toSvg(cx, cy);
                  const path = `M ${s.x} ${s.y} L 300 290`;
                  return (
                    <g key={label}>
                      <path d={path} fill="none" stroke="rgba(74,222,128,0.25)" strokeWidth="6" />
                      <path d={path} fill="none" stroke="rgba(74,222,128,0.85)" strokeWidth="2" strokeDasharray="10 6" />
                      <circle r="5" fill="#4ade80" opacity="0.95">
                        <animateMotion dur={`${2.2 + NODES.indexOf(NODES.find(n => n.label === label)!) * 0.5}s`} repeatCount="indefinite" path={path} />
                      </circle>
                    </g>
                  );
                })}

                {/* Node endpoint circles */}
                {NODES.map(({ cx, cy, label }) => {
                  const s = toSvg(cx, cy);
                  return (
                    <g key={`ep-${label}`}>
                      <circle cx={s.x} cy={s.y} r="10" fill="oklch(0.68 0.20 145 / 0.20)" stroke="rgba(74,222,128,0.6)" strokeWidth="1.5" />
                      <circle cx={s.x} cy={s.y} r="4"  fill="#4ade80" />
                    </g>
                  );
                })}
              </svg>

              {/* Hub center */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl flex flex-col items-center justify-center gap-1 text-center z-10"
                style={{
                  width: 120, height: 120,
                  background: "oklch(0.32 0.14 148 / 0.95)",
                  border: "1.5px solid rgba(74,222,128,0.5)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 0 40px oklch(0.68 0.20 145 / 0.30)",
                }}
              >
                <div className="text-[9px] uppercase tracking-widest text-green-400 opacity-80" style={{ fontFamily: "'JetBrains Mono',monospace" }}>RAIL</div>
                <div className="text-base font-bold text-white mt-0.5">PesaLink</div>
              </div>

              {/* Node badges */}
              {NODES.map(({ label, cx, cy }) => (
                <div
                  key={label}
                  className="absolute z-10 flex items-center gap-1 rounded-lg px-2 py-1 text-[9px] lg:text-[12px] font-semibold text-white"
                  style={{
                    left: `${cx}%`,
                    top: `${cy}%`,
                    transform: "translate(-50%, -50%)",
                    background: "rgba(10,26,18,0.85)",
                    border: "1px solid rgba(74,222,128,0.35)",
                    backdropFilter: "blur(8px)",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span className="h-2 w-2 rounded-full shrink-0" style={{ background: "#4ade80", boxShadow: "0 0 6px #4ade80" }} />
                  {label}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
