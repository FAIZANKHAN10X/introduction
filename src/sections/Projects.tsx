import {
  Activity,
  ArrowUpRight,
  Cpu,
  ExternalLink,
  Github,
  Signal,
} from "lucide-react";
import SectionShell from "../components/SectionShell";
import AmbientBackground from "../components/AmbientBackground";
import Panel from "../components/Panel";

const projects = [
  {
    title: "Autonomous Lead Engine",
    id: "PROTO01",
    desc: "A 3-tier automation: web scraping industry news, generating personalized AI outreach, and syncing CRM records.",
    tags: ["n8n", "OpenAI", "Salesforce"],
    metric: "95% Manual Reduction",
    status: "DEPLOYED",
    statusTone: "deployed" as const,
    icon: <Cpu className="w-6 h-6" />,
    link: "",
    github: "",
  },
  {
    title: "Industrial Reporting Bot",
    id: "PROTO02",
    desc: "Voice-to-PDF system for on-site workers. Converts unstructured audio logs into formal ISO-compliant reports.",
    tags: ["Whisper API", "Make.com", "Twilio"],
    metric: "20hrs/Week Saved",
    status: "ACTIVE",
    statusTone: "active" as const,
    icon: <Activity className="w-6 h-6" />,
    link: "",
    github: "",
  },
  {
    title: "Social Dominance Flow",
    id: "PROTO03",
    desc: "Algorithmic engagement bot. Mimics human behavior to warm accounts and boost organic reach on LinkedIn/Meta.",
    tags: ["Puppeteer", "Node.js", "Redis"],
    metric: "300% Reach Increase",
    status: "OPTIMIZING",
    statusTone: "optimizing" as const,
    icon: <Signal className="w-6 h-6" />,
    link: "",
    github: "",
  },
];

function StatusPill({
  tone,
  label,
}: {
  tone: "deployed" | "active" | "optimizing";
  label: string;
}) {
  const map = {
    deployed: {
      fg: "#a37541",
      bg: "rgba(163,117,65,0.10)",
      border: "rgba(163,117,65,0.25)",
    },
    active: {
      fg: "#e2c9a2",
      bg: "rgba(226,201,162,0.08)",
      border: "rgba(226,201,162,0.18)",
    },
    optimizing: {
      fg: "rgba(226,201,162,0.75)",
      bg: "rgba(255,255,255,0.04)",
      border: "rgba(255,255,255,0.10)",
    },
  } as const;

  const s = map[tone];

  return (
    <div
      className="flex items-center gap-2 rounded border px-2 py-1 font-mono text-10px uppercase tracking-0.22em"
      style={{ color: s.fg, backgroundColor: s.bg, borderColor: s.border }}
    >
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: s.fg }}
      />
      {label}
    </div>
  );
}

const sectionGradient = {
  background:
    "linear-gradient(to bottom, rgba(11,11,7,0.75) 0%, rgba(11,11,7,0.15) 45%, rgba(11,11,7,0.75) 100%), radial-gradient(ellipse at center, rgba(11,11,7,0) 0%, rgba(11,11,7,0.35) 65%, rgba(11,11,7,0.92) 100%)",
} satisfies React.CSSProperties;

export default function Projects() {
  return (
    <SectionShell
      id="projects"
      withBorder={false}
      className="overflow-hidden bg-bg-dark border-t border-white10"
    >
      <AmbientBackground gradientStyle={sectionGradient} noiseOpacity={0.06} />

      <div className="relative">
        <div className="mb-10 sm:mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-white10 pb-6">
          <div>
            <div className="inline-flex items-center gap-3 border-l border-accent pl-4 py-1">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-11px sm:text-xs tracking-0.22em uppercase text-accent">
                Live Systems Overview
              </span>
            </div>

            <h2 className="mt-5 font-serif text-3xl md:text-4xl tracking-tight text-text-primary">
              DEPLOYED PROTOCOLS
            </h2>

            <p className="mt-2 max-w-2xl font-mono text-sm text-text-primary45">
              Operational systems built to survive production reliability,
              observability, and measurable impact.
            </p>
          </div>

          <a
            href="https://github.com"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-0.22em text-text-primary60"
          >
            View All Repositories <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-8">
          {projects.map((project) => (
            <Panel
              key={project.id}
              className="relative overflow-hidden border border-white10 bg-bg-dark70 shadow-2xl"
              withScanline={false}
            >
              <div className="pointer-events-none absolute top-0 left-0 h-px w-full bg-linear-to-r from-transparent via-accent to-transparent opacity-50" />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(11,11,7,0) 0%, rgba(11,11,7,0.35) 65%, rgba(11,11,7,0.85) 100%)",
                }}
              />

              <div className="relative z-10 flex items-center justify-between gap-4 border-b border-white10 px-6 py-5">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="rounded-lg border border-white10 bg-white5 p-2 text-text-primary60">
                    {project.icon}
                  </div>
                  <span className="truncate font-mono text-xs tracking-0.18em uppercase text-text-primary35">
                    {project.id}
                  </span>
                </div>

                <StatusPill tone={project.statusTone} label={project.status} />
              </div>

              <div className="relative z-10 flex h-full flex-col px-6 py-6">
                <h3 className="font-serif text-2xl text-text-primary">
                  {project.title}
                </h3>

                <p className="mt-3 grow font-mono text-sm leading-relaxed text-text-primary55">
                  {project.desc}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm border border-white10 bg-white5 px-2 py-1 font-mono text-10px uppercase tracking-0.2em text-text-primary55"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between gap-4 border-t border-white10 pt-5">
                  <div className="min-w-0">
                    <span className="block font-mono text-10px uppercase tracking-0.22em text-white25">
                      Impact
                    </span>
                    <span className="mt-1 block truncate font-serif text-lg text-text-primary">
                      {project.metric}
                    </span>
                  </div>

                  <div className="flex shrink-0 gap-2">
                    <a
                      href={project.github}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white10 bg-white5 text-text-primary60"
                      title="View Code"
                      aria-label="View Code"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={project.link}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white10 bg-white5 text-text-primary60"
                      title="Live Demo"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="pointer-events-none absolute bottom-0 left-0 h-0.5 w-full opacity-50"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(163,117,65,0.55), transparent)",
                }}
              />
            </Panel>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
