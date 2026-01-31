import { Award, ShieldCheck, Terminal } from "lucide-react";
import SectionShell from "../components/SectionShell";
import AmbientBackground from "../components/AmbientBackground";

const certifications = [
  {
    title: "AI Workflow Design",
    issuer: "n8n + OpenAI Docs",
    type: "Technical Proficiency",
    id: "CERT01",
  },
  {
    title: "Full-Stack Architecture",
    issuer: "Next.js + React Patterns",
    type: "Systems Engineering",
    id: "CERT02",
  },
  {
    title: "Industrial Ops Mgmt",
    issuer: "Field Operations (7 Yrs)",
    type: "Practical MBA Equiv.",
    id: "EXPL7",
  },
];

const sectionGradient = {
  background:
    "linear-gradient(to bottom, rgba(11,11,7,0.75) 0%, rgba(11,11,7,0.15) 45%, rgba(11,11,7,0.75) 100%), radial-gradient(ellipse at center, rgba(11,11,7,0) 0%, rgba(11,11,7,0.35) 65%, rgba(11,11,7,0.92) 100%)",
} satisfies React.CSSProperties;

export default function Education() {
  return (
    <SectionShell
      id="education"
      withBorder={false}
      className="overflow-hidden bg-bg-dark"
    >
      <AmbientBackground gradientStyle={sectionGradient} noiseOpacity={0.06} />
      <div className="pointer-events-none absolute left-30 top-30 h-95 w-95 rounded-full bg-accent10 blur-120px" />

      <div className="relative">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 border-l border-accent pl-4 py-1">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-11px sm:text-xs tracking-0.22em uppercase text-accent">
                Knowledge Base
              </span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-text-primary">
              KNOWLEDGEBASE
            </h2>

            <p className="max-w-xl font-mono text-sm sm:text-base leading-relaxed text-text-primary60">
              Traditional academia prioritizes theory. My education is built on{" "}
              <span className="text-text-primary">live fire exercises</span> —
              managing million-dollar billing cycles and deploying production AI
              systems.
            </p>

            <div className="inline-flex items-center gap-2 rounded border border-accent20 bg-accent10 px-4 py-2 font-mono text-11px uppercase tracking-0.22em text-accent">
              <ShieldCheck className="h-4 w-4" />
              <span>CLEARED FOR DEPLOYMENT</span>
            </div>

            <div className="hidden lg:block">
              <div className="mt-8 h-px w-full bg-linear-to-r from-transparent via-accent40 to-transparent opacity-60" />
              <p className="mt-4 font-mono text-10px uppercase tracking-0.22em text-white25">
                Verification files indexed below.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden border border-white10 bg-bg-dark70 shadow-2xl">
              <div className="pointer-events-none absolute top-0 left-0 h-px w-full bg-linear-to-r from-transparent via-accent to-transparent opacity-50" />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(11,11,7,0) 0%, rgba(11,11,7,0.35) 65%, rgba(11,11,7,0.85) 100%)",
                }}
              />

              <div className="relative z-10 grid grid-cols-[1fr_auto] md:grid-cols-[1.4fr_1fr_auto] gap-3 px-5 sm:px-6 py-4 border-b border-white10">
                <span className="font-mono text-10px uppercase tracking-0.22em text-white35">
                  Certification Module
                </span>
                <span className="hidden md:block font-mono text-10px uppercase tracking-0.22em text-white35">
                  Verification Source
                </span>
                <span className="justify-self-end font-mono text-10px uppercase tracking-0.22em text-white35">
                  ID Code
                </span>
              </div>

              <div className="relative z-10 divide-y divide-white10">
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_auto] gap-4 px-5 sm:px-6 py-5"
                  >
                    <div className="flex items-start gap-4 min-w-0">
                      <div className="rounded-lg border border-white10 bg-white5 p-2 text-text-primary60">
                        {cert.id.startsWith("EXP") ? (
                          <Award className="h-5 w-5" />
                        ) : (
                          <Terminal className="h-5 w-5" />
                        )}
                      </div>

                      <div className="min-w-0">
                        <h3 className="font-serif text-xl text-text-primary">
                          {cert.title}
                        </h3>
                        <p className="mt-1 font-mono text-10px uppercase tracking-0.22em text-white30">
                          {cert.type}
                        </p>
                        <p className="mt-3 md:hidden font-mono text-xs text-text-primary55">
                          Source:{" "}
                          <span className="text-text-primary75">
                            {cert.issuer}
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="hidden md:flex items-center">
                      <span className="inline-flex max-w-full truncate rounded-sm border border-white10 bg-white5 px-3 py-2 font-mono text-xs text-text-primary60">
                        {cert.issuer}
                      </span>
                    </div>

                    <div className="flex items-center justify-between md:justify-end">
                      <span className="font-mono text-10px uppercase tracking-0.22em text-white30 md:hidden">
                        ID
                      </span>
                      <span className="font-mono text-10px uppercase tracking-0.22em text-white35">
                        {cert.id}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white10 bg-bg-dark70 px-5 py-4">
              <div className="flex items-center gap-3 font-mono text-xs text-white40">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <span className="tracking-0.18em uppercase">
                  Live Feed: Currently ingesting Advanced RAG Pipelines...
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
