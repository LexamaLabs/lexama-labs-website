/** The Bracket — Lexama Labs logo mark. */
export function LogoIcon({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="56" height="56" rx="14" fill="#0D1625" />
      <rect x="10" y="8" width="14" height="40" rx="3" fill="#3B82F6" />
      <rect x="10" y="34" width="36" height="14" rx="3" fill="#06B6D4" />
      <circle cx="40.5" cy="13.5" r="10" fill="#3B82F6" fillOpacity="0.25" />
      <circle cx="40.5" cy="13.5" r="5.5" fill="#60A5FA" />
    </svg>
  );
}

/** Compact wordmark: icon + "Lexama Labs" */
export function LogoWordmark({ dark = true }: { dark?: boolean }) {
  return (
    <svg
      width="160"
      height="36"
      viewBox="0 0 200 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Lexama Labs"
    >
      <defs>
        <linearGradient id="wordmark-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={dark ? "#60A5FA" : "#2563EB"} />
          <stop offset="100%" stopColor={dark ? "#22D3EE" : "#0891B2"} />
        </linearGradient>
      </defs>
      {/* Vertical bar */}
      <rect x="0" y="2" width="12" height="34" rx="3" fill="#3B82F6" />
      {/* Horizontal bar */}
      <rect x="0" y="24" width="30" height="12" rx="3" fill="#06B6D4" />
      {/* Glow */}
      <circle cx="25.5" cy="7.5" r="8" fill="#3B82F6" fillOpacity="0.2" />
      {/* Dot */}
      <circle cx="25.5" cy="7.5" r="4.5" fill={dark ? "#60A5FA" : "#2563EB"} />
      {/* "Lexama" */}
      <text
        x="44"
        y="27"
        fontSize="20"
        fontWeight="700"
        letterSpacing="-0.5"
        fill={dark ? "#F1F5F9" : "#0F172A"}
        fontFamily="Inter, system-ui, sans-serif"
      >
        Lexama
      </text>
      {/* "Labs" — gradient */}
      <text
        x="130"
        y="27"
        fontSize="20"
        fontWeight="700"
        letterSpacing="-0.5"
        fill="url(#wordmark-grad)"
        fontFamily="Inter, system-ui, sans-serif"
      >
        Labs
      </text>
    </svg>
  );
}
