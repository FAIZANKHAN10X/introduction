import { ArrowRight, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-end pb-24 px-6 md:px-12 lg:px-24 overflow-hidden pt-32">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/aifaceswap-output.png"
          alt="Hero background"
          className="h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-vignette" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/50 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-[1.5fr_1fr] gap-16 items-end">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 border-l-2 border-accent pl-4">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-accent">
              System.Arch_v2.0 // Online
            </span>
          </div>

          {/* Headline */}
          <div className="font-serif leading-none tracking-tighter">
            <h1 className="text-6xl md:text-8xl lg:text-9xl text-text-primary">
              SYSTEMS
            </h1>
            <h1 className="text-6xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-[#6f481e] to-text-primary italic">
              ARCHITECT
            </h1>
          </div>

          <p className="max-w-xl text-lg md:text-xl font-mono text-text-primary/80 leading-relaxed">
            Bridging heavy industrial operations and autonomous AI protocols.
            Building the <span className="text-accent">nervous system</span> for
            the next generation of enterprise.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-8 py-4 bg-text-primary text-bg-dark font-mono text-sm uppercase tracking-wider font-bold flex items-center gap-2 hover:bg-white transition-colors">
              Initiate Protocol <Terminal size={16} />
            </button>
            <button className="px-8 py-4 border border-text-primary/20 text-text-primary font-mono text-sm uppercase tracking-wider flex items-center gap-2 hover:bg-white/5 transition-colors">
              View Mission Log <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Stats Panel (Desktop Only) */}
        <div className="hidden lg:block mb-4">
          <div className="glass-panel p-8">
            <div className="scanline-top" />
            <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
              <span className="font-mono text-[10px] text-accent uppercase tracking-widest">
                Live_Telemetry
              </span>
              <div className="flex gap-1">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`w-1 h-1 rounded-full ${i === 1 ? "bg-accent" : "bg-white/20"}`}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-y-10 gap-x-12">
              {[
                { label: "Ops Experience", value: "07", suffix: "YRS" },
                { label: "Efficiency", value: "70", suffix: "%" },
                { label: "Billing Mgmt", value: "$MM", suffix: "+" },
                { label: "Accuracy", value: "100", suffix: "%" },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-[10px] font-mono text-white/40 uppercase mb-2 tracking-wider">
                    {stat.label}
                  </p>
                  <div className="text-4xl font-serif text-text-primary">
                    {stat.value}
                    <span className="text-base font-mono text-accent ml-1">
                      {stat.suffix}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
