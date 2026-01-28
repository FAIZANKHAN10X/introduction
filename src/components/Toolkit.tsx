import React from "react";
import { Cpu, Database, Globe, Zap, Terminal } from "lucide-react";

type Tone = "gold" | "sand" | "ash";

const toolCategories: Array<{
  id: string;
  name: string;
  icon: React.ReactNode;
  status: string;
  tone: Tone;
  items: string[];
}> = [
  {
    id: "01",
    name: "AUTOMATION_PROTOCOLS",
    icon: <Zap className="h-5 w-5" />,
    status: "OPERATIONAL",
    tone: "gold",
    items: [
      "n8n (Self-hosted)",
      "Make.com Integration",
      "Zapier Logic",
      "Webhook Orchestration",
    ],
  },
  {
    id: "02",
    name: "NEURAL_NETWORKS",
    icon: <Cpu className="h-5 w-5" />,
    status: "ACTIVE_LEARNING",
    tone: "sand",
    items: [
      "OpenAI API Standards",
      "Claude / Anthropic",
      "Pinecone Vector DB",
      "LangChain Agents",
    ],
  },
  {
    id: "03",
    name: "DIGITAL_INFRASTRUCTURE",
    icon: <Database className="h-5 w-5" />,
    status: "STABLE",
    tone: "ash",
    items: [
      "Webflow / WordPress",
      "Salesforce CRM",
      "PostgreSQL / SQL",
      "Custom React Dashboards",
    ],
  },
  {
    id: "04",
    name: "GROWTH_ALGORITHMS",
    icon: <Globe className="h-5 w-5" />,
    status: "OPTIMIZING",
    tone: "sand",
    items: [
      "Meta Ads Manager",
      "Google Analytics 4",
      "SEO Strategy",
      "Narrative Design",
    ],
  },
];

function toneStyles(tone: Tone) {
  switch (tone) {
    case "gold":
      return {
        fg: "#a37541",
        badgeBg: "rgba(163,117,65,0.10)",
        badgeBorder: "rgba(163,117,65,0.25)",
      };
    case "sand":
      return {
        fg: "#e2c9a2",
        badgeBg: "rgba(226,201,162,0.08)",
        badgeBorder: "rgba(226,201,162,0.18)",
      };
    default:
      return {
        fg: "rgba(226,201,162,0.70)",
        badgeBg: "rgba(255,255,255,0.04)",
        badgeBorder: "rgba(255,255,255,0.12)",
      };
  }
}

export default function Toolkit() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#0b0b07] py-20 sm:py-24">
      {/* Ambient overlays */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            linear-gradient(to bottom, rgba(11,11,7,0.75) 0%, rgba(11,11,7,0.15) 45%, rgba(11,11,7,0.75) 100%),
            radial-gradient(ellipse at center, rgba(11,11,7,0) 0%, rgba(11,11,7,0.35) 65%, rgba(11,11,7,0.92) 100%)
          `,
        }}
      />

      {/* Subtle grid (static) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(226,201,162,0.35) 0.5px, transparent 0.5px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Grain overlay (static) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />

      <div className="mx-auto max-w-450 px-6 md:px-12 lg:px-24 relative z-10">
        {/* Header */}
        <div className="mb-10 sm:mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-white/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-3 border-l border-[#a37541] pl-4 py-1">
              <span className="relative flex h-2 w-2">
                {/* removed animate-ping */}
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#a37541]" />
              </span>
              <span className="font-mono text-[11px] sm:text-xs tracking-[0.22em] uppercase text-[#a37541]">
                // Technical_Arsenal
              </span>
            </div>

            <h2 className="mt-5 font-serif text-3xl md:text-4xl tracking-tight text-[#e2c9a2]">
              TECHNICAL_ARSENAL
            </h2>

            <div className="mt-2 flex items-center gap-2 font-mono text-xs tracking-[0.22em] uppercase text-[#e2c9a2]/50">
              {/* removed animate-pulse */}
              <span className="h-2 w-2 rounded-full bg-[#a37541]" />
              System Status: Optimal
            </div>
          </div>

          <div className="font-mono text-xs leading-relaxed tracking-[0.22em] uppercase text-white/30 md:text-right">
            <div>// UNFAIR_ADVANTAGE_LOADED</div>
            <div>// V.2.0.25</div>
          </div>
        </div>

        {/* Rack grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {toolCategories.map((cat) => {
            const t = toneStyles(cat.tone);

            return (
              <article
                key={cat.id}
                className="
                  relative overflow-hidden
                  border border-white/10 bg-[#0b0b07]/70
                  shadow-2xl
                "
              >
                {/* Scan line (static) */}
                <div className="pointer-events-none absolute top-0 left-0 h-px w-full bg-linear-to-r from-transparent via-[#a37541] to-transparent opacity-50" />

                {/* Card vignette */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, rgba(11,11,7,0) 0%, rgba(11,11,7,0.35) 65%, rgba(11,11,7,0.85) 100%)",
                  }}
                />

                {/* Corner accents */}
                <div className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r border-t border-white/20" />
                <div className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b border-l border-white/20" />

                <div className="relative z-10 p-5 sm:p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0 flex items-start gap-3">
                      <div
                        className="rounded-lg border border-white/10 bg-white/5 p-2"
                        style={{ color: t.fg }}
                      >
                        {cat.icon}
                      </div>

                      <div className="min-w-0">
                        <h3 className="truncate font-mono text-xs sm:text-sm uppercase tracking-[0.18em] text-[#e2c9a2]">
                          {cat.name}
                        </h3>
                        <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.22em] text-white/25">
                          MOD_ID: {cat.id}
                        </span>
                      </div>
                    </div>

                    <div
                      className="shrink-0 rounded border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.22em]"
                      style={{
                        color: t.fg,
                        backgroundColor: t.badgeBg,
                        borderColor: t.badgeBorder,
                      }}
                    >
                      {cat.status}
                    </div>
                  </div>

                  {/* Chips (static: removed hover transitions) */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="
                          inline-flex items-center
                          rounded-sm
                          border border-white/10 bg-white/5
                          px-3 py-2
                          font-mono text-[11px] sm:text-xs
                          text-[#e2c9a2]/60
                        "
                      >
                        <Terminal className="mr-2 h-3 w-3 opacity-60" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom tech line (static, always visible lightly) */}
                <div
                  className="pointer-events-none absolute bottom-0 left-0 h-0.5 w-full opacity-50"
                  style={{
                    background:
                      "linear-gradient(to right, transparent, rgba(163,117,65,0.55), transparent)",
                  }}
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
