import { Link } from "react-router-dom";
import { Linkedin, Mail, Terminal } from "lucide-react";
import AmbientBackground from "./AmbientBackground";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Projects", to: "projects" },
    { label: "Experience", to: "experience" },
    { label: "Toolkit", to: "toolkit" },
    { label: "FAQ", to: "faq" },
  ];

  const footerGradient = {
    background:
      "linear-gradient(to bottom, rgba(11,11,7,0.80) 0%, rgba(11,11,7,0.20) 45%, rgba(11,11,7,0.85) 100%), radial-gradient(ellipse at center, rgba(11,11,7,0) 0%, rgba(11,11,7,0.35) 65%, rgba(11,11,7,0.92) 100%)",
  } satisfies React.CSSProperties;

  return (
    <footer className="relative overflow-hidden border-t border-white10 bg-bg-dark py-20 sm:py-24">
      <AmbientBackground gradientStyle={footerGradient} noiseOpacity={0.06} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 border-l border-accent pl-4 py-1">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-11px sm:text-xs tracking-0.22em uppercase text-accent">
                Contact Channel
              </span>
            </div>

            <h2 className="mt-6 font-serif text-4xl sm:text-5xl tracking-tight text-text-primary">
              Ready to scale?
            </h2>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
              <a
                href="mailto:email@example.com"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-0.22em text-text-primary60"
              >
                <Mail className="h-4 w-4" />
                <span className="border-b border-transparent pb-0.5">
                  email@example.com
                </span>
              </a>

              <span className="hidden sm:block text-white10">|</span>

              <a
                href=""
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-0.22em text-text-primary60"
              >
                <Linkedin className="h-4 w-4" />
                <span className="border-b border-transparent pb-0.5">
                  LinkedIn
                </span>
              </a>
            </div>

            <div className="mt-8">
              <Link
                to="booking"
                className="inline-flex items-center gap-2 bg-text-primary text-bg-dark px-6 py-3 font-mono text-xs uppercase tracking-0.18em font-bold hover:bg-white transition-colors"
              >
                Book a call <Terminal size={14} />
              </Link>
            </div>
          </div>

          <div className="mt-12 sm:mt-14">
            <div className="relative overflow-hidden rounded-2xl border border-white10 bg-bg-dark70 p-5 sm:p-6 shadow-2xl">
              <div className="pointer-events-none absolute top-0 left-0 h-px w-full bg-linear-to-r from-transparent via-accent to-transparent opacity-50" />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(11,11,7,0) 0%, rgba(11,11,7,0.35) 65%, rgba(11,11,7,0.85) 100%)",
                }}
              />

              <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="rounded-xl border border-white10 bg-white5 p-3 text-text-primary">
                    <Terminal className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-0.22em text-text-primary">
                      System Architect
                    </h3>
                    <p className="mt-2 font-mono text-sm text-text-primary55">
                      Available for high-impact contracts.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 font-mono text-10px uppercase tracking-0.22em text-white40">
                  <span className="h-2 w-2 rounded-full bg-accent shadow-0 0 10px rgba(163,117,65,0.35)" />
                  ONLINE
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white10 pt-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-6">
              <div className="select-none flex h-16 w-12 flex-col items-center justify-center border-2 border-white15 bg-bg-dark font-mono text-10px leading-none text-text-primary">
                <span className="pt-1">DEV</span>
                <span className="text-large font-black text-accent">2026</span>
              </div>

              <div className="font-mono text-xs text-white35">
                <p>{currentYear} Faizan Monaco</p>
                <p>New Delhi, IN</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs text-white35">
              {footerLinks.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  className="uppercase tracking-0.22em"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
