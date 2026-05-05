import { Link } from "react-router-dom";
import {
  Truck,
  Vault,
  MapPinned,
  ShieldCheck,
  Banknote,
  RefreshCw,
  Activity,
  FileCheck2,
  Phone,
  ArrowRight,
} from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";

const PILLARS = [
  {
    icon: Vault,
    title: "Vault & cash processing",
    body: "Counting, sorting, fitness checks, and safekeeping at our CBK-licensed vault facilities. Reconciled deposits posted to your accounts daily.",
    points: [
      "High-speed sorting and fitness grading",
      "Counterfeit detection per Central Bank standards",
      "Sealed bag tracking from collection to vault",
    ],
  },
  {
    icon: RefreshCw,
    title: "CDM replenishment & evacuation",
    body: "Scheduled and on-demand servicing of Orbit CDM machines — refilling note dispensers and evacuating deposit canisters with zero downtime.",
    points: [
      "Float forecasting based on machine telemetry",
      "Dual-custody canister swaps under 8 minutes",
      "Auto-dispatch when thresholds breach",
    ],
  },
  {
    icon: Activity,
    title: "Real-time tracking & SLAs",
    body: "Every armoured vehicle is GPS-tracked. Every chain-of-custody event is signed digitally. SLAs are measurable, contractual, and reported monthly.",
    points: [
      "Live vehicle telemetry on a client dashboard",
      "Geo-fenced alerts and panic protocols",
      "99.5% on-time SLA, fully insured",
    ],
  },
];

const SLA_STATS = [
  { label: "On-time pickup SLA", value: "99.5%" },
  { label: "Avg. CDM swap time", value: "<8 min" },
  { label: "Vault posting cut-off", value: "Daily T+0" },
  { label: "Insurance cover", value: "Full" },
];

const FLOW = [
  {
    icon: Truck,
    title: "Collect",
    body: "Armoured crew arrives at the agreed window. Cash is sealed, scanned, and signed under dual custody.",
  },
  {
    icon: MapPinned,
    title: "Transit",
    body: "Vehicle moves under live GPS, geo-fenced routes, and 24/7 control-room oversight.",
  },
  {
    icon: Vault,
    title: "Process",
    body: "Notes are counted, sorted, and graded at our vault. Discrepancies are flagged and reported within hours.",
  },
  {
    icon: FileCheck2,
    title: "Settle",
    body: "Funds posted to your account same day. Full chain-of-custody report delivered to your finance team.",
  },
];

export default function CashInTransit() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="bg-forest text-white">
        <div className="container-orbit py-20 lg:py-28 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              Cash-in-Transit Services
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Move, process, and settle cash — without the risk.
            </h1>
            <p className="mt-5 text-lg text-white/75 leading-relaxed max-w-xl">
              Orbit CIT pairs armoured logistics with vault processing and
              live machine telemetry — keeping your branches, agents, and
              CDM kiosks always-on.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors"
              >
                Get a quote <ArrowRight size={16} />
              </Link>
              <a
                href="#pillars"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/5 transition-colors"
              >
                Explore services
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
              <div className="grid grid-cols-2 gap-6">
                {SLA_STATS.map((s) => (
                  <div key={s.label} className="rounded-xl bg-forest-deep/60 p-5 border border-white/5">
                    <div className="text-3xl font-bold text-accent">{s.value}</div>
                    <div className="mt-1 text-xs text-white/65 uppercase tracking-wider">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3 text-sm text-white/70">
                <ShieldCheck size={18} className="text-accent" />
                Licensed by the Private Security Regulatory Authority (PSRA)
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pillars */}
      <section id="pillars" className="bg-white py-20 lg:py-24">
        <div className="container-orbit">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">What we do</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-forest tracking-tight">
              Three services. One operating system for cash.
            </h2>
          </Reveal>
          <div className="mt-12 grid lg:grid-cols-3 gap-6">
            {PILLARS.map(({ icon: Icon, title, body, points }) => (
              <Reveal
                key={title}
                className="rounded-2xl border border-border bg-white p-7 flex flex-col"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-tint">
                  <Icon size={22} className="text-forest" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-forest">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
                <ul className="mt-5 space-y-2 border-t border-border pt-5">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Flow */}
      <section className="bg-tint py-20 lg:py-24">
        <div className="container-orbit">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Chain of custody</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-forest tracking-tight">
              From your floor to your bank account
            </h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FLOW.map((s, i) => (
              <Reveal
                key={s.title}
                delay={i * 70}
                className="rounded-xl bg-white p-6 border border-border"
              >
                <div className="flex items-center justify-between">
                  <s.icon size={24} className="text-forest" />
                  <span className="text-xs font-bold text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-forest">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-white py-20 lg:py-24">
        <div className="container-orbit grid lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <span className="eyebrow">Who we serve</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-forest tracking-tight">
              Built for institutions that handle volume
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Whether you operate a national branch network, a chain of
              supermarkets, or a fleet of agency outlets — Orbit CIT scales
              with you.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Banknote, title: "Commercial banks" },
                { icon: ShieldCheck, title: "Microfinance & SACCOs" },
                { icon: Truck, title: "Retail chains" },
                { icon: MapPinned, title: "Agency networks" },
              ].map(({ icon: Icon, title }) => (
                <div key={title} className="rounded-xl border border-border p-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-tint">
                    <Icon size={18} className="text-forest" />
                  </div>
                  <span className="text-sm font-semibold text-forest">{title}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest text-white py-16">
        <div className="container-orbit flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Ready to outsource cash logistics?</h2>
            <p className="mt-2 text-white/70 flex items-center gap-2">
              <Phone size={16} className="text-accent" /> Talk to our CIT team about routes, vaults, and SLAs.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors"
          >
            Request a quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
