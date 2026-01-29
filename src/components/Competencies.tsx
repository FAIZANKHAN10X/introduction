import {
  Briefcase,
  Cpu,
  HardHat,
  Globe,
  TrendingUp,
  Mic,
  ArrowUpRight,
} from "lucide-react";

const competencies = [
  // ROW 1: 2 + 1
  {
    title: "Executive Liaison",
    desc: "Stakeholder management & high-stakes negotiation with C-suite executives.",
    icon: Briefcase,
    cols: "md:col-span-2",
  },
  {
    title: "AI & Automation",
    desc: "n8n, Zapier, & Custom LLM Orchestration.",
    icon: Cpu,
    cols: "md:col-span-1",
  },

  // ROW 2: 1 + 2
  {
    title: "Industrial Operations",
    desc: "Bridging physical construction with digital oversight.",
    icon: HardHat,
    cols: "md:col-span-1",
  },
  {
    title: "Digital Architecture",
    desc: "Full-stack Web Dev, CMS/CRM, & Data Structures.",
    icon: Globe,
    cols: "md:col-span-2",
  },

  // ROW 3: 2 + 1 (Updated to match Row 1 layout)
  {
    title: "Growth Hacking",
    desc: "Algorithm Optimization, Narrative Design & Organic Reach.",
    icon: TrendingUp,
    cols: "md:col-span-2",
  },
  {
    title: "Fluent English",
    desc: "Clear, neutral accent communication for U.S. teams.",
    icon: Mic,
    cols: "md:col-span-1",
  },
];

export default function Competencies() {
  return (
    <section className="relative bg-bg-dark py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="mb-12 flex items-end justify-between border-b border-white/10 pb-6">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-text-primary">
              CORE_COMPETENCIES
            </h2>
            <p className="mt-2 font-mono text-xs uppercase tracking-widest text-accent/80">
              // System Modules Active
            </p>
          </div>
          <div className="hidden md:block font-mono text-xs text-white/30 tracking-widest">
            [SYS_READY]
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {competencies.map((item, idx) => (
            <div key={idx} className={`${item.cols} glass-panel p-8 group`}>
              <div className="scanline-top" />

              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white/5 border border-white/10 rounded-lg text-accent">
                  <item.icon size={24} />
                </div>
                {/* Static icon, no hover transition */}
                <ArrowUpRight className="text-white/20" size={20} />
              </div>

              <h3 className="font-serif text-2xl text-text-primary mb-3">
                {item.title}
              </h3>
              <p className="font-mono text-sm text-text-primary/60 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
