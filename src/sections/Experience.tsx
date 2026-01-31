import { CheckCircle2, Terminal } from "lucide-react";
import SectionShell from "../components/SectionShell";

export default function Experience() {
  return (
    <SectionShell id="experience">
      <div className="w-full">
        <div className="mb-16 flex items-center gap-6">
          <h2 className="font-serif text-4xl text-text-primary">
            EXPERIENCE LOG
          </h2>
          <div className="h-px flex-1 bg-accent20" />
        </div>

        <div className="relative space-y-16">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-12 top-0 bottom-0 w-px bg-white10 md:-translate-x-12 ml-6 md:ml-0" />

          {/* Role 1 */}
          <div className="grid md:grid-cols-2 gap-12 relative">
            <div className="md:text-right md:pr-12 pl-16 md:pl-0">
              <h3 className="font-serif text-3xl text-text-primary">
                Systems Architect
              </h3>
              <p className="font-mono text-sm text-accent mt-2 uppercase tracking-widest">
                2024 - Present
              </p>
              <p className="mt-4 text-sm text-text-primary60 font-mono">
                Designing autonomous operational workflows for enterprise
                clients.
              </p>
            </div>

            <div className="absolute left-0 md:left-12 top-0 ml-5.25 md:ml-0 md:-translate-x-12 w-3 h-3 bg-accent rounded-full shadow-[0_0_10px_#a37541]" />

            <div className="pl-16 md:pl-12">
              <div className="glass-panel p-6">
                <div className="scanline-top" />
                <ul className="space-y-4">
                  <li className="flex gap-4 text-sm text-text-primary80">
                    <Terminal className="w-5 h-5 text-accent shrink-0" />
                    <span>
                      Deployed n8n agents reducing manual labor by{" "}
                      <span className="text-accent font-bold">70%</span>.
                    </span>
                  </li>
                  <li className="flex gap-4 text-sm text-text-primary80">
                    <Terminal className="w-5 h-5 text-accent shrink-0" />
                    <span>
                      Orchestrated Meta Ads with AI-driven creative testing.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Role 2 */}
          <div className="grid md:grid-cols-2 gap-12 relative">
            <div className="md:order-2 pl-16 md:pl-12">
              <h3 className="font-serif text-3xl text-text-primary70">
                Ops Liaison
              </h3>
              <p className="font-mono text-sm text-white40 mt-2 uppercase tracking-widest">
                2019 - 2024
              </p>
              <p className="mt-4 text-sm text-text-primary50 font-mono">
                Legacy Industrial Infrastructure / Family Business Operations.
              </p>
            </div>

            <div className="absolute left-0 md:left-12 top-0 ml-5.25 md:ml-0 md:-translate-x-12 w-3 h-3 bg-bg-dark border border-white30 rounded-full" />

            <div className="md:order-1 md:text-right md:pr-12 pl-16 md:pl-0">
              <div className="glass-panel p-6">
                <ul className="space-y-4 text-left">
                  <li className="flex gap-4 text-sm text-text-primary80">
                    <CheckCircle2 className="w-5 h-5 text-white30 shrink-0" />
                    <span>
                      Managed 5 years of industrial billing with{" "}
                      <span className="text-white font-bold">
                        100% accuracy
                      </span>
                      .
                    </span>
                  </li>
                  <li className="flex gap-4 text-sm text-text-primary80">
                    <CheckCircle2 className="w-5 h-5 text-white30 shrink-0" />
                    <span>
                      Coordinated high-stakes logistics for Jubilant, Teva,
                      Radico.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
