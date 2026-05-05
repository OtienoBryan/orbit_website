import {
  ArrowUpRight, ArrowDownLeft, UserCheck,
  Smartphone, ReceiptText, Globe, ShieldCheck, Zap,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

interface Feature { Icon: LucideIcon; title: string; description: string; }

const SERVICES: Feature[] = [
  { Icon: ArrowUpRight,  title: "Cash Deposits",          description: "Move physical cash into the digital economy instantly across 38+ banks and SACCOs." },
  { Icon: ArrowDownLeft, title: "Cash Withdrawals",       description: "Access bank balances at any Orbit point without searching for a specific ATM." },
  { Icon: UserCheck,     title: "Simple Verification",    description: "National ID and mobile phone. Biometric or 2FA verification in seconds." },
  { Icon: Smartphone,    title: "Cardless Transactions",  description: "Access funds securely via National ID and mobile authentication through PesaLink." },
  { Icon: ReceiptText,   title: "Bill Pay",               description: "Pay utility bills, school fees, and local services at any Orbit agent or CDM." },
  { Icon: Globe,         title: "38+ Banks & SACCOs",     description: "One terminal connects you to every major financial institution in Kenya." },
  { Icon: ShieldCheck,   title: "CBK Compliant",          description: "Full AML/KYC compliance, HMAC-signed proxying, biometric verification." },
  { Icon: Zap,           title: "Instant Settlement",     description: "PesaLink rails clear funds to the customer's account in under 15 seconds." },
];

export const Features = () => {
  return (
    <section id="agents" className="py-8 lg:py-20" style={{ background: "var(--bg)" }}>
      <div className="container-orbit">
        <Reveal>
          <span className="eyebrow">Capabilities</span>
        </Reveal>
        <Reveal delay={60}>
          <h2
            className="font-extrabold mt-3 mb-3 text-white"
            style={{
              fontSize: "clamp(24px,4vw,56px)",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
            }}
          >
            Built for Kenyan cash flow.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p style={{ color: "var(--muted)", maxWidth: "58ch", fontSize: "clamp(13px,1.2vw,16px)", lineHeight: 1.6 }}>
            Every Orbit deployment — CDM or agent POS — runs the full feature set. No tiers, no add-ons.
          </p>
        </Reveal>

        <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
          {SERVICES.map(({ Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 40}>
              <div
                className="h-full rounded-xl p-3 lg:p-5"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--line)" }}
              >
                <div
                  className="flex h-8 w-8 lg:h-11 lg:w-11 items-center justify-center rounded-lg mb-2 lg:mb-4"
                  style={{ background: "oklch(0.68 0.20 145 / 0.16)", color: "var(--green)" }}
                >
                  <Icon size={15} className="lg:hidden" />
                  <Icon size={20} className="hidden lg:block" />
                </div>
                <h3 className="font-bold text-white leading-tight mb-1" style={{ fontSize: "clamp(12px,1vw,16px)", letterSpacing: "-0.01em" }}>
                  {title}
                </h3>
                <p className="hidden lg:block" style={{ color: "var(--muted)", fontSize: 13.5, lineHeight: 1.55 }}>
                  {description}
                </p>
                <p className="lg:hidden" style={{ color: "var(--muted)", fontSize: 11, lineHeight: 1.4 }}>
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
