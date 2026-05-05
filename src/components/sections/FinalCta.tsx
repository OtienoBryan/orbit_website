import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const FinalCta = () => {
  return (
    <section id="demo" className="px-4 lg:px-8 pb-10 lg:pb-24" style={{ background: "var(--bg)" }}>
      <Reveal>
        <div
          className="relative mx-auto max-w-7xl rounded-2xl lg:rounded-[32px] overflow-hidden px-6 py-10 lg:px-16 lg:py-24"
          style={{
            background:
              "radial-gradient(80% 100% at 0% 0%, oklch(0.40 0.16 148 / 0.70), transparent 60%), radial-gradient(80% 100% at 100% 100%, oklch(0.32 0.12 150 / 0.80), transparent 60%), linear-gradient(180deg, oklch(0.30 0.10 148), oklch(0.20 0.08 150))",
            border: "1px solid var(--line-strong)",
          }}
        >
          {/* Background glow orb */}
          <div
            className="pointer-events-none absolute -top-10 -right-20 rounded-full"
            style={{
              width: 380, height: 380,
              background: "radial-gradient(circle, oklch(0.68 0.20 145 / 0.55), transparent 60%)",
              filter: "blur(10px)",
            }}
            aria-hidden
          />

          <div className="relative max-w-2xl">
            <h2
              className="font-extrabold text-white mb-3"
              style={{
                fontSize: "clamp(24px,4vw,52px)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
              }}
            >
              Ready to deploy across your network?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.78)", maxWidth: "50ch", fontSize: "clamp(13px,1.2vw,17px)", lineHeight: 1.6 }}>
              Available for licensed financial institutions, mobile money operators, and retail merchants across Kenya. 10 terminals or 100 CDMs — we scale with you.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/contact" className="btn-pill btn-pill-primary">
                Request a Demo
                <ArrowRight size={16} />
              </a>
              <a
                href="/contact"
                className="btn-pill"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.20)",
                }}
              >
                Talk to Sales
              </a>
            </div>
            <p className="mt-6 text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
              Minimum deployment: 10 terminals · CBK regulated · PesaLink certified
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
};
