import {
  Briefcase,
  Cpu,
  HardHat,
  Globe,
  TrendingUp,
  Mic,
  ArrowUpRight,
} from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { useSectionAnimation } from "../hooks/useSectionAnimation";
import { animateCompetencies } from "../animations/sections/competencies";

const competencies = [
  {
    title: "Executive Liaison",
    desc: "Stakeholder management + high-stakes negotiation with C-suite executives.",
    icon: Briefcase,
    cols: "md:col-span-2",
  },
  {
    title: "AI Automation",
    desc: "n8n, Zapier, Custom LLM Orchestration.",
    icon: Cpu,
    cols: "md:col-span-1",
  },
  {
    title: "Industrial Operations",
    desc: "Bridging physical construction with digital oversight.",
    icon: HardHat,
    cols: "md:col-span-1",
  },
  {
    title: "Digital Architecture",
    desc: "Full-stack Web Dev, CMS/CRM, Data Structures.",
    icon: Globe,
    cols: "md:col-span-2",
  },
  {
    title: "Growth Hacking",
    desc: "Algorithm Optimization, Narrative Design + Organic Reach.",
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
  const rootRef = useSectionAnimation<HTMLElement>(animateCompetencies);

  return (
    <section
      ref={rootRef}
      id="competencies"
      className="relative bg-bg-dark py-20 border-t border-white/10 scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <SectionHeader
          title="CORE COMPETENCIES"
          subtitle="System Modules Active"
          right={<>SYS READY</>}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {competencies.map((item, idx) => (
            <div
              key={idx}
              data-anim="competency-card"
              className={`${item.cols} glass-panel p-8 group`}
            >
              <div className="scanline-top" />

              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white/5 border border-white/10 rounded-lg text-accent">
                  <item.icon size={24} />
                </div>
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
