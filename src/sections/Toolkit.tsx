import { Zap, Cpu, Database, Globe, Terminal } from "lucide-react";

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
    <section
      id="toolkit"
      className="relative bg-bg-dark py-20 border-y border-white/10 scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="mb-12 border-b border-white/10 pb-6">
          <div className="inline-flex items-center gap-3 border-l border-accent pl-4">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="font-mono text-xs tracking-[0.22em] uppercase text-accent">
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
                  <div className="p-2 bg-white/5 border border-white/10 rounded text-accent">
                    <tool.icon size={20} />
                  </div>
                  <h3 className="font-mono text-sm tracking-widest text-text-primary uppercase">
                    {tool.name}
                  </h3>
                </div>

                <span className="text-[10px] font-mono border border-accent/30 bg-accent/10 text-accent px-2 py-1 rounded uppercase tracking-widest">
                  {tool.status}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {tool.items.map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-sm font-mono text-xs text-text-primary/70"
                  >
                    <Terminal size={12} className="opacity-50" />
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
