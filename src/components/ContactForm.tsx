"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // [PLACEHOLDER — wire up to your form handler (Formspree, Resend, etc.)]
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-14 h-14 rounded-full bg-[#3B82F6]/10 flex items-center justify-center mb-4">
          <CheckCircle size={28} className="text-[#3B82F6]" />
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Message received.
        </h2>
        <p className="text-gray-500 text-sm max-w-sm">
          We&apos;ll get back to you within one business day. If you&apos;re
          requesting a demo, we&apos;ll reach out to schedule a time.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            Name <span className="text-red-400">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your full name"
            className="w-full px-4 py-2.5 rounded-md border border-gray-200 bg-white text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/30 focus:border-[#3B82F6] transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            Email <span className="text-red-400">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@organization.com"
            className="w-full px-4 py-2.5 rounded-md border border-gray-200 bg-white text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/30 focus:border-[#3B82F6] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="org-type"
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            Organization type
          </label>
          <select
            id="org-type"
            name="org-type"
            className="w-full px-4 py-2.5 rounded-md border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/30 focus:border-[#3B82F6] transition-colors"
          >
            <option value="">Select one</option>
            <option value="k12-school">K–12 School</option>
            <option value="healthcare">Healthcare Clinic</option>
            <option value="nonprofit">Nonprofit</option>
            <option value="community-org">Community Organization</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="role"
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            Your role
          </label>
          <input
            id="role"
            name="role"
            type="text"
            placeholder="e.g. Principal, Administrator"
            className="w-full px-4 py-2.5 rounded-md border border-gray-200 bg-white text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/30 focus:border-[#3B82F6] transition-colors"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="reason"
          className="block text-sm font-medium text-gray-700 mb-1.5"
        >
          What can we help with?
        </label>
        <select
          id="reason"
          name="reason"
          className="w-full px-4 py-2.5 rounded-md border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/30 focus:border-[#3B82F6] transition-colors"
        >
          <option value="">Select one</option>
          <option value="demo">Request a demo</option>
          <option value="waitlist">Join the waitlist</option>
          <option value="pricing">Pricing inquiry</option>
          <option value="partnership">Partnership</option>
          <option value="other">General inquiry</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1.5"
        >
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us about your organization and what you're trying to solve..."
          className="w-full px-4 py-2.5 rounded-md border border-gray-200 bg-white text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/30 focus:border-[#3B82F6] transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center gap-2 px-6 py-3 bg-[#3B82F6] hover:bg-[#2563EB] disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium rounded-md transition-colors text-sm"
      >
        {loading ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send message
            <Send size={15} />
          </>
        )}
      </button>

      <p className="text-xs text-gray-400">
        [PLACEHOLDER — add privacy policy link and form handler before going live]
      </p>
    </form>
  );
}
