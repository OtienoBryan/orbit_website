import { useEffect, useRef, useState } from "react";
import { ShoppingBag, Fuel, Building2, MapPin, Train, Plane, Store } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const LOCATIONS = [
  { icon: ShoppingBag, title: "Shopping Malls",    desc: "Elegant glass kiosks in mall concourses. Multi-bank functionality — one hub, every bank." },
  { icon: Fuel,        title: "Petrol Stations",   desc: "Glass-walled, fully lit booths. Always-on deposits long after the bank has closed." },
  { icon: Building2,   title: "City Buildings",    desc: "Strategically positioned in high-traffic commercial hubs, saving you a trip to the branch." },
  { icon: MapPin,      title: "High-Street Hubs",  desc: "Accessible walk-in points in the heart of Kenya's busiest streets and CBDs." },
  { icon: Train,       title: "SGR Termini",       desc: "Nairobi & Mombasa terminals synced with train schedules — liquidity always available." },
  { icon: Plane,       title: "Airports",           desc: "JKIA, Mombasa, Kisumu, Wilson. Integrated into arrivals, cargo centres, and gates." },
  { icon: Store,       title: "Orbit Mtaani",      desc: "Neighbourhood-level agent kiosks inside local shops, dukas, and community centres." },
];

const LINES = [
  { x1: "48%", y1: "44%", x2: "78%", y2: "68%" },
  { x1: "48%", y1: "44%", x2: "58%", y2: "52%" },
  { x1: "48%", y1: "44%", x2: "52%", y2: "58%" },
  { x1: "48%", y1: "44%", x2: "44%", y2: "38%" },
  { x1: "48%", y1: "44%", x2: "28%", y2: "42%" },
];

const NODES = [
  { label: "JKIA",      x: "58%", y: "52%" },
  { label: "SGR NBI",   x: "48%", y: "44%" },
  { label: "SGR MSA",   x: "78%", y: "68%" },
  { label: "Wilson",    x: "52%", y: "58%" },
  { label: "CBD",       x: "50%", y: "46%" },
  { label: "Westlands", x: "44%", y: "38%" },
  { label: "Kisumu",    x: "28%", y: "42%" },
];

function MapViz() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative rounded-2xl overflow-hidden"
      style={{
        aspectRatio: "16/9",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid var(--line)",
      }}
    >
      {/* Grid */}
      <svg className="absolute inset-0 w-full h-full opacity-10" aria-hidden>
        <defs>
          <pattern id="mgrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mgrid)" />
      </svg>
      {/* Lines */}
      <svg className="absolute inset-0 w-full h-full" aria-hidden>
        {LINES.map((l, i) => (
          <line
            key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
            stroke="rgba(74,222,128,0.35)" strokeWidth="1.5"
            strokeDasharray="300" strokeDashoffset={visible ? "0" : "300"}
            style={{ transition: visible ? `stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1) ${i * 150}ms` : "none" }}
          />
        ))}
      </svg>
      {/* Nodes */}
      {NODES.map(({ label, x, y }, i) => (
        <div
          key={label}
          className="absolute flex flex-col items-center"
          style={{
            left: x, top: y, transform: "translate(-50%,-50%)",
            opacity: visible ? 1 : 0,
            transition: visible ? `opacity 0.4s ease ${300 + i * 100}ms` : "none",
          }}
        >
          <div className="h-4 w-4 rounded-full" style={{ background: "var(--green)", boxShadow: "0 0 0 6px oklch(0.68 0.20 145 / 0.25), 0 0 14px oklch(0.68 0.20 145 / 0.40)" }} />
          <span className="mt-1.5 text-[12px] font-bold whitespace-nowrap" style={{ color: "rgba(244,246,242,0.85)" }}>{label}</span>
        </div>
      ))}
      <div className="absolute bottom-3 left-3 text-[10px] uppercase tracking-wider" style={{ color: "rgba(244,246,242,0.25)", fontFamily: "'JetBrains Mono',monospace" }}>
        Kenya Network · 7 Hub Types
      </div>
    </div>
  );
}

