import { Mail, Linkedin, Terminal } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0b0b07] py-20 sm:py-24">
      {/* Ambient overlays */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            linear-gradient(to bottom, rgba(11,11,7,0.80) 0%, rgba(11,11,7,0.20) 45%, rgba(11,11,7,0.85) 100%),
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

      <div className="mx-auto max-w-450 px-6 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          {/* Hook */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3 border-l border-[#a37541] pl-4 py-1">
              <span className="relative flex h-2 w-2">
                {/* removed animate-ping */}
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#a37541]" />
              </span>
              <span className="font-mono text-[11px] sm:text-xs tracking-[0.22em] uppercase text-[#a37541]">
                // Contact_Channel
              </span>
            </div>

            <h2 className="mt-6 font-serif text-4xl sm:text-5xl tracking-tight text-[#e2c9a2]">
              Ready to scale?
            </h2>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
              {/* removed group + hover + transition-colors */}
              <a
                href="mailto:email@example.com"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-[#e2c9a2]/60"
              >
                <Mail className="h-4 w-4" />
                <span className="border-b border-transparent pb-0.5">
                  email@example.com
                </span>
              </a>

              <span className="hidden sm:block text-white/10">|</span>

              <a
                href="#"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-[#e2c9a2]/60"
              >
                <Linkedin className="h-4 w-4" />
                <span className="border-b border-transparent pb-0.5">
                  LinkedIn
                </span>
              </a>
            </div>
          </div>

          {/* Status Pill (static; removed blur/hover/scale/pulse) */}
          <div className="mt-12 sm:mt-14">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b07]/70 p-5 sm:p-6 shadow-2xl">
              <div className="pointer-events-none absolute top-0 left-0 h-px w-full bg-linear-to-r from-transparent via-[#a37541] to-transparent opacity-50" />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(11,11,7,0) 0%, rgba(11,11,7,0.35) 65%, rgba(11,11,7,0.85) 100%)",
                }}
              />

              <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  {/* removed transition-transform + group-hover:scale */}
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-[#e2c9a2]">
                    <Terminal className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-[#e2c9a2]">
                      System Architect
                    </h3>
                    <p className="mt-2 font-mono text-sm text-[#e2c9a2]/55">
                      Available for high-impact contracts.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                  {/* removed animate-pulse */}
                  <span className="h-2 w-2 rounded-full bg-[#a37541] shadow-[0_0_10px_rgba(163,117,65,0.35)]" />
                  ONLINE
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 border-t border-white/10 pt-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-6">
              <div className="select-none flex h-16 w-12 flex-col items-center justify-center border-2 border-white/15 bg-[#0b0b07] font-mono text-[10px] leading-none text-[#e2c9a2]">
                <span className="pt-1">DEV</span>
                <span className="text-xl font-black text-[#a37541]">26</span>
              </div>

              <div className="font-mono text-xs text-white/35">
                <p>© {currentYear} [Your Name]</p>
                <p>Meerut, IN</p>
              </div>
            </div>

            {/* removed hover + transition-colors */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs text-white/35">
              {["Projects", "Experience", "Stack"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="uppercase tracking-[0.22em]"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
