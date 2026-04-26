interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

/**
 * Section eyebrow label.
 * JetBrains Mono · 11px · `text-teal` · 3px letter-spacing · uppercase.
 * Pass `light` on white backgrounds for the deeper `text-blue-dark` variant.
 */
export default function Eyebrow({ children, className = "", light = false }: EyebrowProps) {
  return (
    <p
      className={`font-mono text-[11px] font-semibold uppercase tracking-[3px] mb-3 ${
        light ? "text-blue-dark" : "text-teal"
      } ${className}`}
    >
      {children}
    </p>
  );
}
