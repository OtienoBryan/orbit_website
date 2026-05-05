import { MapPin, Store, Landmark, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";

interface Env {
  Icon: LucideIcon;
  title: string;
  body: string;
}

const ENVS: Env[] = [
  {
    Icon: MapPin,
    title: "Agent Outlets",
    body: "Supermarkets, pharmacies, M-Pesa shops, and corner stores running agency banking on the Z100 terminal.",
  },
  {
    Icon: Store,
    title: "Retail & Mall Merchants",
    body: "Mid-to-large retailers in malls and shopping centres accepting interbank payments at checkout via Orbit Merchant Mode.",
  },
  {
    Icon: Landmark,
    title: "Corporate & Branch CDMs",
    body: "Dedicated CDM terminals in bank branches, corporate lobbies, and high-traffic mall locations for client cash deposits.",
  },
];

export const Deployment = () => {
  return (
    <section className="bg-tint/40 py-8 lg:py-20">
      <div className="container-orbit">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Deployment Environments</span>
          <h2 className="mt-2 font-bold text-forest tracking-tight" style={{ fontSize: "clamp(22px,4vw,46px)" }}>
            Wherever cash meets banking
          </h2>
        </Reveal>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-5">
          {ENVS.map(({ Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="h-full rounded-xl bg-white border border-border p-4 lg:p-7">
                <div className="inline-flex h-9 w-9 lg:h-11 lg:w-11 items-center justify-center rounded-lg bg-forest text-accent">
                  <Icon size={17} strokeWidth={2} />
                </div>
                <h3 className="mt-3 text-sm lg:text-lg font-bold text-forest">{title}</h3>
                <p className="mt-1.5 text-xs lg:text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
