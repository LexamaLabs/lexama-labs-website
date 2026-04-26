import { LucideIcon, Clock } from "lucide-react";

interface VerticalRoadmapCardProps {
  icon: LucideIcon;
  vertical: string;
  description: string;
  status: "live" | "coming-soon";
  href?: string;
}

export default function VerticalRoadmapCard({
  icon: Icon,
  vertical,
  description,
  status,
  href,
}: VerticalRoadmapCardProps) {
  const inner = (
    <div
      className={`flex items-start gap-4 p-5 rounded-xl border transition-all ${
        status === "live"
          ? "bg-[#0D1625] border-[#3B82F6]/40 hover:border-[#3B82F6]/70 cursor-pointer"
          : "bg-[#080D1A] border-[#1A2D4A] opacity-60"
      }`}
    >
      <div
        className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
          status === "live" ? "bg-[#3B82F6]/10" : "bg-[#1A2D4A]"
        }`}
      >
        <Icon
          size={20}
          className={status === "live" ? "text-[#3B82F6]" : "text-[#64748B]"}
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-[#F1F5F9] font-semibold text-sm">{vertical}</h3>
          {status === "live" ? (
            <span className="font-mono text-[9px] px-2 py-0.5 rounded-full bg-[#06B6D4]/10 text-[#22D3EE] font-semibold tracking-[1.5px] uppercase">
              Live
            </span>
          ) : (
            <span className="flex items-center gap-1 font-mono text-[9px] px-2 py-0.5 rounded-full bg-[#1A2D4A] text-[#64748B] font-semibold tracking-[1.5px] uppercase">
              <Clock size={9} />
              Soon
            </span>
          )}
        </div>
        <p className="text-[#64748B] text-xs leading-relaxed">{description}</p>
      </div>
    </div>
  );

  if (href && status === "live") {
    return <a href={href}>{inner}</a>;
  }

  return inner;
}
