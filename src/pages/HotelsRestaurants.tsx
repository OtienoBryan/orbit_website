import { Link } from "react-router-dom";
import {
  Zap, ShieldCheck, CreditCard, RefreshCw,
  Users, ArrowRight, CheckCircle2, Banknote, Clock,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Reveal } from "@/components/Reveal";

const FEATURES = [
  {
    icon: Banknote,
    title: "Direct Bank Payments",
    desc: "Guests pay directly from their bank account — no card needed. Orbit connects to 30+ banks via PesaLink rails, so any customer, any bank, any time.",
  },
  {
    icon: CreditCard,
    title: "Cardless Transactions",
    desc: "Payments are made using National ID and mobile authentication. No card, no PIN pad — just a phone and an ID. Faster checkouts, happier guests.",
  },
  {
    icon: Zap,
    title: "Lowest Transaction Fees",
    desc: "Orbit PesaLink rates are among the lowest in Kenya — reducing the cost per transaction compared to card networks and mobile money.",
  },
  {
    icon: ShieldCheck,
    title: "High Reliability — 99.98% Uptime",
    desc: "Bank-grade infrastructure with redundant connectivity. Your terminal works even during peak hours — no downtime, no lost sales.",
  },
  {
    icon: RefreshCw,
    title: "Automated Reconciliation",
    desc: "Every transaction is logged, timestamped, and matched automatically. No manual cashup — your finance team gets a clean report every morning.",
  },
  {
    icon: Zap,
    title: "Instant Settlement",
    desc: "Funds hit your business account in under 12 seconds via PesaLink. No batch windows, no waiting until end of day — your float is always ready.",
  },
  {
    icon: Users,
    title: "Staff Accounts",
    desc: "Assign individual accounts to waiters, cashiers, and front-desk staff. Track every transaction per employee — full accountability, zero disputes.",
  },
  {
    icon: Clock,
    title: "24/7 Operations",
    desc: "Late check-outs, midnight room service, early breakfast — Orbit works around the clock so your business never stops.",
  },
];

const HOW_IT_WORKS = [
  { n: "01", title: "Guest Initiates Payment", body: "Staff enters the amount on the Orbit POS. The guest provides their National ID or scans a QR code." },
  { n: "02", title: "Bank Verified via PesaLink", body: "The transaction is verified in real-time across 30+ banks — no card, no swipe required." },
  { n: "03", title: "Instant Confirmation", body: "Guest receives an SMS receipt. Funds clear to your account in under 12 seconds." },
  { n: "04", title: "Automated Reconciliation", body: "The transaction is logged against the staff account and included in your morning report." },
];

