import type { Metadata } from "next";
import Link from "next/link";
import {
  Users,
  CreditCard,
  MessageSquare,
  ArrowRight,
  FileText,
  DollarSign,
  ShieldCheck,
  Store,
  Database,
  Send,
  CheckCircle,
} from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import CTABanner from "@/components/CTABanner";
import Eyebrow from "@/components/Eyebrow";

export const metadata: Metadata = {
  title: "EDHydra — K–12 School Operations Software",
  description:
    "EDHydra is purpose-built operations software for K–12 schools. Handle student management, payments, and communications in one integrated platform.",
};

export default function EDHydraPage() {
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
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-[0.07] blur-3xl"
          style={{ background: "radial-gradient(circle, #3B82F6, transparent)" }}
        />

        <div className="relative max-w-4xl mx-auto">
          <div className="mb-5">
            <Link
              href="/"
              className="font-mono text-[11px] tracking-[2px] uppercase text-[#64748B] hover:text-[#94A3B8] transition-colors"
            >
              ← Lexama Labs
            </Link>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
            <span className="font-mono text-[10px] font-semibold tracking-[2px] uppercase text-[#22D3EE]">
              Now available for K–12 schools
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-[#F1F5F9] leading-tight tracking-tight mb-4">
            EDHydra
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-6"
            style={{
              background: "linear-gradient(135deg, #60A5FA 0%, #22D3EE 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Operations software for K–12 schools
          </p>
          <p className="text-[#94A3B8] text-lg max-w-2xl leading-relaxed mb-10">
            One platform to manage your people, collect payments, and
            communicate with families. No more juggling spreadsheets, payment
            apps, and email threads.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-medium rounded-md transition-colors text-sm"
            >
              Request a demo
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#1A2D4A] hover:border-[#2A4570] text-[#94A3B8] hover:text-[#F1F5F9] font-medium rounded-md transition-colors text-sm"
            >
              Join the waitlist
            </Link>
          </div>

          {/* Mock UI frame */}
          <div className="mt-16 rounded-xl border border-[#1A2D4A] bg-[#0D1625] overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1A2D4A] bg-[#080D1A]">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <div className="ml-4 flex-1 bg-[#1A2D4A] rounded px-3 py-1">
                <span className="font-mono text-[10px] text-[#64748B] tracking-[1px]">
                  app.edhydra.io — your school
                </span>
              </div>
            </div>
            <div className="p-6 text-center py-16">
              <p className="font-mono text-[11px] tracking-[2px] uppercase text-[#64748B]">
                [PLACEHOLDER — product screenshot or UI mockup]
              </p>
              <p className="font-mono text-[10px] text-[#1A2D4A] mt-2 tracking-[1px]">
                Dashboard preview coming soon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem statement */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-12">
            <Eyebrow light>What schools deal with today</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              The way schools run operations hasn&apos;t changed in decades.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Most schools still rely on a patchwork of tools that don&apos;t
              talk to each other — and a lot of paper.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: FileText,
                title: "Paper enrollment forms",
                description:
                  "Families fill out forms by hand. Staff re-enter data into spreadsheets. Information gets lost or duplicated.",
              },
              {
                icon: DollarSign,
                title: "Cash payments and IOUs",
                description:
                  "Tuition collected in envelopes. No payment history. No automated reminders. No receipts.",
              },
              {
                icon: Send,
                title: "No unified communication channel",
                description:
                  "Mass emails, group texts, printed flyers, and phone trees — with no way to know who actually got the message.",
              },
              {
                icon: Database,
                title: "No audit trail",
                description:
                  "When something goes wrong, there's no record of what happened, who changed what, or when.",
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
      </section>

      {/* Three pillars */}
      <section className="py-20 px-6 bg-[#080D1A]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Eyebrow>What EDHydra does</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-[#F1F5F9] mb-4 leading-tight">
              Three pillars. One platform.
            </h2>
            <p className="text-[#94A3B8] text-lg leading-relaxed">
              Every school has the same three operational needs. EDHydra covers
              all of them — deeply, not superficially.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                accentColor: "#3B82F6",
                title: "People & Relationships",
                description:
                  "Every person in your organization — students, guardians, personnel — organized, documented, and always accessible.",
                features: [
                  "Student & guardian profiles",
                  "Document storage & compliance",
                  "Staff and role management",
                  "Enrollment tracking",
                  "Relationship linking (guardian ↔ student)",
                ],
              },
              {
                icon: CreditCard,
                accentColor: "#06B6D4",
                title: "Payments",
                description:
                  "Collect tuition, fees, and charges online. Automate reminders. Keep a full history of every transaction.",
                features: [
                  "Stripe + PayPal support",
                  "Invoices and receipts",
                  "Recurring charges",
                  "Automated payment reminders",
                  "Full payment history",
                ],
              },
              {
                icon: MessageSquare,
                accentColor: "#60A5FA",
                title: "Communications",
                description:
                  "Reach families where they are. Send announcements, respond to messages, and know who actually read what.",
                features: [
                  "Email broadcasts",
                  "SMS notifications",
                  "WhatsApp integration",
                  "Real-time direct messaging",
                  "Read receipts & delivery tracking",
                ],
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="bg-[#0D1625] border border-[#1A2D4A] rounded-xl p-6 hover:border-[#2A4570] transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center mb-5">
                  <pillar.icon size={24} className="text-[#3B82F6]" />
                </div>
                <h3 className="text-[#F1F5F9] font-bold text-lg mb-3">
                  {pillar.title}
                </h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">
                  {pillar.description}
                </p>
                <ul className="space-y-2">
                  {pillar.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-xs text-[#64748B]"
                    >
                      <CheckCircle
                        size={13}
                        className="text-[#22D3EE] mt-0.5 shrink-0"
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding simplicity */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-12">
            <Eyebrow light>Simplicity first</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Onboarding a school feels like creating a store.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We made onboarding as simple as setting up a Shopify store. If
              you can fill out a form, you can have your school live on EDHydra
              in under an hour.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                icon: Store,
                title: "Create your organization",
                description:
                  "Name, logo, location, and basic settings. Your school is live in minutes, not days.",
              },
              {
                step: "02",
                icon: Users,
                title: "Import your people",
                description:
                  "Upload your existing roster via CSV or add students and guardians one by one. Relationships are linked automatically.",
              },
              {
                step: "03",
                icon: CreditCard,
                title: "Start collecting & communicating",
                description:
                  "Create your first invoice, send your first announcement, and go. Everything is connected from the start.",
              },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4">
                <div className="shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#3B82F6]/8 border border-[#3B82F6]/20 flex items-center justify-center">
                    <item.icon size={18} className="text-[#3B82F6]" />
                  </div>
                </div>
                <div>
                  <p className="font-mono text-[10px] font-semibold tracking-[2px] uppercase text-[#22D3EE] mb-1">
                    Step {item.step}
                  </p>
                  <h3 className="text-gray-900 font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security note */}
      <section className="py-12 px-6 bg-[#080D1A] border-y border-[#1A2D4A]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-4">
          <ShieldCheck size={22} className="text-[#22D3EE] shrink-0" />
          <p className="text-[#94A3B8] text-sm leading-relaxed">
            <strong className="text-[#F1F5F9]">Built with compliance in mind.</strong>{" "}
            EDHydra is designed to help schools maintain organized, auditable
            records. Student data is stored securely and access is
            role-controlled.{" "}
            <span className="text-[#64748B]">
              [PLACEHOLDER — add specific compliance certifications when available]
            </span>
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <Eyebrow light className="justify-center flex">Pricing</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple pricing. No surprises.
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            We&apos;re in early access. Reach out to get pricing for your
            school.
          </p>
          <div className="bg-[#080D1A] rounded-xl p-8 border border-[#1A2D4A] text-left mb-6">
            <p className="font-mono text-[10px] tracking-[2px] uppercase text-[#64748B] text-center mb-6">
              [PLACEHOLDER — pricing tiers will be added here]
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              {["Starter", "Growth", "Enterprise"].map((tier) => (
                <div
                  key={tier}
                  className="bg-[#0D1625] border border-[#1A2D4A] rounded-lg p-5 hover:border-[#2A4570] transition-all"
                >
                  <p className="text-[#F1F5F9] font-semibold mb-1">{tier}</p>
                  <p className="text-[#64748B] text-xs">
                    [PLACEHOLDER — pricing details]
                  </p>
                </div>
              ))}
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-medium rounded-md transition-colors text-sm"
          >
            Contact us for pricing
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <CTABanner
        heading="See EDHydra in action."
        subtext="Schedule a 30-minute walkthrough and see what your school could look like on day one."
        primaryCta={{ label: "Schedule a demo", href: "/contact" }}
        secondaryCta={{ label: "Join the waitlist", href: "/contact" }}
      />
    </>
  );
}
