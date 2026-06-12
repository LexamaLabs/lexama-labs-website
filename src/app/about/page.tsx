import type { Metadata } from "next";
import { Eye, Cpu, Users, Layers, Bot, Sparkles } from "lucide-react";
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
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I come from math and physics — dual degree from UPR Río Piedras,
                seven-time top placer in Puerto Rico&apos;s Calculus Olympics,
                Blaise Pascal Medal. That background taught me to think from
                first principles: break down any problem to its core and build
                back up from there. Years later, I&apos;m still doing exactly
                that — first as a teacher, then as a quantitative analyst, and
                now as a founder.
              </p>
              <p>
                What I saw over and over was that the organizations doing the
                most important work — schools, clinics, churches, community
                groups — were running on tools never built for them. They&apos;d
                patch together spreadsheets and group chats and just accept
                that this was as good as it gets. I never accepted that.
              </p>
              <p>
                Lexama Labs is my answer. The name comes from my own last name —
                this is personal. I still work as a Senior Quantitative Analyst
                at Popular, building behavioral models across millions of
                transactions, and every evening and weekend I pour that same
                analytical rigor into shipping software that actually fits the
                way these organizations work. Great UX isn&apos;t a luxury for
                them — it&apos;s the difference between software that gets used
                and software that gets abandoned. That conviction is in
                everything we ship.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-blue/10">
                <img
                  src="/images/team/lezama_profile_picture.png"
                  alt="Carlos Lezama"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-gray-900 font-semibold text-sm">
                  Carlos Lezama
                </p>
                <p className="text-gray-500 text-xs">
                  Founder &amp; CEO, Lexama Labs
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
              A solo founder with an AI team that punches far above its
              headcount — human judgment, paired with agents that handle the
              heavy lifting.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                name: "Carlos Lezama",
                role: "Founder & CEO",
                bio: "Senior Quantitative Analyst at Popular and founder of Lexama Labs. MSc in Financial Engineering (4.0 GPA), degree in Math & Physics from UPR. Seven-time Calculus Olympiad winner. He builds software that actually works for schools, clinics, and community organizations — because he's been on their side of the table his whole career.",
                monogram: "CL",
                accent: "human" as const,
              },
              {
                name: "Hermes",
                role: "AI Orchestrator",
                bio: "The one who keeps everything moving — client communication, research, automations, and daily operations. Built to handle the conversations, the schedules, and the small fires before they become big ones. Reliable, adaptable, and always on.",
                icon: Bot,
                accent: "ai" as const,
              },
              {
                name: "Claude",
                role: "AI Engineering Partner",
                bio: "The deep thinker — architecture, complex features, refactoring, and code review at scale. When a problem needs real engineering depth, Claude is the one who takes it apart and builds it back right. Patient, thorough, and relentless about quality.",
                icon: Sparkles,
                accent: "ai" as const,
              },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-gray-50 border border-gray-100 rounded-xl p-6 hover:border-gray-200 transition-colors"
              >
                <div className="w-16 h-16 rounded-full mb-4 overflow-hidden bg-gray-100">
                  <img
                    src={
                      member.name === "Carlos Lezama"
                        ? "/images/team/lezama_profile_picture.png"
                        : member.name === "Hermes"
                        ? "/images/team/hermes_profile_picture.jpg"
                        : "/images/team/claude_profile_picture.png"
                    }
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-900 text-sm font-semibold mb-0.5">
                  {member.name}
                </p>
                <p
                  className={`text-xs font-medium mb-3 ${
                    member.accent === "ai" ? "text-cyan-dark" : "text-blue-dark"
                  }`}
                >
                  {member.role}
                </p>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {member.bio}
                </p>
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
