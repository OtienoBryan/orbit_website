import { Printer, Wifi, CreditCard } from "lucide-react";

export const Z100Terminal = () => {
  return (
    <div className="relative mx-auto w-[280px] sm:w-[320px]">
      <div className="rounded-[1.5rem] bg-neutral-900 p-3 shadow-2xl ring-1 ring-white/10">
        {/* Top accents */}
        <div className="flex items-center justify-between px-2 pb-2">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <Wifi size={10} className="text-white/50" />
          </div>
          <span className="text-[0.55rem] font-bold tracking-widest text-white/40">
            SZHCCT Z100
          </span>
        </div>

        {/* Screen */}
        <div className="relative overflow-hidden rounded-lg bg-white aspect-[3/4]">
          <div className="bg-forest px-3 py-2.5 flex items-center justify-between">
            <span className="text-[0.6rem] font-bold tracking-wider text-white">
              ORBIT
            </span>
            <span className="text-[0.55rem] text-accent font-semibold">14:32</span>
          </div>
          <div className="p-4 space-y-3">
            <div className="text-[0.55rem] uppercase tracking-wider text-muted-foreground">
              Amount Due
            </div>
            <div className="text-2xl font-bold text-forest">KSh 4,820</div>
            <div className="grid grid-cols-3 gap-1.5 pt-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"].map((n) => (
                <div
                  key={n}
                  className="aspect-square rounded-md bg-tint flex items-center justify-center text-sm font-semibold text-forest"
                >
                  {n}
                </div>
              ))}
            </div>
            <div className="flex gap-1.5 pt-1">
              <div className="flex-1 rounded-md bg-forest py-2 text-center text-[0.6rem] font-bold text-white tracking-wider">
                CONFIRM
              </div>
              <div className="rounded-md border border-border px-3 py-2 text-[0.6rem] font-bold text-forest">
                X
              </div>
            </div>
          </div>
        </div>

        {/* Card slot + buttons */}
        <div className="mt-3 px-2 space-y-2">
          <div className="flex items-center justify-between rounded-md bg-neutral-800 px-3 py-2">
            <CreditCard size={12} className="text-white/50" />
            <span className="text-[0.5rem] font-bold tracking-widest text-white/40">
              INSERT · TAP · SWIPE
            </span>
          </div>
          <div className="flex items-center justify-between px-1">
            <Printer size={11} className="text-white/40" />
            <div className="flex gap-1">
              <span className="h-1 w-6 rounded-full bg-neutral-700" />
              <span className="h-1 w-6 rounded-full bg-neutral-700" />
            </div>
          </div>
          {/* Printer slot */}
          <div className="h-1 mx-3 rounded-full bg-neutral-950" />
        </div>
      </div>
    </div>
  );
};
