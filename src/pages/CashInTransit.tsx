import { Link } from "react-router-dom";
import {
  Truck, Vault, MapPinned, ShieldCheck,
  Banknote, RefreshCw, Activity, FileCheck2,
  Phone, ArrowRight, Zap, Globe, CheckCircle2,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Reveal } from "@/components/Reveal";

const PESALINK_POINTS = [
  {
    icon: Globe,
    title: "No Individual Bank Connections Needed",
    desc: "Orbit connects once to PesaLink's interbank rails. That single connection reaches every major bank and SACCO in Kenya — no bilateral agreements, no individual APIs per institution.",
  },
  {
    icon: Zap,
    title: "Real-Time Settlement",
    desc: "Funds clear instantly the moment a transaction is processed. No batch windows, no end-of-day reconciliation delays — settlement happens in under 12 seconds, 24/7.",
  },
  {
    icon: ShieldCheck,
    title: "HMAC-Signed & CBK Compliant",
    desc: "Every transaction is HMAC-signed through PesaLink's IPSL infrastructure. Full AML/KYC compliance, biometric verification, and bank-grade encryption on every terminal.",
  },
  {
    icon: CheckCircle2,
    title: "Instant Digital Receipt",
    desc: "The customer receives an SMS confirmation in under 15 seconds. Every transaction produces a full audit trail — chain-of-custody, timestamp, and bank reference.",
  },
];

const PILLARS = [
  {
    icon: Vault,
    title: "Vault & Cash Processing",
    body: "Counting, sorting, fitness checks, and safekeeping at CBK-licensed vault facilities. Reconciled deposits posted to accounts daily.",
    points: [
      "High-speed sorting and fitness grading",
      "Counterfeit detection per Central Bank standards",
      "Sealed bag tracking from collection to vault",
    ],
  },
  {
    icon: RefreshCw,
    title: "CDM Replenishment & Evacuation",
    body: "Scheduled and on-demand servicing of Orbit CDM machines — refilling note dispensers and evacuating deposit canisters with zero downtime.",
    points: [
      "Float forecasting based on machine telemetry",
      "Dual-custody canister swaps under 8 minutes",
      "Auto-dispatch when thresholds breach",
    ],
  },
  {
    icon: Activity,
    title: "Real-Time Tracking & SLAs",
    body: "Every armoured vehicle is GPS-tracked. Every chain-of-custody event is signed digitally. SLAs are measurable, contractual, and reported monthly.",
    points: [
      "Live vehicle telemetry on a client dashboard",
      "Geo-fenced alerts and panic protocols",
      "99.5% on-time SLA, fully insured",
    ],
  },
];

const FLOW = [
  { icon: Truck,      title: "Collect",  body: "Armoured crew arrives at the agreed window. Cash is sealed, scanned, and signed under dual custody." },
  { icon: MapPinned,  title: "Transit",  body: "Vehicle moves under live GPS, geo-fenced routes, and 24/7 control-room oversight." },
  { icon: Vault,      title: "Process",  body: "Notes are counted, sorted, and graded at our vault. Discrepancies are flagged and reported within hours." },
  { icon: FileCheck2, title: "Settle",   body: "Funds posted to your account same day via PesaLink rails. Full chain-of-custody report delivered instantly." },
];

const SLA_STATS = [
  { label: "On-time pickup SLA",  value: "99.5%" },
  { label: "Avg. CDM swap time",  value: "<3 min" },
  { label: "Settlement time",     value: "<12s" },
  { label: "Banks connected",     value: "30+" },
];

