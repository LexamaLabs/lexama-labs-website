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
          ? "bg-surface border-blue/40 hover:border-blue/70 cursor-pointer"
          : "bg-navy border-edge opacity-60"
      }`}
    >
      <div
        className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
          status === "live" ? "bg-blue/10" : "bg-edge"
        }`}
      >
        <Icon
          size={20}
          className={status === "live" ? "text-blue" : "text-fg-subtle"}
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-fg font-semibold text-sm">{vertical}</h3>
          {status === "live" ? (
            <span className="font-mono text-[9px] px-2 py-0.5 rounded-full bg-cyan/10 text-teal font-semibold tracking-[1.5px] uppercase">
              Live
            </span>
          ) : (
            <span className="flex items-center gap-1 font-mono text-[9px] px-2 py-0.5 rounded-full bg-edge text-fg-subtle font-semibold tracking-[1.5px] uppercase">
              <Clock size={9} />
              Soon
            </span>
          )}
        </div>
        <p className="text-fg-subtle text-xs leading-relaxed">{description}</p>
      </div>
    </div>
  );

  if (href && status === "live") {
    return <a href={href}>{inner}</a>;
  }

  return inner;
}
