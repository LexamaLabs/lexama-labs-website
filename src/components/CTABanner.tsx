import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTABannerProps {
  heading: string;
  subtext: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function CTABanner({
  heading,
  subtext,
  primaryCta,
  secondaryCta,
}: CTABannerProps) {
  return (
    <section className="bg-[#080D1A] border-t border-[#1A2D4A] py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#F1F5F9] mb-4">
          {heading}
        </h2>
        <p className="text-[#94A3B8] text-lg mb-8">{subtext}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href={primaryCta.href}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-medium rounded-md transition-colors"
          >
            {primaryCta.label}
            <ArrowRight size={16} />
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#1A2D4A] hover:border-[#2A4570] text-[#94A3B8] hover:text-[#F1F5F9] font-medium rounded-md transition-colors"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
