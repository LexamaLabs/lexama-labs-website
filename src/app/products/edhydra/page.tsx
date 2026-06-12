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
      <section className="bg-navy py-24 md:py-32 px-6 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.025] bg-grid-pattern text-cyan"
        />
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-[0.07] blur-3xl bg-radial-glow text-cyan"
        />

        <div className="relative max-w-4xl mx-auto">
          <div className="mb-5">
            <Link
              href="/"
              className="font-mono text-[11px] tracking-[2px] uppercase text-fg-subtle hover:text-fg-muted transition-colors"
            >
              ← Lexama Labs
            </Link>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
            <span className="font-mono text-[10px] font-semibold tracking-[2px] uppercase text-teal">
              Now available for K–12 schools
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-fg leading-tight tracking-tight mb-4">
            EDHydra
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-6 text-gradient-edhydra">
            Operations software for K–12 schools
          </p>
          <p className="text-fg-muted text-lg max-w-2xl leading-relaxed mb-10">
            One platform to manage your people, collect payments, and
            communicate with families. No more juggling spreadsheets, payment
            apps, and email threads.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan hover:bg-cyan-dark text-white font-medium rounded-md transition-colors text-sm"
            >
              Request a demo
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-edge hover:border-edge-hover text-fg-muted hover:text-fg font-medium rounded-md transition-colors text-sm"
            >
              Join the waitlist
            </Link>
          </div>

          {/* Mock UI frame */}
          <div className="mt-16 rounded-xl border border-edge bg-surface overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-edge bg-navy">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <div className="ml-4 flex-1 bg-edge rounded px-3 py-1">
                <span className="font-mono text-[10px] text-fg-subtle tracking-[1px]">
                  app.edhydra.io — your school
                </span>
              </div>
            </div>
            {/*
              ╔═══════════════════════════════════════════════════════════════╗
              ║  EDHYDRA SCREENSHOT SLOT — swap this block for a real image.   ║
              ║  Hermes will capture the live EDHydra dashboard and drop it    ║
              ║  here. To wire it up:                                          ║
              ║    1. Add the file to /public (e.g. edhydra-dashboard.png)     ║
              ║    2. import Image from "next/image"                           ║
              ║    3. Replace the <div> below with:                            ║
              ║       <Image src="/edhydra-dashboard.png"                      ║
              ║              alt="EDHydra dashboard"                           ║
              ║              width={1280} height={800}                         ║
              ║              className="w-full h-auto" />                      ║
              ╚═══════════════════════════════════════════════════════════════╝
            */}
            <div className="p-6 text-center py-16">
              <p className="font-mono text-[11px] tracking-[2px] uppercase text-fg-subtle">
                Dashboard preview
              </p>
              <p className="font-mono text-[10px] text-edge mt-2 tracking-[1px]">
                Live product screenshots coming soon
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
      <section className="py-20 px-6 bg-navy">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Eyebrow>What EDHydra does</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-fg mb-4 leading-tight">
              Three pillars. One platform.
            </h2>
            <p className="text-fg-muted text-lg leading-relaxed">
              Every school has the same three operational needs. EDHydra covers
              all of them — deeply, not superficially.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
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
                className="bg-surface border border-edge rounded-xl p-6 hover:border-edge-hover transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center mb-5">
                  <pillar.icon size={24} className="text-cyan" />
                </div>
                <h3 className="text-fg font-bold text-lg mb-3">
                  {pillar.title}
                </h3>
                <p className="text-fg-muted text-sm leading-relaxed mb-4">
                  {pillar.description}
                </p>
                <ul className="space-y-2">
                  {pillar.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-xs text-fg-subtle"
                    >
                      <CheckCircle
                        size={13}
                        className="text-teal mt-0.5 shrink-0"
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
                  <div className="w-10 h-10 rounded-full bg-cyan/8 border border-cyan/20 flex items-center justify-center">
                    <item.icon size={18} className="text-cyan" />
                  </div>
                </div>
                <div>
                  <p className="font-mono text-[10px] font-semibold tracking-[2px] uppercase text-teal mb-1">
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

      {/* Architecture & security note */}
      <section className="py-12 px-6 bg-navy border-y border-edge">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-4">
          <ShieldCheck size={22} className="text-teal shrink-0 mt-0.5" />
          <p className="text-fg-muted text-sm leading-relaxed">
            <strong className="text-fg">
              Multi-tenant by design, secure by default.
            </strong>{" "}
            EDHydra is built on Django with django-tenants, giving every school
            its own isolated PostgreSQL schema — your data never lives in the
            same table as another school&apos;s. Records are organized and
            auditable, and access is role-controlled. Built for Puerto Rico
            schools first, and ready for any K–12 organization across the US and
            Latin America.{" "}
            <span className="text-fg-subtle">
              {/* TODO (Carlos): add specific compliance certifications (e.g. FERPA) once formalized. */}
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
          {/* TODO (Carlos): finalize pricing tiers and numbers, then replace the
              descriptions below with real plan details. */}
          <div className="bg-navy rounded-xl p-8 border border-edge text-left mb-6">
            <p className="font-mono text-[10px] tracking-[2px] uppercase text-fg-subtle text-center mb-6">
              Early-access pricing — tailored to your school
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              {[
                {
                  tier: "Starter",
                  desc: "For small schools getting their people and payments online.",
                },
                {
                  tier: "Growth",
                  desc: "For established schools running full operations on EDHydra.",
                },
                {
                  tier: "Enterprise",
                  desc: "For multi-campus schools and networks with custom needs.",
                },
              ].map(({ tier, desc }) => (
                <div
                  key={tier}
                  className="bg-surface border border-edge rounded-lg p-5 hover:border-edge-hover transition-all"
                >
                  <p className="text-fg font-semibold mb-1">{tier}</p>
                  <p className="text-fg-subtle text-xs leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan hover:bg-cyan-dark text-white font-medium rounded-md transition-colors text-sm"
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
        accent="teal"
      />
    </>
  );
}
