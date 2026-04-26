interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

/**
 * Section eyebrow label.
 * JetBrains Mono · 11px · #22D3EE · 3px letter-spacing · uppercase
 * Use `light` prop on white backgrounds to use the blue-dark variant.
 */
export default function Eyebrow({ children, className = "", light = false }: EyebrowProps) {
  return (
    <p
      className={`font-mono text-[11px] font-semibold uppercase tracking-[3px] mb-3 ${
        light ? "text-[#2563EB]" : "text-[#22D3EE]"
      } ${className}`}
    >
      {children}
    </p>
  );
}
