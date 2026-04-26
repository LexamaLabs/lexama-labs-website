import Link from "next/link";
import {
  ArrowRight,
  Users,
  CreditCard,
  MessageSquare,
  GraduationCap,
  HeartPulse,
  Building2,
  TreePine,
  CheckCircle,
} from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import CTABanner from "@/components/CTABanner";
import TestimonialPlaceholder from "@/components/TestimonialPlaceholder";
import VerticalRoadmapCard from "@/components/VerticalRoadmapCard";
import Eyebrow from "@/components/Eyebrow";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#080D1A] py-24 md:py-32 px-6 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(to right, #3B82F6 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full opacity-[0.08] blur-3xl"
          style={{ background: "radial-gradient(circle, #3B82F6, transparent)" }}
        />
        <div
          aria-hidden="true"
          className="absolute top-0 right-1/4 w-[400px] h-[300px] rounded-full opacity-[0.06] blur-3xl"
          style={{ background: "radial-gradient(circle, #06B6D4, transparent)" }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse" />
            <span className="font-mono text-[10px] font-semibold tracking-[2px] uppercase text-[#22D3EE]">
              Now onboarding K–12 schools — EDHydra
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-[#F1F5F9] leading-tight tracking-tight mb-6">
            We modernize the operations of organizations{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #60A5FA 0%, #22D3EE 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              that keep the world running.
            </span>
          </h1>

          <p className="text-[#94A3B8] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Schools, clinics, nonprofits, and community organizations do
            critical work — and they deserve software that actually fits how
            they operate.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/products/edhydra"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-medium rounded-md transition-colors text-sm"
            >
              See our products
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#1A2D4A] hover:border-[#2A4570] text-[#94A3B8] hover:text-[#F1F5F9] font-medium rounded-md transition-colors text-sm"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </section>

      {/* The problem we solve */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-12">
            <Eyebrow light>The problem</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Most organizations run on tools that were never built for them.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Schools track enrollment on spreadsheets. Clinics chase payments
              over the phone. Nonprofits coordinate volunteers through group
              texts. These organizations do essential work — and they&apos;re
              held back by software that doesn&apos;t understand their reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                stat: "70%+",
                label:
                  "of small organizations still rely on spreadsheets for critical operations",
              },
              {
                stat: "Hours lost",
                label:
                  "every week to manual data entry, paper forms, and disconnected tools",
              },
              {
                stat: "Zero trail",
                label:
                  "no audit history, no oversight, no way to know what happened and when",
              },
            ].map((item) => (
              <div
                key={item.stat}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100"
              >
                <p className="text-2xl font-bold text-gray-900 mb-2">
                  {item.stat}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="py-20 px-6 bg-[#080D1A]">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-12">
            <Eyebrow>Our approach</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-[#F1F5F9] mb-4 leading-tight">
              Purpose-built. Not generic.
            </h2>
            <p className="text-[#94A3B8] text-lg leading-relaxed">
              We don&apos;t sell platforms you configure yourself. We go deep on
              one type of organization at a time — understanding their
              workflows, roles, and needs — and build software that fits from
              day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: CheckCircle,
                title: "Opinionated by design",
                description:
                  "We make the hard decisions so your operators don't have to. Less setup. Less training. Faster value.",
              },
              {
                icon: Users,
                title: "Built for the operator",
                description:
                  "The people using our software aren't IT teams — they're principals, office managers, and coordinators. We build for them.",
              },
              {
                icon: ArrowRight,
                title: "One vertical at a time",
                description:
                  "We prove the model in education first. Then we expand. Each vertical gets the same depth and attention.",
              },
            ].map((item) => (
              <FeatureCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                dark
              />
            ))}
          </div>
        </div>
      </section>

      {/* EDHydra spotlight */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B82F6]/8 border border-[#3B82F6]/20 mb-4">
                <span className="font-mono text-[10px] font-semibold tracking-[2px] uppercase text-[#3B82F6]">
                  Flagship product
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                EDHydra
              </h2>
              <p className="text-gray-500 text-lg mb-6 leading-relaxed">
                Operations software for K–12 schools. Students, payments, and
                communications — in one place, finally.
              </p>
              <Link
                href="/products/edhydra"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-medium rounded-md transition-colors text-sm"
              >
                Learn more about EDHydra
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="flex-1 grid grid-cols-1 gap-3">
              {[
                {
                  icon: Users,
                  title: "People & Relationships",
                  description:
                    "Students, guardians, personnel, and their documents — all in one organized, compliance-ready record system.",
                },
                {
                  icon: CreditCard,
                  title: "Payments",
                  description:
                    "Stripe + PayPal, invoices, recurring charges, and automated reminders. No more collecting cash at the door.",
                },
                {
                  icon: MessageSquare,
                  title: "Communications",
                  description:
                    "Email, SMS, and WhatsApp — plus real-time direct messaging for your team and your families.",
                },
              ].map((item) => (
                <FeatureCard
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Where we're going */}
      <section className="py-20 px-6 bg-[#080D1A]">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-12">
            <Eyebrow>Roadmap</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-[#F1F5F9] mb-4 leading-tight">
              Education is the first vertical. Not the last.
            </h2>
            <p className="text-[#94A3B8] text-lg leading-relaxed">
              We&apos;re building the same model — integrated, purpose-built
              operations software — for every organization type that&apos;s
              been underserved by modern software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <VerticalRoadmapCard
              icon={GraduationCap}
              vertical="K–12 Education"
              description="Student management, payments, and communications for schools and districts."
              status="live"
              href="/products/edhydra"
            />
            <VerticalRoadmapCard
              icon={HeartPulse}
              vertical="Healthcare Clinics"
              description="Patient intake, scheduling, billing, and staff coordination for independent clinics."
              status="coming-soon"
            />
            <VerticalRoadmapCard
              icon={TreePine}
              vertical="Nonprofits"
              description="Donor management, volunteer coordination, program tracking, and reporting."
              status="coming-soon"
            />
            <VerticalRoadmapCard
              icon={Building2}
              vertical="Community Organizations"
              description="Membership, events, communications, and local coordination for community groups."
              status="coming-soon"
            />
          </div>
        </div>
      </section>

      {/* Social proof placeholder */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-mono text-[10px] text-gray-400 tracking-[2px] uppercase">
              [PLACEHOLDER — update once organizations are live]
            </span>
            <p className="text-3xl font-bold text-gray-900 mt-2 mb-2">
              Trusted by organizations doing real work
            </p>
            <p className="text-gray-500">
              Early adopters are replacing spreadsheets and paper with EDHydra.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <TestimonialPlaceholder
              quote="[PLACEHOLDER] Before EDHydra, enrollment took us two weeks of paperwork. Now it's done in an afternoon."
              name="[Name]"
              role="Office Administrator"
              org="[School Name]"
            />
            <TestimonialPlaceholder
              quote="[PLACEHOLDER] We finally have a single place where we can see every student, every payment, every message."
              name="[Name]"
              role="Principal"
              org="[School Name]"
            />
            <TestimonialPlaceholder
              quote="[PLACEHOLDER] Onboarding our school felt like setting up an online store — it was that straightforward."
              name="[Name]"
              role="Director"
              org="[School Name]"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              "X organizations onboarded",
              "X students managed",
              "X in payments processed",
            ].map((stat) => (
              <div
                key={stat}
                className="font-mono text-[10px] tracking-[1.5px] uppercase text-gray-400 bg-gray-50 border border-gray-100 px-4 py-2 rounded-full"
              >
                [PLACEHOLDER] {stat}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to replace the spreadsheets?"
        subtext="See how EDHydra transforms day-to-day operations for schools — and what's coming next."
        primaryCta={{ label: "Request a demo", href: "/contact" }}
        secondaryCta={{ label: "Learn about EDHydra", href: "/products/edhydra" }}
      />
    </>
  );
}
