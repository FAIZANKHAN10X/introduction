import { Terminal } from "lucide-react";

import SectionShell from "../components/SectionShell";
import { useSectionAnimation } from "../hooks/useSectionAnimation";
import { animateSummary } from "../animations/sections/summary";

export default function Summary() {
  const rootRef = useSectionAnimation<HTMLElement>(animateSummary);

  const clients = [
    "Teva Pharmaceuticals",
    "Jubilant Life Sciences",
    "Radico Khaitan",
  ];

  const protocols = [
    "Multi-Million Dollar Billing Cycle Mgmt",
    "Autonomous AI Workflow Architecture",
    "Advanced Social Algorithm Optimization",
  ];

  return (
    <SectionShell id="summary">
      <section ref={rootRef} className="w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div data-animsummary-left className="space-y-8">
            <div className="inline-flex items-center gap-3 border-l border-accent pl-4">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="font-mono text-xs tracking-0.22em uppercase text-accent">
                Executive Summary
              </span>
            </div>

            <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-text-primary leading-[1.1] tracking-tight">
              <span className="block">I build</span>
              <span className="block w-fit italic text-transparent bg-clip-text bg-gradient-to-r from-6f481e to-text-primary pb-2 pr-2">
                unfair advantages
              </span>
              <span className="block">through autonomous systems.</span>
            </h3>

            <p className="font-mono text-base md:text-lg text-text-primary70 leading-relaxed max-w-xl">
              I am an AI automation consultant based in UAE with experience
              designing frameworks and cutting-edge AI. I don&apos;t just
              optimize workflows—I build enterprise AI workflows, n8n automation
              systems, industrial reporting bots, and scalable AI
              infrastructure. My work focuses on reducing manual labor,
              increasing operational efficiency, and building production-ready
              AI systems for real-world businesses.
            </p>
          </div>

          <div data-animsummary-card className="glass-panel p-8">
            <div className="scanline-top" />

            <div className="space-y-10">
              <div>
                <h4 className="flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-text-primary mb-4">
                  <span className="h-2 w-2 bg-accent rounded-sm" />
                  Trusted By Industry Giants
                </h4>

                <div className="flex flex-wrap gap-2">
                  {clients.map((client) => (
                    <span
                      key={client}
                      className="border border-white10 bg-white5 px-3 py-1 font-mono text-xs text-text-primary75"
                    >
                      {client}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-text-primary mb-4">
                  <span className="h-2 w-2 bg-white20 rounded-sm" />
                  Core Protocols
                </h4>

                <ul className="space-y-3">
                  {protocols.map((item, i) => (
                    <li
                      key={item}
                      className="flex gap-4 font-mono text-sm text-text-primary65"
                    >
                      <span className="text-accent70">{i + 1}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-between mt-6 pt-4 border-t border-white10 font-mono text-10px uppercase tracking-widest">
                <span className="text-white30">Live Telemetry</span>
                <span className="text-accent70">v2.0</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionShell>
  );
}
