import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  dark?: boolean;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  dark = false,
}: FeatureCardProps) {
  return (
    <div
      className={`rounded-xl p-6 border transition-all ${
        dark
          ? "bg-surface border-edge hover:border-edge-hover"
          : "bg-white border-gray-100 hover:border-blue/30 shadow-sm"
      }`}
    >
      <div className="w-10 h-10 rounded-lg bg-blue/10 flex items-center justify-center mb-4">
        <Icon size={20} className="text-blue" />
      </div>
      <h3
        className={`font-semibold text-base mb-2 ${
          dark ? "text-fg" : "text-gray-900"
        }`}
      >
        {title}
      </h3>
      <p
        className={`text-sm leading-relaxed ${
          dark ? "text-fg-muted" : "text-gray-600"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
