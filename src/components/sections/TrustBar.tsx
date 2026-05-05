const ITEMS = [
  "Equity Bank", "KCB", "Co-op Bank", "Naivas", "Quickmart",
  "PesaLink", "Stanbic", "NCBA", "Absa", "DTB",
  "Equity Bank", "KCB", "Co-op Bank", "Naivas", "Quickmart",
  "PesaLink", "Stanbic", "NCBA", "Absa", "DTB",
];

export const TrustBar = () => {
  return (
    <div
      className="relative overflow-hidden py-7"
      style={{
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        background: "rgba(255,255,255,0.02)",
      }}
    >
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10" style={{ background: "linear-gradient(to right, var(--bg), transparent)" }} aria-hidden />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10" style={{ background: "linear-gradient(to left, var(--bg), transparent)" }} aria-hidden />

      <div className="flex gap-16 w-max animate-marquee">
        {ITEMS.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="flex items-center gap-3.5 whitespace-nowrap font-semibold shrink-0"
            style={{ color: "rgba(244,246,242,0.50)", fontSize: 17 }}
          >
            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--green)" }} />
            {name}
          </span>
        ))}
      </div>
    </div>
  );
};
