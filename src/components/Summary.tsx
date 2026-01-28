export default function Summary() {
  const clients = [
    "Teva Pharmaceuticals",
    "Jubilant Life Sciences",
    "Radico Khaitan",
  ];

  const protocols = [
    "Multi-Million Dollar Billing Cycle Mgmt",
    "Autonomous AI Workflow Architecture",
    "Advanced Social Algorithm Optimization",
  ];

  return (
    <section
      id="summary"
      className="relative overflow-hidden border-t border-white/10 bg-[#0b0b07] py-20 sm:py-24"
    >
      {/* Ambient background: vignette + subtle top/bottom shade */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            linear-gradient(to bottom, rgba(11,11,7,0.85) 0%, rgba(11,11,7,0.10) 45%, rgba(11,11,7,0.85) 100%),
            radial-gradient(ellipse at center, rgba(11,11,7,0) 0%, rgba(11,11,7,0.35) 65%, rgba(11,11,7,0.92) 100%)
          `,
        }}
      />

      {/* Grain (static) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />

      {/* Corner tech element */}
      <div className="pointer-events-none absolute right-0 top-0 p-10 opacity-20">
        <div className="h-28 w-28 rounded-tr-3xl border-r-2 border-t-2 border-[#a37541]/60" />
      </div>

      <div className="mx-auto max-w-450 px-6 md:px-12 lg:px-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* LEFT */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 border-l border-[#a37541] pl-4 py-1">
              <span className="relative flex h-2 w-2">
                {/* removed animate-ping */}
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#a37541]" />
              </span>
              <span className="font-mono text-[11px] sm:text-xs tracking-[0.22em] uppercase text-[#a37541]">
                // Executive_Summary
              </span>
            </div>

            <h3 className="font-serif leading-[0.95] tracking-tight text-4xl sm:text-5xl lg:text-6xl text-[#e2c9a2]">
              I build{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#6f481e] to-[#e2c9a2] italic">
                unfair advantages
              </span>{" "}
              through autonomous systems.
            </h3>

            <p className="max-w-xl font-mono text-base sm:text-lg leading-relaxed text-[#e2c9a2]/70">
              High-impact Operations Strategist bridging legacy industrial
              frameworks and cutting-edge AI. I don’t just optimize workflows—I
              re-engineer the operational architecture for speed and accuracy.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {["Ops-led", "Automation-first", "Enterprise-ready"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-sm border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] tracking-[0.18em] uppercase text-[#e2c9a2]/70"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="hidden lg:block absolute -left-10 top-0 bottom-0 w-px bg-linear-to-b from-white/20 via-white/10 to-transparent" />

            {/* (optional) if you also want to reduce scroll stutter, remove blur: backdrop-blur-md */}
            <div className="relative overflow-hidden border border-white/10 bg-[#0b0b07]/45 shadow-2xl p-6 sm:p-8">
              <div className="pointer-events-none absolute top-0 left-0 h-px w-full bg-linear-to-r from-transparent via-[#a37541] to-transparent opacity-50" />

              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(11,11,7,0) 0%, rgba(11,11,7,0.35) 65%, rgba(11,11,7,0.85) 100%)",
                }}
              />

              <div className="relative space-y-10 sm:space-y-12">
                {/* Feature 1 */}
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    {/* removed group-hover:animate-pulse */}
                    <span className="h-2 w-2 rounded-sm bg-[#a37541]" />
                    <h4 className="font-mono text-xs sm:text-sm uppercase tracking-[0.18em] text-[#e2c9a2]">
                      Trusted By Industry Giants
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {clients.map((client) => (
                      <span
                        key={client}
                        className="
                          cursor-default rounded-sm
                          border border-white/10 bg-white/5
                          px-3 py-1
                          font-mono text-xs sm:text-sm
                          text-[#e2c9a2]/75
                        "
                      >
                        {client}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Feature 2 */}
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    {/* removed transition-colors + group-hover:bg */}
                    <span className="h-2 w-2 rounded-sm bg-white/25" />
                    <h4 className="font-mono text-xs sm:text-sm uppercase tracking-[0.18em] text-[#e2c9a2]">
                      Core Protocols
                    </h4>
                  </div>

                  <ul className="space-y-3">
                    {protocols.map((item, i) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 font-mono text-xs sm:text-sm text-[#e2c9a2]/65"
                      >
                        <span className="shrink-0 text-[#a37541]/70">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/30">
                    Live_Telemetry
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#a37541]/70">
                    v2.0
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 lg:hidden text-center">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/25">
                Decrypt the stack below
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
