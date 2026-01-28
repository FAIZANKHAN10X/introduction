import React from "react";
import {
  Briefcase,
  Cpu,
  HardHat,
  Globe,
  TrendingUp,
  ArrowUpRight,
  Mic,
} from "lucide-react";

const competencies = [
  {
    title: "Executive Liaison",
    desc: "Stakeholder management & high-stakes negotiation with C-suite executives.",
    icon: <Briefcase className="w-6 h-6" />,
    cols: "md:col-span-2",
    accent: "#a37541",
  },
  {
    title: "AI & Automation",
    desc: "n8n, Zapier, & Custom LLM Orchestration.",
    icon: <Cpu className="w-6 h-6" />,
    cols: "md:col-span-1",
    accent: "#a37541",
  },
  {
    title: "Industrial Operations",
    desc: "Bridging physical construction with digital oversight.",
    icon: <HardHat className="w-6 h-6" />,
    cols: "md:col-span-1",
    accent: "#a37541",
  },
  {
    title: "Digital Architecture",
    desc: "Full-stack Web Dev, CMS/CRM, & Data Structures.",
    icon: <Globe className="w-6 h-6" />,
    cols: "md:col-span-2",
    accent: "#a37541",
  },
  {
    title: "Growth Hacking",
    desc: "Algorithm Optimization & Narrative Design.",
    icon: <TrendingUp className="w-6 h-6" />,
    cols: "md:col-span-3",
    accent: "#a37541",
  },
  {
    title: "Fluent in American English",
    desc: "Clear, neutral accent communication for U.S. teams, calls, and demos.",
    icon: <Mic className="w-6 h-6" />,
    cols: "md:col-span-1",
    accent: "#a37541",
  },
];

function CompetencyCard({
  title,
  desc,
  icon,
  cols,
  accent,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
  cols: string;
  accent: string;
}) {
  return (
    <div
      className={[
        cols,
        "relative overflow-hidden",
        "border border-white/10 bg-[#0b0b07]/70", // removed backdrop-blur-md
        "p-7 sm:p-8 shadow-2xl",
      ].join(" ")}
    >
      {/* Scan line (static) */}
      <div
        className="pointer-events-none absolute top-0 left-0 h-px w-full opacity-50"
        style={{
          background: `linear-gradient(to right, transparent, ${accent}, transparent)`,
        }}
      />

      {/* Inner vignette (static) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(11,11,7,0) 0%, rgba(11,11,7,0.35) 65%, rgba(11,11,7,0.85) 100%)",
        }}
      />

      {/* Removed hover glow wash (it used transition-opacity + group-hover) */}

      {/* Icon / action (static) */}
      <div className="relative z-10 mb-8 flex items-start justify-between">
        <div
          className="rounded-lg border border-white/10 bg-white/5 p-3"
          style={{ color: accent }}
        >
          {icon}
        </div>
        {/* removed transition-colors + group-hover */}
        <ArrowUpRight className="h-5 w-5 text-white/20" />
      </div>

      {/* Text (static) */}
      <div className="relative z-10">
        {/* removed transition-transform + group-hover:translate-x-1 */}
        <h3 className="mb-3 font-serif text-2xl leading-tight text-[#e2c9a2]">
          {title}
        </h3>

        {/* removed transition-colors + group-hover text change */}
        <p className="max-w-sm font-mono text-sm leading-relaxed text-[#e2c9a2]/65">
          {desc}
        </p>
      </div>

      {/* Bottom tech line (static) */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-0.5 w-full opacity-50"
        style={{
          background: `linear-gradient(to right, transparent, ${accent}80, transparent)`,
        }}
      />
    </div>
  );
}

export default function Competencies() {
  return (
    <section
      id="competencies"
      className="relative overflow-hidden bg-[#0b0b07] py-20 sm:py-24 border-t border-white/10"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            linear-gradient(to bottom, rgba(11,11,7,0.75) 0%, rgba(11,11,7,0.15) 45%, rgba(11,11,7,0.75) 100%),
            radial-gradient(ellipse at center, rgba(11,11,7,0) 0%, rgba(11,11,7,0.35) 65%, rgba(11,11,7,0.92) 100%)
          `,
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />

      <div className="mx-auto max-w-450 px-6 md:px-12 lg:px-24">
        <div className="mb-10 sm:mb-16 flex items-end justify-between border-b border-white/10 pb-6">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-[#e2c9a2]">
              CORE_COMPETENCIES
            </h2>
            <p className="mt-2 font-mono text-[11px] tracking-[0.22em] uppercase text-[#a37541]/80">
              // System Modules Active
            </p>
          </div>

          <div className="hidden md:flex font-mono text-xs text-white/30 tracking-[0.2em] uppercase">
            [SYS_READY]
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {competencies.map((item) => (
            <CompetencyCard
              key={item.title}
              title={item.title}
              desc={item.desc}
              icon={item.icon}
              cols={item.cols}
              accent={item.accent}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