export default function CashInTransit() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--bg)" }}>
      <Navbar />
      <main className="flex-1 pt-14 lg:pt-16">

        {/* PesaLink Rail — key differentiator */}
        <section className="py-10 lg:py-16" style={{ background: "var(--bg-2)" }}>
          <div className="container-orbit">
            <Reveal>
              <span className="eyebrow">Powered by PesaLink</span>
            </Reveal>
            <Reveal delay={60}>
              <h2
                className="font-extrabold text-white mt-3 mb-3"
                style={{ fontSize: "clamp(22px,4vw,50px)", lineHeight: 1.05, letterSpacing: "-0.025em" }}
              >
                One connection.{" "}
                <span style={{ color: "var(--green)" }}>Every bank. Real-time.</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p style={{ color: "var(--muted)", fontSize: "clamp(13px,1.2vw,16px)", lineHeight: 1.6, maxWidth: "62ch" }}>
                Orbit CIT doesn't require individual integrations with each bank. A single PesaLink connection gives you real-time access to every major bank and SACCO in Kenya — instant settlement, zero batch delays, 24/7.
              </p>
            </Reveal>

            <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3">
              {PESALINK_POINTS.map(({ icon: Icon, title, desc }, i) => (
                <Reveal key={title} delay={i * 70}>
                  <div
                    className="rounded-xl p-3 lg:p-5 h-full flex flex-col gap-2"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--line)" }}
                  >
                    <div
                      className="flex h-8 w-8 lg:h-10 lg:w-10 items-center justify-center rounded-lg"
                      style={{ background: "oklch(0.68 0.20 145 / 0.16)", color: "var(--green)" }}
                    >
                      <Icon size={16} className="lg:hidden" />
                      <Icon size={19} className="hidden lg:block" />
                    </div>
                    <h3 className="font-bold text-white text-[12px] lg:text-[15px]">{title}</h3>
                    <p className="hidden sm:block" style={{ color: "var(--muted)", fontSize: "clamp(11px,0.9vw,13px)", lineHeight: 1.55 }}>{desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Stats bar */}
            <Reveal delay={200}>
              <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3">
                {SLA_STATS.map(({ label, value }) => (
                  <div
                    key={label}
                    className="rounded-xl px-4 py-4 text-center"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--line)" }}
                  >
                    <div className="font-bold text-white" style={{ fontSize: "clamp(18px,2vw,26px)", fontFamily: "'JetBrains Mono',monospace", letterSpacing: "-0.02em" }}>{value}</div>
                    <div className="mt-0.5 text-[10px] uppercase tracking-wider" style={{ color: "var(--muted)" }}>{label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* CDM kiosk image */}
        <section className="py-6 lg:py-12" style={{ background: "var(--bg)" }}>
          <div className="container-orbit">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              <Reveal>
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img src="/CIT company.png" alt="Orbit 24/7 — Real Time, Real Secure" className="w-full h-auto object-cover" />
                </div>
              </Reveal>
              <Reveal delay={100}>
                <span className="eyebrow">Always-On Infrastructure</span>
                <h2
                  className="font-extrabold text-white mt-2 mb-2"
                  style={{ fontSize: "clamp(20px,3vw,40px)", lineHeight: 1.05, letterSpacing: "-0.025em" }}
                >
                  Cash banking at every location, day or night.
                </h2>
                <p style={{ color: "var(--muted)", fontSize: "clamp(12px,1.1vw,15px)", lineHeight: 1.6 }}>
                  Orbit CDM kiosks operate 24/7 — at petrol stations, malls, transit hubs, and busy streets. Each kiosk is directly on PesaLink rails, clearing instantly to any bank in Kenya.
                </p>
                <ul className="mt-4 grid grid-cols-2 sm:grid-cols-1 gap-2">
                  {["Cash Deposit", "Cash Withdrawal", "Funds Transfer", "Bill Payments", "Airtime Top-up"].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-xs lg:text-sm" style={{ color: "rgba(244,246,242,0.85)" }}>
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full" style={{ background: "var(--green)" }}>
                        <svg width="8" height="8" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#06180e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Flow */}
        <section className="py-8 lg:py-14" style={{ background: "var(--bg-2)" }}>
          <div className="container-orbit">
            <Reveal>
              <span className="eyebrow">Chain of Custody</span>
              <h2 className="font-extrabold text-white mt-2 mb-2" style={{ fontSize: "clamp(18px,3vw,40px)", lineHeight: 1.05, letterSpacing: "-0.025em" }}>
                From your floor to your bank account
              </h2>
            </Reveal>
            <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
              {FLOW.map((s, i) => (
                <Reveal key={s.title} delay={i * 70}>
                  <div className="rounded-xl p-3 lg:p-5 h-full" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--line)" }}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg" style={{ background: "oklch(0.68 0.20 145 / 0.16)", color: "var(--green)" }}>
                        <s.icon size={15} />
                      </div>
                      <span className="text-[10px] font-bold" style={{ color: "var(--muted)", fontFamily: "'JetBrains Mono',monospace" }}>0{i + 1}</span>
                    </div>
                    <h3 className="font-bold text-white mb-1 text-[12px] lg:text-[14px]">{s.title}</h3>
                    <p className="text-[11px] leading-relaxed hidden sm:block" style={{ color: "var(--muted)" }}>{s.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
