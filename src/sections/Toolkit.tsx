import { Cpu, Database, Globe, Terminal, Zap } from "lucide-react";
import SectionShell from "../components/SectionShell";

const tools = [
  {
    name: "AUTOMATION",
    icon: Zap,
    status: "OPERATIONAL",
    items: ["n8n", "Make.com", "Zapier", "Webhooks"],
  },
  {
    name: "AI MODELS",
    icon: Cpu,
    status: "ACTIVE",
    items: ["OpenAI API", "Anthropic", "Pinecone", "LangChain"],
  },
  {
    name: "INFRASTRUCTURE",
    icon: Database,
    status: "STABLE",
    items: ["PostgreSQL", "Salesforce", "React", "Next.js"],
  },
  {
    name: "GROWTH",
    icon: Globe,
    status: "OPTIMIZING",
    items: ["Meta Ads", "GA4", "SEO", "Copywriting"],
  },
];

export default function Toolkit() {
  return (
    <SectionShell id="toolkit">
      <div className="w-full">
        <div className="mb-12 border-b border-white10 pb-6">
          <div className="inline-flex items-center gap-3 border-l border-accent pl-4">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="font-mono text-xs tracking-0.22em uppercase text-accent">
              Technical Arsenal
            </span>
          </div>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl text-text-primary">
            TECHNICAL ARSENAL
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {tools.map((tool, idx) => (
            <article key={idx} className="glass-panel p-6">
              <div className="scanline-top" />

              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white5 border border-white10 rounded text-accent">
                    <tool.icon size={20} />
                  </div>
                  <h3 className="font-mono text-sm tracking-widest text-text-primary uppercase">
                    {tool.name}
                  </h3>
                </div>

                <span className="text-10px font-mono border border-accent30 bg-accent10 text-accent px-2 py-1 rounded uppercase tracking-widest">
                  {tool.status}
                </span>
              </div>

              <div>
                <h4 className="flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-text-primary mb-4">
                  <span className="h-2 w-2 bg-white20 rounded-sm" />
                  Core Protocols
                </h4>

                <ul className="space-y-3">
                  {tool.items.map((item, i) => (
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
            </article>
          ))}
        </div>

        <div className="mt-8 text-white25 font-mono text-xs">
          <Terminal className="inline-block w-4 h-4 mr-2 text-accent" />
          Toolkit modules loaded.
        </div>
      </div>
    </SectionShell>
  );
}
