import { Reveal } from "@/components/Reveal";

const STEPS = [
  {
    n: "01",
    title: "Identify",
    body: "Customer enters their account number, or taps their card / ID. The terminal authenticates with the bank or SACCO in real-time.",
  },
  {
    n: "02",
    title: "Deposit / Withdraw",
    body: "Notes are validated and counted by the CDM, or paid out / received via the agent's POS. Counterfeits are rejected instantly.",
  },
  {
    n: "03",
    title: "Settle",
    body: "Funds clear instantly to the customer's account through PesaLink rails. SMS confirmation in under 15 seconds.",
  },
  {
    n: "04",
    title: "Reconcile",
    body: "Every device, every transaction, dashboarded for the bank, the agent, and the operator. Audit-ready by morning.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      style={{ background: "var(--paper)", color: "var(--ink)" }}
    >
      <div className="container-orbit py-8 lg:py-12">
        <Reveal>
          <span className="eyebrow" style={{ color: "var(--green-2)" }}>How it works</span>
        </Reveal>
        <Reveal delay={60}>
          <h2
            className="font-extrabold tracking-tight mt-3 mb-3"
            style={{
              fontSize: "clamp(26px, 4vw, 56px)",
              lineHeight: 1.02,
              letterSpacing: "-0.025em",
              color: "var(--ink)",
            }}
          >
            Cash in. Settled. Done.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p
            className="leading-relaxed"
            style={{ color: "var(--muted-dark)", maxWidth: "60ch", fontSize: "clamp(14px,1.2vw,17px)" }}
          >
            Every Orbit transaction follows the same four steps — whether at a branch CDM or an agent's POS in a Mombasa shop.
          </p>
        </Reveal>

        <div className="mt-6 flex flex-col lg:flex-row gap-4 lg:gap-6 items-stretch">
          {/* Cards — 2x2 grid always */}
          <div className="grid grid-cols-2 gap-2 lg:gap-3 lg:w-1/2">
            {STEPS.map(({ n, title, body }, i) => (
              <Reveal key={n} delay={i * 80}>
                <div
                  className="rounded-xl p-3 lg:p-4 h-full"
                  style={{ background: "#fff", border: "1px solid rgba(10,20,14,0.08)" }}
                >
                  <div
                    className="font-mono font-semibold leading-none mb-2"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "clamp(24px, 3vw, 38px)",
                      letterSpacing: "-0.04em",
                      color: "var(--green-2)",
                    }}
                  >
                    {n}
                  </div>
                  <h3
                    className="font-bold mb-1"
                    style={{ fontSize: "clamp(13px,1.1vw,16px)", color: "var(--ink)" }}
                  >
                    {title}
                  </h3>
                  <p style={{ color: "var(--muted-dark)", fontSize: "clamp(11px,0.9vw,13px)", lineHeight: 1.5 }}>
                    {body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Image */}
          <Reveal delay={200} className="lg:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-lg w-full h-full">
              <img src="/booth.png" alt="Orbit booth" className="w-full h-full object-contain" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
