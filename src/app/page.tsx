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
import VerticalRoadmapCard from "@/components/VerticalRoadmapCard";
import Eyebrow from "@/components/Eyebrow";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-24 md:py-32 px-6 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.025] bg-grid-pattern text-blue"
        />
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full opacity-[0.08] blur-3xl bg-radial-glow text-blue"
        />
        <div
          aria-hidden="true"
          className="absolute top-0 right-1/4 w-[400px] h-[300px] rounded-full opacity-[0.06] blur-3xl bg-radial-glow text-cyan"
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue/10 border border-blue/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
            <span className="font-mono text-[10px] font-semibold tracking-[2px] uppercase text-teal">
              Now onboarding K–12 schools — EDHydra
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-fg leading-tight tracking-tight mb-6">
            We modernize the operations of organizations{" "}
            <span className="text-gradient-brand">
              that keep the world running.
            </span>
          </h1>

          <p className="text-fg-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Schools, clinics, nonprofits, and community organizations do
            critical work — and they deserve software that actually fits how
            they operate.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/products/edhydra"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue hover:bg-blue-dark text-white font-medium rounded-md transition-colors text-sm"
            >
              See our products
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-edge hover:border-edge-hover text-fg-muted hover:text-fg font-medium rounded-md transition-colors text-sm"
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
      <section className="py-20 px-6 bg-navy">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-12">
            <Eyebrow>Our approach</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-fg mb-4 leading-tight">
              Purpose-built. Not generic.
            </h2>
            <p className="text-fg-muted text-lg leading-relaxed">
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue/8 border border-blue/20 mb-4">
                <span className="font-mono text-[10px] font-semibold tracking-[2px] uppercase text-blue">
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
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue hover:bg-blue-dark text-white font-medium rounded-md transition-colors text-sm"
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
      <section className="py-20 px-6 bg-navy">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-12">
            <Eyebrow>Roadmap</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-fg mb-4 leading-tight">
              Education is the first vertical. Not the last.
            </h2>
            <p className="text-fg-muted text-lg leading-relaxed">
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

      {/* Where we started */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-12">
            <Eyebrow light>Where we started</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Built in Puerto Rico. For organizations everywhere.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Lexama Labs began in Puerto Rico, working hands-on with the
              schools, churches, and clinics in our own community. That&apos;s
              where we learned what these organizations actually need — and
              we&apos;re bringing it to operators across the US and Latin
              America.
            </p>
            <p className="text-gray-400 text-sm mt-3 italic">
              Servimos a organizaciones en Estados Unidos y Latinoamérica.
            </p>
          </div>

          {/*
            EARLY TRACTION — honest, real proof points (no fabricated testimonials).
            TODO (Carlos): once schools are live and willing to be named, add real
            quotes here using the <TestimonialPlaceholder /> component, e.g.:
              <TestimonialPlaceholder quote="…" name="…" role="…" org="…" />
          */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                stat: "EDHydra",
                label:
                  "Our flagship platform is live and onboarding its first K–12 schools right now.",
              },
              {
                stat: "Church tech",
                label:
                  "We built an ATH Móvil → Planning Center Giving integration for Iglesia Cristiana Casa de Bendición.",
              },
              {
                stat: "US + LATAM",
                label:
                  "Bilingual by default — we serve operators in English and Spanish across both markets.",
              },
            ].map((item) => (
              <div
                key={item.stat}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100"
              >
                <p className="text-lg font-bold text-gray-900 mb-2">
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

      <CTABanner
        heading="Ready to replace the spreadsheets?"
        subtext="See how EDHydra transforms day-to-day operations for schools — and what's coming next."
        primaryCta={{ label: "Request a demo", href: "/contact" }}
        secondaryCta={{ label: "Learn about EDHydra", href: "/products/edhydra" }}
      />
    </>
  );
}
