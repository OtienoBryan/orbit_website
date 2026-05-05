interface OrbitMarkProps {
  className?: string;
  size?: number;
}

export const OrbitMark = ({ className = "", size = 28 }: OrbitMarkProps) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />
    <circle cx="16" cy="16" r="9" stroke="currentColor" strokeWidth="1.5" opacity="0.85" />
    <circle cx="16" cy="16" r="3" fill="currentColor" />
  </svg>
);

export const OrbitLogo = ({ tone = "light" }: { tone?: "light" | "dark" }) => (
  <a href="#top" className="flex items-center group">
    <img src="/orb.png" alt="Orbit logo" className="rounded-lg w-[90px] h-auto sm:w-[120px] lg:w-[140px]" />
  </a>
);
