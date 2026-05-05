import { ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const BULLETS = [
  "PesaLink IPSL HMAC-signed transaction proxying",
  "Two-factor authentication (2FA) per transaction",
  "Biometric verification at airport and medical hubs",
  "Full CBK and AML/KYC regulation compliance",
  "Bank-grade physical encryption on all terminals",
  "CCTV surveillance at all hub locations",
  "99.9% uptime with 24/7 remote monitoring",
];

const STATS = [
  { v: "99.98%", l: "Network uptime" },
  { v: "CBK",    l: "Regulated" },
  { v: "ISO",    l: "20022 rails" },
  { v: "AML",    l: "Compliant" },
];

export const Security = () => {
  return (
    <section
      id="security"
      className="relative overflow-hidden py-8 lg:py-20"
      style={{
        background:
          "radial-gradient(120% 80% at 0% 50%, oklch(0.32 0.12 150 / 0.50), transparent 60%), var(--bg)",
      }}
    >
      <div className="container-orbit relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left */}
        <Reveal>
          <div
            className="inline-flex items-center gap-2 rounded-md px-2.5 py-1 text-xs font-semibold border mb-4"
            style={{
              background: "rgba(255,255,255,0.08)",
              borderColor: "rgba(255,255,255,0.10)",
              color: "var(--green)",
            }}
          >
            <ShieldCheck size={13} />
            Security & Compliance
          </div>

          <h2
            className="font-extrabold text-white mt-1 mb-3"
            style={{
              fontSize: "clamp(24px,4vw,56px)",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
            }}
          >
            Built for PesaLink.<br />
            <span style={{ color: "var(--green)" }}>Secured for CBK.</span>
          </h2>

          <p style={{ color: "var(--muted)", fontSize: "clamp(13px,1.2vw,17px)", lineHeight: 1.6, maxWidth: "44ch" }}>
            Secure, compliant, and auditable transaction trails across every touchpoint in our 24/7 network.
          </p>

          {/* Stat grid */}
          <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3">
            {STATS.map(({ v, l }) => (
              <div
                key={l}
                className="rounded-xl px-3 py-3 lg:px-4 lg:py-5 text-center"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--line)" }}
              >
                <div className="font-bold text-white" style={{ fontSize: "clamp(14px,1.5vw,20px)", letterSpacing: "-0.02em" }}>{v}</div>
                <div className="mt-0.5" style={{ color: "var(--muted)", fontSize: 10, letterSpacing: "0.06em", textTransform: "uppercase" }}>{l}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Right — bullets */}
        <ul className="flex flex-col gap-2.5">
          {BULLETS.map((b, i) => (
            <Reveal key={b} delay={i * 70}>
              <li
                className="flex items-start gap-3 rounded-2xl px-5 py-4 transition-all"
                style={{
                  border: "1px solid var(--line)",
                  background: "rgba(255,255,255,0.04)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLLIElement).style.background = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLLIElement).style.borderColor = "rgba(255,255,255,0.18)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLLIElement).style.background = "rgba(255,255,255,0.04)";
                  (e.currentTarget as HTMLLIElement).style.borderColor = "var(--line)";
                }}
              >
                <span
                  className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                  style={{ background: "var(--green)" }}
                >
                  <svg width="8" height="8" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#06180e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span className="text-sm font-medium" style={{ color: "rgba(244,246,242,0.90)" }}>{b}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
};
