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
    <div className="bg-[#0D1625] border border-[#1A2D4A] rounded-xl p-6 hover:border-[#2A4570] transition-all">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-[#06B6D4] text-sm">
            ★
          </span>
        ))}
      </div>
      <p className="text-[#94A3B8] text-sm leading-relaxed mb-4 italic">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-[#3B82F6]/15 border border-[#1A2D4A] flex items-center justify-center text-[#60A5FA] font-semibold text-sm">
          {name[0]}
        </div>
        <div>
          <p className="text-[#F1F5F9] text-sm font-medium">{name}</p>
          <p className="text-[#64748B] text-xs">
            {role}, {org}
          </p>
        </div>
      </div>
    </div>
  );
}
