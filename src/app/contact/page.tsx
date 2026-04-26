import type { Metadata } from "next";
import { Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Eyebrow from "@/components/Eyebrow";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Lexama Labs. Request a demo of EDHydra, join the waitlist, or ask us anything.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#080D1A] py-24 md:py-32 px-6 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-[0.06] blur-3xl"
          style={{ background: "radial-gradient(circle, #3B82F6, transparent)" }}
        />
        <div className="relative max-w-3xl mx-auto">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="text-4xl md:text-5xl font-bold text-[#F1F5F9] leading-tight tracking-tight mb-6">
            Let&apos;s talk.
          </h1>
          <p className="text-[#94A3B8] text-xl leading-relaxed max-w-xl">
            Whether you want to see EDHydra in action, ask about pricing, or
            tell us about the organization you&apos;re trying to modernize —
            we want to hear from you.
          </p>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Left: contact info */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Reach us directly
            </h2>
            <a
              href="mailto:hello@lexama.io"
              className="flex items-center gap-2 text-sm text-[#3B82F6] hover:text-[#2563EB] transition-colors mb-6"
            >
              <Mail size={15} />
              hello@lexama.io
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              We respond to every message within one business day. For demo
              requests, we&apos;ll follow up to schedule a 30-minute
              walkthrough.
            </p>

            <div className="space-y-3">
              {[
                {
                  label: "Request a demo",
                  desc: "See EDHydra working with your school's context",
                },
                {
                  label: "Join the waitlist",
                  desc: "For other verticals — healthcare, nonprofits, and more",
                },
                {
                  label: "General inquiry",
                  desc: "Partnerships, press, or anything else",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border border-gray-100 rounded-lg p-4 bg-gray-50 hover:border-gray-200 transition-colors"
                >
                  <p className="text-gray-900 text-sm font-medium mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-gray-500 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Calendly placeholder */}
            <div className="mt-8 border border-dashed border-gray-200 rounded-xl p-6 text-center">
              <p className="font-mono text-[10px] tracking-[2px] uppercase text-gray-400 font-medium mb-1">
                [PLACEHOLDER — Calendly embed]
              </p>
              <p className="text-gray-400 text-xs">
                Prefer to pick a time directly? Add a scheduling link here.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="md:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
