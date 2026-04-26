interface TestimonialPlaceholderProps {
  quote: string;
  name: string;
  role: string;
  org: string;
}

export default function TestimonialPlaceholder({
  quote,
  name,
  role,
  org,
}: TestimonialPlaceholderProps) {
  return (
    <div className="bg-surface border border-edge rounded-xl p-6 hover:border-edge-hover transition-all">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-cyan text-sm">
            ★
          </span>
        ))}
      </div>
      <p className="text-fg-muted text-sm leading-relaxed mb-4 italic">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-blue/15 border border-edge flex items-center justify-center text-sky font-semibold text-sm">
          {name[0]}
        </div>
        <div>
          <p className="text-fg text-sm font-medium">{name}</p>
          <p className="text-fg-subtle text-xs">
            {role}, {org}
          </p>
        </div>
      </div>
    </div>
  );
}
