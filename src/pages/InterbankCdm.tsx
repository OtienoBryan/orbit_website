import { Link } from "react-router-dom";
import {
  Banknote,
  ShieldCheck,
  Clock,
  MapPin,
  Smartphone,
  Receipt,
  ArrowRight,
  Building2,
  CheckCircle2,
} from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { CdmMockup } from "@/components/devices/CdmMockup";

const STEPS = [
  {
    icon: Smartphone,
    title: "Enter recipient details",
    body: "Tap the bank, enter the account number, and confirm the account name returned by PesaLink.",
  },
  {
    icon: Banknote,
    title: "Insert your cash",
    body: "Feed notes into the bulk note acceptor. The machine counts, validates, and totals in real time.",
  },
  {
    icon: Receipt,
    title: "Confirm & print receipt",
    body: "Approve the deposit. Funds settle instantly via PesaLink IPSL and a thermal receipt prints on the spot.",
  },
];

const FEATURES = [
  {
    icon: Building2,
    title: "Deposit to any Kenyan bank",
    body: "PesaLink connects every commercial bank — one machine, every recipient.",
  },
  {
    icon: Clock,
    title: "24/7 self-service",
    body: "Skip the teller queue. Walk-in kiosks deployed in malls, fuel stations, and bank lobbies.",
  },
  {
    icon: ShieldCheck,
    title: "On-screen KYC",
    body: "ID capture, phone verification, and AML screening happen at the machine — no enrollment required.",
  },
  {
    icon: Banknote,
    title: "Bulk note acceptor",
    body: "Counts up to 200 notes per insertion. Detects counterfeits and torn notes automatically.",
  },
];

const FAQS = [
  {
    q: "Do I need an account to use an Interbank CDM?",
    a: "No. Anyone can walk up, complete on-screen KYC, and deposit cash to any Kenyan bank account.",
  },
  {
    q: "Which banks are supported?",
    a: "Every commercial bank connected to PesaLink IPSL — that's all licensed banks in Kenya.",
  },
  {
    q: "How fast does the recipient receive the funds?",
    a: "Settlement is real-time. The recipient typically sees the credit within seconds of the deposit being confirmed.",
  },
  {
    q: "What's the maximum I can deposit?",
    a: "Per-transaction and daily limits follow CBK AML thresholds and your KYC tier captured at the machine.",
  },
];

export default function InterbankCdm() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="bg-forest text-white">
        <div className="container-orbit py-20 lg:py-28 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              Interbank CDM · Public Access
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Deposit cash to any Kenyan bank — without an account.
            </h1>
            <p className="mt-5 text-lg text-white/75 leading-relaxed max-w-xl">
              Orbit Interbank CDM kiosks let anyone walk up and deposit cash
              directly to any commercial bank account in Kenya, settled in
              real time over PesaLink.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors"
              >
                Request a deployment <ArrowRight size={16} />
              </Link>
              <a
                href="#how"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/5 transition-colors"
              >
                See how it works
              </a>
            </div>
          </Reveal>
          <Reveal delay={120} className="flex justify-center">
            <CdmMockup variant="deposit" />
          </Reveal>
        </div>
      </section>

      {/* Features grid */}
      <section className="bg-white py-20 lg:py-24">
        <div className="container-orbit">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Why public CDMs</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-forest tracking-tight">
              The teller-free way to deposit cash
            </h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map(({ icon: Icon, title, body }) => (
              <Reveal key={title} className="rounded-xl border border-border bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-tint">
                  <Icon size={20} className="text-forest" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-forest">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="bg-tint py-20 lg:py-24">
        <div className="container-orbit">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">How it works</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-forest tracking-tight">
              Three taps. Cash deposited.
            </h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {STEPS.map((s, i) => (
              <Reveal
                key={s.title}
                delay={i * 80}
                className="relative rounded-xl bg-white p-6 border border-border"
              >
                <div className="absolute -top-3 left-6 inline-flex items-center justify-center rounded-md bg-forest px-2.5 py-1 text-xs font-bold text-white">
                  Step {i + 1}
                </div>
                <s.icon size={26} className="text-forest mt-2" />
                <h3 className="mt-4 text-lg font-semibold text-forest">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-white py-20 lg:py-24">
        <div className="container-orbit grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="eyebrow">Where to find them</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-forest tracking-tight">
              Deployed where Kenyans already are
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Interbank CDM kiosks are placed in high-traffic locations so
              your customers can deposit cash any time, day or night.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Shopping malls and supermarket lobbies",
                "Bank branch external vestibules (24/7 zones)",
                "Fuel station forecourts",
                "Transit hubs and matatu termini",
                "Corporate office complexes",
              ].map((l) => (
                <li key={l} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-accent mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{l}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-2xl bg-tint p-8 border border-border">
              <MapPin size={28} className="text-forest" />
              <h3 className="mt-4 text-xl font-bold text-forest">
                Site selection done for you
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Our deployment team handles landlord agreements, power and
                connectivity surveys, secure mounting, and signage — so your
                kiosk goes live in weeks, not quarters.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-forest">14d</div>
                  <div className="text-xs text-muted-foreground mt-1">Avg. install</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-forest">99.5%</div>
                  <div className="text-xs text-muted-foreground mt-1">Uptime SLA</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-forest">24/7</div>
                  <div className="text-xs text-muted-foreground mt-1">Monitoring</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-tint py-20 lg:py-24">
        <div className="container-orbit max-w-3xl">
          <Reveal>
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-forest tracking-tight">
              Common questions
            </h2>
          </Reveal>
          <div className="mt-10 space-y-4">
            {FAQS.map((f) => (
              <Reveal
                key={f.q}
                className="rounded-xl bg-white border border-border p-6"
              >
                <h3 className="text-base font-semibold text-forest">{f.q}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest text-white py-16">
        <div className="container-orbit flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Bring Interbank CDMs to your network.</h2>
            <p className="mt-2 text-white/70">Talk to our deployment team about your sites.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors"
          >
            Request a demo <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
