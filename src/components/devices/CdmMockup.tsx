import { CheckCircle2, Building2 } from "lucide-react";

interface CdmMockupProps {
  variant?: "hero" | "deposit";
}

export const CdmMockup = ({ variant = "hero" }: CdmMockupProps) => {
  return (
    <div className="relative mx-auto w-[260px] sm:w-[290px]">
      {/* Terminal body */}
      <div className="rounded-2xl bg-neutral-800 p-3 shadow-2xl ring-1 ring-white/10">
        {/* Screen */}
        <div className="relative overflow-hidden rounded-lg bg-white aspect-[4/5]">
          {/* Header bar */}
          <div className="bg-forest px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Building2 size={14} className="text-accent" />
              <span className="text-[0.65rem] font-bold tracking-wider text-white">
                ORBIT CDM
              </span>
            </div>
            <span className="text-[0.55rem] uppercase tracking-wider text-white/60">
              IPSL
            </span>
          </div>

          {variant === "hero" ? (
            <div className="p-4 space-y-3">
              <div className="text-[0.6rem] uppercase tracking-wider text-muted-foreground">
                Interbank Deposits
              </div>
              <div className="text-sm font-bold text-forest leading-tight">
                Insert card or scan QR to begin deposit
              </div>
              <div className="rounded-lg bg-tint p-3 space-y-1.5">
                <div className="flex justify-between text-[0.6rem] text-muted-foreground">
                  <span>Session</span>
                  <span className="font-mono">#A82-441</span>
                </div>
                <div className="flex justify-between text-[0.6rem] text-muted-foreground">
                  <span>Status</span>
                  <span className="text-forest font-semibold">Ready</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1.5 pt-1">
                {["1", "2", "3", "4", "5", "6"].map((n) => (
                  <div
                    key={n}
                    className="aspect-square rounded-md border border-border flex items-center justify-center text-xs font-semibold text-forest/70"
                  >
                    {n}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="p-4 space-y-3">
              <div className="flex justify-center pt-1">
                <CheckCircle2 size={36} className="text-accent" strokeWidth={2.2} />
              </div>
              <div className="text-center text-[0.7rem] uppercase tracking-wider text-forest font-bold">
                Deposit Confirmed
              </div>
              <div className="space-y-2 pt-1">
                <div className="rounded-md bg-tint px-3 py-2">
                  <div className="text-[0.55rem] uppercase tracking-wider text-muted-foreground">
                    Client
                  </div>
                  <div className="text-xs font-semibold text-forest">
                    Acacia Holdings Ltd
                  </div>
                </div>
                <div className="rounded-md bg-tint px-3 py-2">
                  <div className="text-[0.55rem] uppercase tracking-wider text-muted-foreground">
                    Amount
                  </div>
                  <div className="text-base font-bold text-forest">
                    KSh 250,000.00
                  </div>
                </div>
                <div className="rounded-md bg-tint px-3 py-2">
                  <div className="text-[0.55rem] uppercase tracking-wider text-muted-foreground">
                    Beneficiary Bank
                  </div>
                  <div className="text-xs font-semibold text-forest">
                    Equity Bank · ****2104
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Card slot */}
        <div className="mt-3 mx-4 h-1 rounded-full bg-neutral-700" />
        <div className="mt-2 mx-2 grid grid-cols-3 gap-2">
          <div className="h-1.5 rounded-full bg-neutral-700" />
          <div className="h-1.5 rounded-full bg-accent/70" />
          <div className="h-1.5 rounded-full bg-neutral-700" />
        </div>
      </div>
    </div>
  );
};
