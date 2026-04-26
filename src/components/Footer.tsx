import Link from "next/link";
import { GitFork, Link2, Mail } from "lucide-react";
import { LogoIcon } from "./LogoMark";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products/edhydra", label: "EDHydra" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#080D1A] border-t border-[#1A2D4A]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-3">
              <LogoIcon size={26} />
              <span className="text-[#F1F5F9] font-semibold text-sm">
                Lexama Labs
              </span>
            </Link>
            <p className="text-[#64748B] text-sm leading-relaxed max-w-xs">
              We modernize the operations of organizations that keep the world
              running.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[2px] text-[#64748B] mb-3">
              Navigation
            </p>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-[#64748B] hover:text-[#F1F5F9] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[2px] text-[#64748B] mb-3">
              Get in touch
            </p>
            <a
              href="mailto:hello@lexama.io"
              className="flex items-center gap-2 text-sm text-[#64748B] hover:text-[#F1F5F9] transition-colors mb-4"
            >
              <Mail size={14} />
              hello@lexama.io
            </a>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn [PLACEHOLDER — update href]"
                className="text-[#64748B] hover:text-[#F1F5F9] transition-colors"
              >
                <Link2 size={17} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub [PLACEHOLDER — update href]"
                className="text-[#64748B] hover:text-[#F1F5F9] transition-colors"
              >
                <GitFork size={17} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1A2D4A] pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-mono text-[10px] text-[#64748B] tracking-[1px]">
            © {new Date().getFullYear()} Lexama Labs. All rights reserved.
          </p>
          <p className="font-mono text-[10px] text-[#64748B] tracking-[1px]">
            Built with purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}
