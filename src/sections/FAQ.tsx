import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionShell from "../components/SectionShell";

type FAQItem = { q: string; a: string };

export default function FAQ() {
  const items = useMemo<FAQItem[]>(
    () => [
      {
        q: "What do you build, exactly?",
        a: "Production-grade AI automation systems: n8n workflows, LLM orchestration, voice/reporting pipelines, and integration-heavy internal tooling.",
      },
      {
        q: "What's the typical engagement model?",
        a: "A short audit scope, then a build sprint. After launch, we add monitoring, documentation, and iteration cycles.",
      },
      {
        q: "Do you work with small teams or only enterprises?",
        a: "Both. The key requirement is a real process to automate and a stakeholder who can approve access decisions quickly.",
      },
      {
        q: "How do we start?",
        a: "Book a call on the Booking page. We'll map your workflow, define success metrics, and pick a minimal first deployment.",
      },
    ],
    [],
  );

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionShell id="faq">
      <div>
        <div className="mb-12 flex items-end justify-between border-b border-white10 pb-6">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-text-primary">
              FAQ
            </h2>
            <p className="mt-2 font-mono text-xs uppercase tracking-widest text-accent80">
              Quick answers before we talk
            </p>
          </div>
          <div className="hidden md:block font-mono text-xs text-white30 tracking-widest">
            SYSHELP
          </div>
        </div>

        <div className="grid gap-4">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <button
                key={item.q}
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="glass-panel p-6 text-left"
              >
                <div className="scanline-top" />
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-xs uppercase tracking-0.18em text-text-primary80">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={[
                      "h-4 w-4 text-accent transition-transform",
                      isOpen ? "rotate-180" : "",
                    ].join(" ")}
                  />
                </div>
                {isOpen ? (
                  <p className="mt-4 font-mono text-sm leading-relaxed text-text-primary60">
                    {item.a}
                  </p>
                ) : null}
              </button>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