export default function HotelsRestaurants() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--bg)" }}>
      <Navbar />
      <main className="flex-1 pt-14 lg:pt-16">

        {/* Hero */}
        <section
          className="py-10 lg:py-20 relative overflow-hidden"
          style={{
            background: "radial-gradient(120% 80% at 80% 0%, oklch(0.40 0.16 148 / 0.45), transparent 60%), radial-gradient(80% 60% at 0% 100%, oklch(0.32 0.12 150 / 0.55), transparent 65%), var(--bg)",
          }}
        >
          <div className="container-orbit grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <Reveal>
              <span className="eyebrow" style={{ color: "var(--green)" }}>Hotels & Restaurants</span>
              <h1
                className="font-extrabold text-white mt-3 mb-4"
                style={{ fontSize: "clamp(26px,4.5vw,62px)", lineHeight: 1.05, letterSpacing: "-0.025em" }}
              >
                Payments as seamless as your{" "}
                <span style={{ color: "var(--green)" }}>hospitality.</span>
              </h1>
              <p style={{ color: "var(--muted)", fontSize: "clamp(13px,1.2vw,17px)", lineHeight: 1.6, maxWidth: "52ch" }}>
                Orbit 24/7 lets your guests pay directly from any bank in Kenya — no card, no hassle. Instant settlement, automated reconciliation, and staff-level tracking built in.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-pill btn-pill-primary">
                  Get Started <ArrowRight size={15} />
                </Link>
                <a href="#features" className="btn-pill btn-pill-ghost">
                  See Features
                </a>
              </div>

              {/* Quick stats */}
              <div className="mt-8 flex flex-wrap gap-6 pt-6" style={{ borderTop: "1px solid var(--line)" }}>
                {[
                  { v: "<12s", l: "Settlement time" },
                  { v: "30+",  l: "Banks connected" },
                  { v: "99.98%", l: "Uptime" },
                ].map(({ v, l }) => (
                  <div key={l} className="flex flex-col gap-0.5">
                    <span className="text-xl lg:text-2xl font-bold text-white" style={{ fontFamily: "'JetBrains Mono',monospace" }}>{v}</span>
                    <span className="text-[11px] lg:text-[13px]" style={{ color: "var(--muted)" }}>{l}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img src="/hotel3.png" alt="Orbit 24/7 Restaurant Payment" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img src="/hotel agent.png" alt="Orbit 24/7 Hotel Payment" className="w-full h-full object-cover" />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-10 lg:py-16" style={{ background: "var(--bg-2)" }}>
          <div className="container-orbit">
            <Reveal>
              <span className="eyebrow">Key Features</span>
              <h2
                className="font-extrabold text-white mt-3 mb-3"
                style={{ fontSize: "clamp(22px,3.5vw,48px)", lineHeight: 1.05, letterSpacing: "-0.025em" }}
              >
                Everything your business needs.
              </h2>
            </Reveal>
            <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3">
              {FEATURES.map(({ icon: Icon, title, desc }, i) => (
                <Reveal key={title} delay={i * 50}>
                  <div
                    className="rounded-xl p-4 h-full flex flex-col gap-2"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--line)" }}
                  >
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-lg"
                      style={{ background: "oklch(0.68 0.20 145 / 0.16)", color: "var(--green)" }}
                    >
                      <Icon size={17} />
                    </div>
                    <h3 className="font-bold text-white text-[12px] lg:text-[14px] leading-tight">{title}</h3>
                    <p className="text-[11px] lg:text-[13px] leading-relaxed hidden sm:block" style={{ color: "var(--muted)" }}>{desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-10 lg:py-16" style={{ background: "var(--bg)" }}>
          <div className="container-orbit">
            <Reveal>
              <span className="eyebrow">How It Works</span>
              <h2
                className="font-extrabold text-white mt-3 mb-3"
                style={{ fontSize: "clamp(22px,3.5vw,48px)", lineHeight: 1.05, letterSpacing: "-0.025em" }}
              >
                From order to settled — in seconds.
              </h2>
            </Reveal>
            <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3">
              {HOW_IT_WORKS.map(({ n, title, body }, i) => (
                <Reveal key={n} delay={i * 70}>
                  <div className="rounded-xl p-4 h-full" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--line)" }}>
                    <div
                      className="font-mono font-bold leading-none mb-3"
                      style={{ fontSize: "clamp(28px,3vw,42px)", color: "var(--green)", fontFamily: "'JetBrains Mono',monospace", letterSpacing: "-0.04em" }}
                    >
                      {n}
                    </div>
                    <h3 className="font-bold text-white mb-1 text-[12px] lg:text-[14px]">{title}</h3>
                    <p className="text-[11px] leading-relaxed hidden sm:block" style={{ color: "var(--muted)" }}>{body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Staff accounts highlight */}
        <section className="py-10 lg:py-16" style={{ background: "var(--bg-2)" }}>
          <div className="container-orbit grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <Reveal>
              <span className="eyebrow">Staff Accounts</span>
              <h2
                className="font-extrabold text-white mt-3 mb-3"
                style={{ fontSize: "clamp(22px,3.5vw,46px)", lineHeight: 1.05, letterSpacing: "-0.025em" }}
              >
                Full accountability for every team member.
              </h2>
              <p style={{ color: "var(--muted)", fontSize: "clamp(13px,1.1vw,16px)", lineHeight: 1.6 }}>
                Assign unique Orbit accounts to each waiter, cashier, or front-desk agent. Every transaction is tagged to the individual — giving management instant visibility into performance, discrepancies, and daily totals.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Individual login per staff member",
                  "Per-employee transaction reports",
                  "Shift-end summary auto-generated",
                  "Dispute resolution with full audit trail",
                  "Manager dashboard with real-time view",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm" style={{ color: "rgba(244,246,242,0.85)" }}>
                    <CheckCircle2 size={16} style={{ color: "var(--green)", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <div
                className="rounded-2xl p-6 lg:p-8"
                style={{ background: "radial-gradient(80% 100% at 0% 0%, oklch(0.36 0.14 148 / 0.60), transparent 60%), linear-gradient(180deg, oklch(0.24 0.09 150), oklch(0.16 0.06 152))", border: "1px solid var(--line-strong)" }}
              >
                <h3 className="text-lg font-bold text-white mb-4" style={{ color: "var(--green)" }}>Why Orbit for Hospitality?</h3>
                <ul className="space-y-4">
                  {[
                    ["No card required", "Guests pay from any Kenyan bank via ID + phone"],
                    ["Lowest fees", "PesaLink rates beat card networks and M-Pesa"],
                    ["Instant float", "Money in your account before the guest leaves"],
                    ["Zero manual work", "Reconciliation runs automatically every night"],
                  ].map(([title, desc]) => (
                    <li key={title} className="flex gap-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full mt-0.5" style={{ background: "var(--green)" }}>
                        <svg width="9" height="9" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#06180e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                      <div>
                        <div className="text-sm font-bold text-white">{title}</div>
                        <div className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>{desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-all"
                  style={{ background: "var(--green)", color: "#06180e" }}
                >
                  Talk to Us <ArrowRight size={15} />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
