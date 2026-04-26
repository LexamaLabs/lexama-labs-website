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
          ? "bg-[#0D1625] border-[#1A2D4A] hover:border-[#2A4570]"
          : "bg-white border-gray-100 hover:border-[#3B82F6]/30 shadow-sm"
      }`}
    >
      <div className="w-10 h-10 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center mb-4">
        <Icon size={20} className="text-[#3B82F6]" />
      </div>
      <h3
        className={`font-semibold text-base mb-2 ${
          dark ? "text-[#F1F5F9]" : "text-gray-900"
        }`}
      >
        {title}
      </h3>
      <p
        className={`text-sm leading-relaxed ${
          dark ? "text-[#94A3B8]" : "text-gray-600"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
