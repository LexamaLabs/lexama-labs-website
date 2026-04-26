import type { Metadata } from "next";
import { Eye, Cpu, Users, Layers } from "lucide-react";
import CTABanner from "@/components/CTABanner";
import Eyebrow from "@/components/Eyebrow";

export const metadata: Metadata = {
  title: "About",
  description:
    "Lexama Labs is on a mission to bring modern software to the organizations doing real-world work — schools, clinics, nonprofits, and more.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-24 md:py-32 px-6 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-[0.06] blur-3xl bg-radial-glow text-blue"
        />
        <div className="relative max-w-3xl mx-auto">
          <Eyebrow>About</Eyebrow>
          <h1 className="text-4xl md:text-5xl font-bold text-fg leading-tight tracking-tight mb-6">
            Not just a software company.
          </h1>
          <p className="text-fg-muted text-xl leading-relaxed">
            A bet that the organizations doing real-world work — the schools,
            clinics, nonprofits, and community groups that hold society
            together — deserve the same quality of software as Fortune 500
            companies.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <Eyebrow light>Why we exist</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            The gap is real — and it&apos;s been ignored long enough.
          </h2>
          <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
            <p>
              Enterprise software is excellent. Consumer software is excellent.
              But the organizations in between — the ones that run after-school
              programs, provide healthcare in underserved neighborhoods, or
              coordinate disaster relief — have been left with tools that
              don&apos;t fit.
            </p>
            <p>
              They adapt. They build workarounds. They train their staff on
              systems that make simple tasks complicated. And they accept it,
              because there&apos;s nothing better built for them.
            </p>
            <p>
              Lexama Labs exists to change that. We build software that fits
              the way these organizations actually work — without asking them to
              become technology experts first.
            </p>
          </div>
        </div>
      </section>

      {/* Founder note */}
      <section className="py-20 px-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[2px] text-blue-dark mb-4">
              A note from the founder
            </p>
            {/* [FOUNDER_NOTE] — replace the block below with a personal, first-person message */}
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                [FOUNDER_NOTE — Write a short, authentic message here. 2–3 paragraphs
                about why you started Lexama Labs, what you&apos;ve observed
                firsthand, and what you believe. First-person, direct, no
                corporate language.]
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue/10 flex items-center justify-center text-blue font-bold text-sm">
                F
              </div>
              <div>
                <p className="text-gray-900 font-semibold text-sm">
                  [Founder Name]
                </p>
                <p className="text-gray-500 text-xs">
                  Founder & CEO, Lexama Labs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-navy">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-12">
            <Eyebrow>How we work</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-fg mb-4 leading-tight">
              What we believe
            </h2>
            <p className="text-fg-muted text-lg leading-relaxed">
              These aren&apos;t aspirational values. They&apos;re the
              principles behind every product decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: Eye,
                title: "Software should feel obvious",
                description:
                  "If a user needs a manual, something is wrong with the software. We design for the first-time user, every time.",
              },
              {
                icon: Users,
                title: "Serve the operator, not just the admin",
                description:
                  "The person using our software is often a teacher, a coordinator, or an office manager — not an IT professional. We build for them.",
              },
              {
                icon: Layers,
                title: "Build things that last",
                description:
                  "We don't ship fast and fix later. We take time to understand a problem deeply before we write code.",
              },
              {
                icon: Cpu,
                title: "Go deep before going wide",
                description:
                  "One vertical done extremely well is more valuable than five verticals done poorly. We earn the right to expand.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="bg-surface border border-edge rounded-xl p-6 hover:border-edge-hover transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-blue/10 flex items-center justify-center mb-4">
                  <v.icon size={20} className="text-blue" />
                </div>
                <h3 className="text-fg font-semibold mb-2">{v.title}</h3>
                <p className="text-fg-muted text-sm leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-12">
            <Eyebrow light>Team</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              The people building Lexama Labs
            </h2>
            <p className="text-gray-500 text-lg">
              [PLACEHOLDER — team bios and photos will be added here]
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-gray-50 border border-gray-100 rounded-xl p-6"
              >
                <div className="w-14 h-14 rounded-xl bg-blue/8 border border-blue/15 mb-4 flex items-center justify-center">
                  <span className="text-blue text-lg font-bold">?</span>
                </div>
                <p className="text-gray-700 text-sm font-medium mb-1">
                  [Team Member {i}]
                </p>
                <p className="text-gray-500 text-xs">[Role] — [PLACEHOLDER]</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Want to work with us?"
        subtext="We're building software that matters. If that sounds like work you want to do, let's talk."
        primaryCta={{ label: "Get in touch", href: "/contact" }}
        secondaryCta={{ label: "See our products", href: "/products/edhydra" }}
      />
    </>
  );
}
