import {
  ArrowDownToLine,
  ArrowUpFromLine,
  ListChecks,
  Wallet,
  BarChart3,
  UserRound,
} from "lucide-react";

const TILES = [
  { label: "CASH IN", Icon: ArrowDownToLine },
  { label: "CASH OUT", Icon: ArrowUpFromLine },
  { label: "TRANSACTIONS", Icon: ListChecks },
  { label: "FLOAT", Icon: Wallet },
  { label: "REPORTS", Icon: BarChart3 },
  { label: "PROFILE", Icon: UserRound },
];

interface PhoneMockupProps {
  mode?: "agent" | "merchant";
}

export const PhoneMockup = ({ mode = "agent" }: PhoneMockupProps) => {
  return (
    <div className="relative mx-auto w-[230px] sm:w-[260px]">
      {/* Phone frame */}
      <div className="relative rounded-[2.2rem] bg-neutral-900 p-2.5 shadow-2xl ring-1 ring-white/10">
        <div className="relative overflow-hidden rounded-[1.7rem] bg-white aspect-[9/19]">
          {/* Notch */}
          <div className="absolute left-1/2 top-2 z-20 h-4 w-20 -translate-x-1/2 rounded-full bg-neutral-900" />

          {/* Status bar */}
          <div className="h-7 bg-white" />

          {/* Header */}
          <div className="bg-forest px-4 py-4 text-white">
            <div className="text-[0.6rem] uppercase tracking-widest text-accent/90 font-semibold">
              {mode === "agent" ? "Agent" : "Merchant"}
            </div>
            <div className="mt-0.5 text-[0.85rem] font-semibold leading-tight">
              {mode === "agent" ? "Mwangi J." : "Acacia Mall #214"}
            </div>
            <div className="mt-3 rounded-md bg-white/8 px-2.5 py-1.5">
              <div className="text-[0.55rem] uppercase tracking-wider text-white/60">
                {mode === "agent" ? "Float Balance" : "Today's Sales"}
              </div>
              <div className="text-[0.95rem] font-bold text-accent">
                KSh {mode === "agent" ? "184,500" : "62,340"}
              </div>
            </div>
          </div>

          {mode === "agent" ? (
            <div className="grid grid-cols-2 gap-2 p-3 bg-white">
              {TILES.map(({ label, Icon }) => (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center gap-1.5 rounded-lg border border-border bg-tint/50 py-3.5"
                >
                  <Icon size={18} className="text-forest" strokeWidth={2} />
                  <span className="text-[0.55rem] font-bold tracking-wider text-forest">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-3 space-y-2 bg-white">
              <button className="w-full rounded-lg bg-forest py-3 text-[0.7rem] font-bold text-white tracking-wider">
                PROCESS SALE
              </button>
              <button className="w-full rounded-lg border border-border py-3 text-[0.7rem] font-bold text-forest tracking-wider">
                REFUND
              </button>
              <button className="w-full rounded-lg border border-border py-3 text-[0.7rem] font-bold text-forest tracking-wider">
                SETTLEMENT
              </button>
              <div className="mt-3 rounded-lg border border-dashed border-border p-2.5">
                <div className="text-[0.55rem] uppercase tracking-wider text-muted-foreground">
                  Last Sale
                </div>
                <div className="text-sm font-bold text-forest">KSh 4,820.00</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
