import { ArrowRight, Play } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

interface Stat { numeric: number; suffix: string; label: string; }

const STATS: Stat[] = [
  { numeric: 38,   suffix: "+",    label: "Bank & SACCO partners" },
  { numeric: 99,   suffix: ".98%", label: "Network uptime" },
];

function StatCell({ numeric, suffix, label }: Stat) {
  const { count, ref } = useCountUp(numeric, 1600);
  return (
    <div className="flex flex-col gap-1">
      <span
        ref={ref as React.RefObject<HTMLSpanElement>}
        className="text-2xl lg:text-3xl font-bold tracking-tight tabular-nums text-white"
      >
        {count}{suffix}
      </span>
      <span className="text-[13px] text-[rgba(244,246,242,0.55)]">{label}</span>
    </div>
  );
}

const CHIPS = [
  {
    pos: "left-[0%] top-[28%]",
    anim: "animate-float",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M3 12l3 3 5-5"/><path d="M13 7h8M13 12h8M13 17h5"/></svg>
    ),
    text: "Cash Deposit Machines and POS",
  },
  {
    pos: "left-[15%] top-[2%]",
    anim: "animate-float-delayed",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
    ),
    text: "Settled in Real Time",
  },
  {
    pos: "left-[0%] top-[55%]",
    anim: "animate-float-slow",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M3 12s3-7 9-7 9 7 9 7-3 7-9 7-9-7-9-7z"/><circle cx="12" cy="12" r="3"/></svg>
    ),
    text: "Schools and Institutions",
  },
  {
    pos: "right-[5%] top-[2%]",
    anim: "animate-float",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M3 12s3-7 9-7 9 7 9 7-3 7-9 7-9-7-9-7z"/><circle cx="12" cy="12" r="3"/></svg>
    ),
    text: "CICO Agents and Merchants",
  },
  {
    pos: "left-[10%] bottom-[2%]",
    anim: "animate-float-delayed",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M3 12s3-7 9-7 9 7 9 7-3 7-9 7-9-7-9-7z"/><circle cx="12" cy="12" r="3"/></svg>
    ),
    text: "Restaurants and Hotels",
  },
];

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden text-white pt-16 pb-8 lg:pt-24 lg:pb-16"
      style={{
        background:
          "radial-gradient(120% 80% at 80% 0%, oklch(0.40 0.16 148 / 0.45), transparent 60%), radial-gradient(80% 60% at 0% 100%, oklch(0.32 0.12 150 / 0.55), transparent 65%), var(--bg)",
      }}
    >
      {/* Grid overlay */}
      <div className="grid-overlay" aria-hidden />

      <div className="container-orbit relative grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
        {/* Left — copy */}
        <div className="w-full max-w-xl text-center lg:text-left">
          {/* Live badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.05)] px-3 py-1.5 text-[11px] lg:text-[12.5px] font-medium text-[rgba(244,246,242,0.85)] max-w-full">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: "var(--green)" }} />
              <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: "var(--green)" }} />
            </span>
            <span className="truncate">Live across 47 counties · uptime 99.98%</span>
          </div>

          <h1
            className="mt-4 lg:mt-6 font-extrabold leading-tight lg:leading-[0.96] tracking-[-0.03em]"
            style={{ fontSize: "clamp(32px, 6.4vw, 88px)" }}
          >
            Cash, in motion.{" "}
            <span
              style={{
                background: "linear-gradient(105deg, var(--green) 0%, var(--accent) 60%, var(--green) 100%)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                animation: "shimmer 6s linear infinite",
              }}
            >
              Always.
            </span>
          </h1>

          <p
            className="mt-4 lg:mt-6 leading-relaxed"
            style={{ fontSize: "clamp(13px,1.4vw,18px)", color: "var(--muted)" }}
          >
            Kenya's always-on cash network — CDMs and agent POS terminals connected to every major bank and SACCO. Deposits, withdrawals, transfers — anywhere your customers are.
          </p>

          <div className="mt-6 lg:mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3">
            <a href="#hardware" className="btn-pill btn-pill-primary">
              Explore products
              <ArrowRight size={16} />
            </a>
            <a href="#how-it-works" className="btn-pill btn-pill-ghost">
              How it works
              <Play size={14} className="fill-white" />
            </a>
          </div>

          {/* Stats */}
          <div
            className="mt-6 lg:mt-10 flex flex-wrap justify-center lg:justify-start gap-5 lg:gap-8 pt-5 lg:pt-7"
            style={{ borderTop: "1px solid var(--line)" }}
          >
            {STATS.map((s) => (
              <StatCell key={s.label} {...s} />
            ))}
            <div className="flex flex-col gap-1">
              <span className="text-2xl lg:text-3xl font-bold tracking-tight text-white">✓</span>
              <span className="text-[11px] lg:text-[13px] text-[rgba(244,246,242,0.55)]">Lowest Transaction Charges</span>
            </div>
          </div>
        </div>

        {/* Right — device stage */}
        <div className="relative w-full" aria-hidden>

          {/* Mobile layout — natural flow, fills width */}
          <div className="lg:hidden relative flex items-end justify-center gap-3 px-4 pt-4 pb-2">
            <div className="absolute inset-0 -z-10" style={{
              background: "radial-gradient(ellipse 80% 60% at 50% 80%, rgba(74,222,128,0.20) 0%, transparent 70%)",
              filter: "blur(30px)",
            }} />
            <img
              src="/pos1.png"
              alt="Orbit POS terminal"
              className="rounded-xl w-[45%] object-contain"
              style={{ filter: "drop-shadow(0 12px 24px rgba(74,222,128,0.35)) drop-shadow(0 4px 8px rgba(0,0,0,0.5))" }}
            />
            <img
              src="/cdm.png"
              alt="Orbit CDM machine"
              className="rounded-xl w-[45%] object-contain"
              style={{ filter: "drop-shadow(0 12px 24px rgba(74,222,128,0.35)) drop-shadow(0 4px 8px rgba(0,0,0,0.5))" }}
            />
          </div>

          {/* Desktop layout — absolute positioned stage */}
          <div className="hidden lg:block relative h-[460px]">
            {/* Glow */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                width: 480, height: 480,
                background: "radial-gradient(circle, oklch(0.62 0.20 145 / 0.45), transparent 60%)",
                filter: "blur(20px)",
              }}
            />

            {/* Devices */}
            <div className="absolute left-1/2 top-1/4 animate-float flex gap-6 items-start" style={{ transform: "translate(-50%, 0%)" }}>
              <div className="absolute -z-10" style={{
                inset: "-40px -60px",
                background: "radial-gradient(ellipse 70% 50% at 50% 80%, rgba(74,222,128,0.25) 0%, rgba(34,197,94,0.12) 40%, transparent 70%)",
                filter: "blur(40px)",
              }} />
              <img
                src="/pos1.png"
                alt="Orbit POS terminal"
                className="rounded-2xl"
                style={{ maxHeight: 380, objectFit: "contain", filter: "drop-shadow(0 20px 40px rgba(74,222,128,0.4)) drop-shadow(0 8px 16px rgba(0,0,0,0.5))" }}
              />
              <img
                src="/cdm.png"
                alt="Orbit CDM machine"
                className="rounded-2xl animate-float-delayed"
                style={{ maxHeight: 600, objectFit: "contain", filter: "drop-shadow(0 20px 40px rgba(74,222,128,0.4)) drop-shadow(0 8px 16px rgba(0,0,0,0.5))" }}
              />
            </div>

            {/* Floating chips */}
            {CHIPS.map((c) => (
              <div
                key={c.text}
                className={`absolute flex items-center gap-2.5 rounded-2xl px-3.5 py-2.5 text-[13px] font-medium ${c.pos} ${c.anim}`}
                style={{
                  background: "rgba(12,26,18,0.80)",
                  border: "1px solid var(--line-strong)",
                  backdropFilter: "blur(14px)",
                  boxShadow: "0 20px 30px -15px rgba(0,0,0,0.6)",
                }}
              >
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: "oklch(0.68 0.20 145 / 0.18)", color: "var(--green)" }}
                >
                  {c.icon}
                </span>
                {c.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer { to { background-position: 200% 0 } }
        @keyframes spin { to { transform: translate(-50%,-50%) rotate(360deg) } }
      `}</style>
    </section>
  );
};
