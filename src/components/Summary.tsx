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
    <section className="relative bg-bg-dark py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 border-l border-accent pl-4">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="font-mono text-xs tracking-[0.22em] uppercase text-accent">
                // Executive_Summary
              </span>
            </div>

            {/* 
               FORCED LINE BREAKS:
               Using 'block' on spans forces them to their own lines.
               'w-fit' ensures the gradient background doesn't stretch full width unnecessarily.
            */}
            <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-text-primary leading-[1.1] tracking-tight">
              <span className="block">I build</span>
              <span className="block w-fit italic text-transparent bg-clip-text bg-gradient-to-r from-[#6f481e] to-text-primary pb-2 pr-2">
                unfair advantages
              </span>
              <span className="block">through autonomous systems.</span>
            </h3>

            <p className="font-mono text-base md:text-lg text-text-primary/70 leading-relaxed max-w-xl">
              High-impact Operations Strategist bridging legacy industrial
              frameworks and cutting-edge AI. I don’t just optimize workflows—I
              re-engineer the operational architecture for speed and accuracy.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {["Ops-led", "Automation-first", "Enterprise-ready"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs uppercase tracking-wider text-text-primary/70"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="glass-panel p-8">
            <div className="scanline-top" />
            <div className="space-y-10">
              <div>
                <h4 className="flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-text-primary mb-4">
                  <span className="h-2 w-2 bg-accent rounded-sm" />
                  Trusted By Industry Giants
                </h4>
                <div className="flex flex-wrap gap-2">
                  {clients.map((client) => (
                    <span
                      key={client}
                      className="border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-text-primary/75"
                    >
                      {client}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-text-primary mb-4">
                  <span className="h-2 w-2 bg-white/20 rounded-sm" />
                  Core Protocols
                </h4>
                <ul className="space-y-3">
                  {protocols.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-4 font-mono text-sm text-text-primary/65"
                    >
                      <span className="text-accent/70">0{i + 1}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex justify-between mt-6 pt-4 border-t border-white/10 font-mono text-[10px] uppercase tracking-widest">
              <span className="text-white/30">Live_Telemetry</span>
              <span className="text-accent/70">v2.0</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
