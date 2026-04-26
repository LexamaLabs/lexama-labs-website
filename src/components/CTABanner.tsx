import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTABannerProps {
  heading: string;
  subtext: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  accent?: "blue" | "teal";
}

export default function CTABanner({
  heading,
  subtext,
  primaryCta,
  secondaryCta,
  accent = "blue",
}: CTABannerProps) {
  const btnBg =
    accent === "teal"
      ? "bg-cyan hover:bg-cyan-dark"
      : "bg-blue hover:bg-blue-dark";

  return (
    <section className="bg-navy border-t border-edge py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-fg mb-4">
          {heading}
        </h2>
        <p className="text-fg-muted text-lg mb-8">{subtext}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href={primaryCta.href}
            className={`inline-flex items-center gap-2 px-6 py-3 ${btnBg} text-white font-medium rounded-md transition-colors`}
          >
            {primaryCta.label}
            <ArrowRight size={16} />
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center gap-2 px-6 py-3 border border-edge hover:border-edge-hover text-fg-muted hover:text-fg font-medium rounded-md transition-colors"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
