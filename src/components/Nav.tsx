"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LogoIcon } from "./LogoMark";

const links = [
  { href: "/products/edhydra", label: "EDHydra" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#080D1A]/95 backdrop-blur-sm border-b border-[#1A2D4A]">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <LogoIcon size={28} />
          <span className="text-[#F1F5F9] font-semibold text-base tracking-tight">
            Lexama Labs
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-[#64748B] hover:text-[#F1F5F9] transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-sm px-4 py-2 rounded-md bg-[#3B82F6] hover:bg-[#2563EB] text-white font-medium transition-colors"
          >
            Get in touch
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#64748B] hover:text-[#F1F5F9]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#080D1A] border-b border-[#1A2D4A] px-6 pb-4 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-[#64748B] hover:text-[#F1F5F9] transition-colors py-2.5 border-b border-[#1A2D4A] last:border-0"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="text-sm px-4 py-2.5 rounded-md bg-[#3B82F6] hover:bg-[#2563EB] text-white font-medium transition-colors text-center mt-2"
          >
            Get in touch
          </Link>
        </div>
      )}
    </header>
  );
}
