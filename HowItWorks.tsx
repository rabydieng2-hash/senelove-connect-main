import { cn } from "@/lib/utils";

/**
 * Yeesal brand mark: rising sun on a burgundy disc.
 * Symbolises renewal and second chances.
 */
export const SunLogo = ({ className, size = 40 }: { className?: string; size?: number }) => (
  <span
    className={cn(
      "relative inline-flex items-center justify-center rounded-full overflow-hidden shadow-soft",
      className
    )}
    style={{ width: size, height: size, background: "hsl(var(--primary))" }}
    aria-hidden="true"
  >
    <svg viewBox="0 0 40 40" className="absolute inset-0 h-full w-full">
      {/* horizon line */}
      <line x1="3" y1="27" x2="37" y2="27" stroke="hsl(var(--accent))" strokeWidth="1.1" strokeLinecap="round" opacity="0.85" />
      {/* sun disc rising above horizon */}
      <circle cx="20" cy="27" r="7" fill="hsl(var(--accent))" />
      {/* sun rays */}
      <g stroke="hsl(var(--accent))" strokeWidth="1.4" strokeLinecap="round" opacity="0.95">
        <line x1="20" y1="10" x2="20" y2="14" />
        <line x1="9.5" y1="14.5" x2="12" y2="17" />
        <line x1="30.5" y1="14.5" x2="28" y2="17" />
        <line x1="5" y1="22" x2="8" y2="22" />
        <line x1="35" y1="22" x2="32" y2="22" />
      </g>
    </svg>
  </span>
);

export const Wordmark = ({ className }: { className?: string }) => (
  <span className={cn("font-display font-semibold tracking-tight", className)}>
    Yee<span className="text-primary">sal</span>
  </span>
);
