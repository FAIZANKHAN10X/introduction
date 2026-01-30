import { Award, ShieldCheck, Terminal } from "lucide-react";

const certifications = [
  {
    title: "AI Workflow Design",
    issuer: "n8n & OpenAI Docs",
    type: "Technical Proficiency",
    id: "CERT_01",
  },
  {
    title: "Full-Stack Architecture",
    issuer: "Next.js / React Patterns",
    type: "Systems Engineering",
    id: "CERT_02",
  },
  {
    title: "Industrial Ops Mgmt",
    issuer: "Field Operations (7 Yrs)",
    type: "Practical MBA Equiv.",
    id: "EXP_L7",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden border-t border-white/10 bg-[#0b0b07] py-20 sm:py-24 scroll-mt-28"
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
      <div className="pointer-events-none absolute left-30 top-30 h-95 w-95 rounded-full bg-[#a37541]/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 border-l border-[#a37541] pl-4 py-1">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#a37541]" />
              </span>
              <span className="font-mono text-[11px] sm:text-xs tracking-[0.22em] uppercase text-[#a37541]">
                // Knowledge_Base
              </span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-[#e2c9a2]">
              KNOWLEDGE_BASE
            </h2>

            <p className="max-w-xl font-mono text-sm sm:text-base leading-relaxed text-[#e2c9a2]/60">
              Traditional academia prioritizes theory. My education is built on{" "}
              <span className="text-[#e2c9a2]">live fire exercises</span>
              —managing million-dollar billing cycles and deploying production
              AI systems.
            </p>

            <div className="inline-flex items-center gap-2 rounded border border-[#a37541]/20 bg-[#a37541]/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[#a37541]">
              <ShieldCheck className="h-4 w-4" />
              <span>CLEARED_FOR_DEPLOYMENT</span>
            </div>

            <div className="hidden lg:block">
              <div className="mt-8 h-px w-full bg-linear-to-r from-transparent via-[#a37541]/40 to-transparent opacity-60" />
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-white/25">
                Verification files indexed below.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden border border-white/10 bg-[#0b0b07]/70 shadow-2xl">
              <div className="pointer-events-none absolute top-0 left-0 h-px w-full bg-linear-to-r from-transparent via-[#a37541] to-transparent opacity-50" />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(11,11,7,0) 0%, rgba(11,11,7,0.35) 65%, rgba(11,11,7,0.85) 100%)",
                }}
              />

              <div className="relative z-10 grid grid-cols-[1fr_auto] md:grid-cols-[1.4fr_1fr_auto] gap-3 px-5 sm:px-6 py-4 border-b border-white/10">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/35">
                  Certification / Module
                </span>
                <span className="hidden md:block font-mono text-[10px] uppercase tracking-[0.22em] text-white/35">
                  Verification Source
                </span>
                <span className="justify-self-end font-mono text-[10px] uppercase tracking-[0.22em] text-white/35">
                  ID_Code
                </span>
              </div>

              <div className="relative z-10 divide-y divide-white/10">
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_auto] gap-4 px-5 sm:px-6 py-5"
                  >
                    <div className="flex items-start gap-4 min-w-0">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-2 text-[#e2c9a2]/60">
                        {cert.id.startsWith("EXP") ? (
                          <Award className="h-5 w-5" />
                        ) : (
                          <Terminal className="h-5 w-5" />
                        )}
                      </div>

                      <div className="min-w-0">
                        <h3 className="font-serif text-xl text-[#e2c9a2]">
                          {cert.title}
                        </h3>
                        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-white/30">
                          {cert.type}
                        </p>

                        <p className="mt-3 md:hidden font-mono text-xs text-[#e2c9a2]/55">
                          Source:{" "}
                          <span className="text-[#e2c9a2]/75">
                            {cert.issuer}
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="hidden md:flex items-center">
                      <span className="inline-flex max-w-full truncate rounded-sm border border-white/10 bg-white/5 px-3 py-2 font-mono text-xs text-[#e2c9a2]/60">
                        {cert.issuer}
                      </span>
                    </div>

                    <div className="flex items-center justify-between md:justify-end">
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/30 md:hidden">
                        ID:
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/35">
                        {cert.id}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-[#0b0b07]/70 px-5 py-4">
              <div className="flex items-center gap-3 font-mono text-xs text-white/40">
                <span className="h-2 w-2 rounded-full bg-[#a37541]" />
                <span className="tracking-[0.18em] uppercase">
                  Live Feed: Currently ingesting "Advanced RAG Pipelines"...
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
