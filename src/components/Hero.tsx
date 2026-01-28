"use client";

import { ArrowRight, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#0b0b07]">
      {/* --- BACKGROUND LAYER (static) --- */}
      <div className="absolute inset-0 z-0 h-[120%] w-full">
        <img
          src="/aifaceswap-output.png"
          alt="Hero background"
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />

        {/* Vignette */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse at center,
                rgba(11,11,7,0) 0%,
                rgba(11,11,7,0.15) 45%,
                rgba(11,11,7,0.55) 75%,
                rgba(11,11,7,0.92) 100%
              )
            `,
          }}
        />

        {/* Cinematic top/bottom shading */}
        <div
          className="absolute inset-0 z-11 pointer-events-none"
          style={{
            background: `
              linear-gradient(to bottom, rgba(11,11,7,0.55) 0%, rgba(11,11,7,0) 40%),
              linear-gradient(to top, rgba(11,11,7,0.80) 0%, rgba(11,11,7,0) 45%)
            `,
          }}
        />

        {/* Grain / noise overlay (static image, no animation) */}
        <div
          className="absolute inset-0 z-20 opacity-[0.08] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage:
              "url('https://grainy-gradients.vercel.app/noise.svg')",
          }}
        />
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-30 flex h-full flex-col justify-end pb-24 px-6 md:px-12 lg:px-24 max-w-450 mx-auto">
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-16 items-end">
          {/* LEFT */}
          <div className="space-y-10">
            {/* Identity Badge (no ping) */}
            <div className="overflow-hidden">
              <div className="inline-flex items-center gap-3 border-l border-[#a37541] pl-4 py-1">
                <span className="relative flex h-2 w-2">
                  {/* removed animate-ping */}
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a37541]" />
                </span>
                <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#a37541]">
                  System.Arch_v2.0 // Online
                </span>
              </div>
            </div>

            {/* Main Title (static) */}
            <div className="font-serif leading-[0.85] tracking-tight">
              <div className="overflow-hidden">
                <h1 className="text-7xl md:text-9xl lg:text-[10rem] text-[#e2c9a2]">
                  SYSTEMS
                </h1>
              </div>

              <div className="overflow-hidden">
                <h1
                  className="text-7xl md:text-9xl lg:text-[10rem] text-transparent bg-clip-text bg-linear-to-r from-[#6f481e] to-[#e2c9a2] italic pr-4"
                  style={{ fontStretch: "80%" }}
                >
                  ARCHITECT
                </h1>
              </div>
            </div>

            {/* Subtext */}
            <div className="max-w-xl">
              <p className="text-lg md:text-xl font-light text-[#e2c9a2]/80 leading-relaxed font-mono">
                Bridging heavy industrial operations and autonomous AI
                protocols. Building the{" "}
                <span className="text-[#a37541]">nervous system</span> for the
                next generation of enterprise.
              </p>
            </div>

            {/* CTA Buttons (removed hover transitions/transform animations) */}
            <div className="flex flex-wrap gap-6 pt-6">
              <button className="relative px-8 py-4 bg-[#e2c9a2] text-[#0b0b07] font-bold font-mono text-sm uppercase tracking-wider overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Initiate Protocol <Terminal size={16} />
                </span>
              </button>

              <button className="flex items-center gap-2 px-8 py-4 border border-[#e2c9a2]/20 text-[#e2c9a2] font-mono text-sm uppercase tracking-wider">
                <span>View Mission Log</span>
                {/* removed group-hover translate */}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* RIGHT (no blur, no scan animation) */}
          <div className="hidden lg:block mb-4">
            <div className="p-8 bg-[#0b0b07]/70 border border-white/5 shadow-2xl relative overflow-hidden">
              {/* removed animate-scan */}
              <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#a37541] to-transparent opacity-50" />

              <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                <span className="font-mono text-[10px] text-[#a37541] uppercase tracking-widest">
                  Live_Telemetry
                </span>
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-[#a37541] rounded-full" />
                  <div className="w-1 h-1 bg-white/20 rounded-full" />
                  <div className="w-1 h-1 bg-white/20 rounded-full" />
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
                    <div className="text-4xl font-serif text-[#e2c9a2]">
                      {stat.value}
                      <span className="text-base font-mono text-[#a37541] ml-1">
                        {stat.suffix}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator (static) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30">
        <span className="text-[10px] font-mono uppercase text-white/30 tracking-[0.3em]">
          Scroll to Decrypt
        </span>
        <div className="w-px h-12 bg-linear-to-b from-[#a37541] to-transparent opacity-50" />
      </div>
    </div>
  );
}