export const Locations = () => {
  return (
    <section id="locations" className="pt-8 pb-0 lg:pt-14 lg:pb-0" style={{ background: "var(--bg)" }}>
      <div className="container-orbit">
        {/* Header */}
        <Reveal>
          <span className="eyebrow">Where Orbit lives</span>
        </Reveal>
        <Reveal delay={60}>
          <h2
            className="font-extrabold text-white mt-3 mb-3"
            style={{ fontSize: "clamp(26px,4vw,56px)", lineHeight: 1.05, letterSpacing: "-0.025em" }}
          >
            Banking, where life happens.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p style={{ color: "var(--muted)", fontSize: "clamp(13px,1.2vw,16px)", lineHeight: 1.6, maxWidth: "58ch" }}>
            Orbit 24/7 brings secure cash banking to petrol stations, malls, airports and neighbourhood shops — wherever your customers are.
          </p>
        </Reveal>

        {/* Location cards */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-2 lg:gap-3">
          {LOCATIONS.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 40}>
              <div
                className="group rounded-xl p-3 lg:p-5 transition-colors duration-300 cursor-default h-full"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--line)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "oklch(0.68 0.20 145 / 0.40)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "var(--line)"; }}
              >
                <div
                  className="flex h-8 w-8 lg:h-11 lg:w-11 items-center justify-center rounded-lg mb-2 lg:mb-3"
                  style={{ background: "oklch(0.68 0.20 145 / 0.14)", color: "var(--green)" }}
                >
                  <Icon size={16} className="lg:hidden" />
                  <Icon size={20} className="hidden lg:block" />
                </div>
                <h3 className="font-bold text-white leading-tight text-[12px] lg:text-[15px]">{title}</h3>
                <p className="hidden lg:block mt-1" style={{ color: "var(--muted)", fontSize: 13, lineHeight: 1.5 }}>{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Transit hub panel */}
        <Reveal className="mt-5">
          <div
            className="rounded-2xl p-4 lg:p-8 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 items-center"
            style={{
              background: "radial-gradient(80% 100% at 0% 0%, oklch(0.32 0.12 150 / 0.60), transparent 60%), linear-gradient(180deg, oklch(0.22 0.08 150), oklch(0.15 0.06 152))",
              border: "1px solid var(--line-strong)",
            }}
          >
            <div>
              <h3 className="text-lg lg:text-2xl font-bold text-white mb-2">Transit Hub Liquidity</h3>
              <p className="text-xs lg:text-sm leading-relaxed mb-3" style={{ color: "rgba(244,246,242,0.70)" }}>
                From SGR commuters to JKIA travellers — high-security, high-speed liquidity always available at transit points.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[["Primary Users", "Commuters & Travellers"], ["Verification", "ID & Biometrics"]].map(([label, val]) => (
                  <div key={label} className="rounded-lg p-2.5" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid var(--line)" }}>
                    <div className="text-[9px] uppercase tracking-wider mb-0.5" style={{ color: "rgba(244,246,242,0.45)", fontFamily: "'JetBrains Mono',monospace" }}>{label}</div>
                    <div className="text-xs font-semibold text-white">{val}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img src="/nodes.png" alt="Orbit network nodes" className="w-full object-contain" style={{ maxHeight: 200 }} />
            </div>
          </div>
        </Reveal>
      </div>

      {/* Digital Bank Hub — true full width */}
      <Reveal>
        <div className="w-full py-8 lg:py-14" style={{ background: "#fff" }}>
          <div className="container-orbit">
            {/* Header */}
            <div className="mb-6 text-center lg:text-left">
              <span className="eyebrow" style={{ color: "var(--green-2)" }}>Digital Bank Hub</span>
              <h3 className="text-2xl lg:text-3xl font-bold mt-2 mb-2" style={{ color: "var(--ink)" }}>Self-Service. Any Bank. Any SACCO.</h3>
              <p className="text-sm leading-relaxed mx-auto lg:mx-0" style={{ color: "var(--muted-dark)", maxWidth: "56ch" }}>
                Full-service banking available to all banks and SACCOs in Kenya — no queues, no teller required.
              </p>
            </div>

            {/* Images — large, side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img src="/hub1.png" alt="Digital Bank Hub" className="w-full object-cover" style={{ maxHeight: 420 }} />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img src="/hub2.png" alt="Digital Bank Hub interior" className="w-full object-cover" style={{ maxHeight: 420 }} />
              </div>
            </div>

            {/* Service cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-3">
              {[
                { icon: "💳", label: "Self Service", desc: "Transact independently, any time." },
                { icon: "⬇️", label: "Cash Depositing", desc: "Instant deposits to your account." },
                { icon: "⬆️", label: "Cash Withdrawal", desc: "Withdraw without visiting a branch." },
                { icon: "📄", label: "Cheque Depositing", desc: "Drop cheques digitally, real time." },
                { icon: "🏦", label: "Account Opening", desc: "Open an account on the spot." },
              ].map(({ icon, label, desc }) => (
                <div
                  key={label}
                  className="flex flex-col items-start rounded-xl p-2.5 lg:p-4"
                  style={{ background: "var(--paper)", border: "1px solid rgba(10,20,14,0.08)" }}
                >
                  <span className="text-base lg:text-2xl mb-1.5 lg:mb-3">{icon}</span>
                  <div className="text-[11px] lg:text-sm font-bold mb-0.5 lg:mb-1" style={{ color: "var(--ink)" }}>{label}</div>
                  <div className="text-[10px] lg:text-xs leading-relaxed hidden sm:block" style={{ color: "var(--muted-dark)" }}>{desc}</div>
                </div>
              ))}
            </div>

            <div
              className="mt-5 rounded-lg px-4 py-2.5 text-xs font-semibold inline-block"
              style={{ background: "oklch(0.68 0.20 145 / 0.10)", border: "1px solid oklch(0.68 0.20 145 / 0.30)", color: "var(--green-2)" }}
            >
              Available for all banks and SACCOs in Kenya
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};
