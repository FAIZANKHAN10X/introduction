"use client";

import React, { useRef } from "react";
import { CheckCircle2, Terminal } from "lucide-react";

export default function Experience() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative overflow-hidden border-t border-white/10 bg-[#0b0b07] py-20 sm:py-24"
    >
      {/* Ambient overlays (static) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            linear-gradient(to bottom, rgba(11,11,7,0.75) 0%, rgba(11,11,7,0.15) 45%, rgba(11,11,7,0.75) 100%),
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
      <div className="pointer-events-none absolute right-0 top-0 h-105 w-105 rounded-full bg-[#a37541]/10 blur-[120px]" />

      <div className="mx-auto max-w-450 px-6 md:px-12 lg:px-24">
        {/* Header (static) */}
        <div className="mb-12 sm:mb-16 flex items-center gap-6">
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-[#e2c9a2]">
            EXPERIENCE_LOG
          </h2>
          <div className="h-px flex-1 bg-[#a37541]/20" />
          <span className="hidden sm:inline-flex rounded border border-[#a37541]/20 bg-[#a37541]/10 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-[#a37541]/80">
            // Chronological_Order
          </span>
        </div>

        <div className="relative space-y-16 sm:space-y-20">
          {/* Continuous Vertical Line (static, no scaling animation) */}
          <div className="pointer-events-none absolute left-1/2 top-0 bottom-0 hidden w-px -translate-x-1/2 bg-white/10 md:block" />
          <div className="pointer-events-none absolute left-6 top-0 bottom-0 w-px bg-white/10 md:hidden" />

          {/* ROLE 1 */}
          <div className="relative grid gap-8 md:grid-cols-2 md:gap-24">
            {/* Node */}
            <div className="pointer-events-none absolute left-6 top-0 md:left-1/2 md:-translate-x-1/2">
              <div className="relative z-10 flex h-5 w-5 items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-[#a37541]/20 blur-md" />
                <div className="h-3 w-3 rounded-full bg-[#a37541] shadow-[0_0_10px_#a37541]" />
              </div>
              <div className="absolute left-1/2 top-5 h-24 w-px -translate-x-1/2 bg-linear-to-b from-[#a37541] to-transparent" />
            </div>

            {/* Left (Title / meta) */}
            <div className="pl-14 md:pl-0 md:pr-16 md:text-right">
              <h3 className="font-serif text-3xl text-[#e2c9a2]">
                Systems Architect
              </h3>
              <div className="mt-3 flex items-center gap-3 md:justify-end">
                <span className="rounded border border-[#a37541]/20 bg-[#a37541]/10 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-[#a37541]">
                  ACTIVE_PROTOCOL
                </span>
                <span className="font-mono text-sm text-[#e2c9a2]/35">
                  [2024 - Present]
                </span>
              </div>
              <p className="mt-4 max-w-sm text-sm font-mono leading-relaxed text-[#e2c9a2]/55 md:ml-auto">
                Designing autonomous operational workflows for enterprise
                clients.
              </p>
            </div>

            {/* Right (Card) */}
            <div className="pl-14 md:pl-0">
              <div className="relative overflow-hidden border border-white/10 bg-[#0b0b07]/70 p-6 sm:p-8 shadow-2xl">
                <div className="pointer-events-none absolute top-0 left-0 h-px w-full bg-linear-to-r from-transparent via-[#a37541] to-transparent opacity-50" />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, rgba(11,11,7,0) 0%, rgba(11,11,7,0.35) 65%, rgba(11,11,7,0.85) 100%)",
                  }}
                />

                <ul className="relative space-y-6">
                  <li className="flex gap-4 text-sm text-[#e2c9a2]/75">
                    <Terminal className="mt-0.5 h-5 w-5 shrink-0 text-[#a37541]" />
                    <span>
                      <span className="mb-1 block font-mono text-xs uppercase tracking-[0.18em] text-[#e2c9a2]">
                        Workflow Engineering
                      </span>
                      Deployed n8n/Make agents reducing manual labor by{" "}
                      <span className="text-[#a37541] font-bold">~70%</span>.
                    </span>
                  </li>

                  <li className="flex gap-4 text-sm text-[#e2c9a2]/75">
                    <Terminal className="mt-0.5 h-5 w-5 shrink-0 text-[#a37541]" />
                    <span>
                      <span className="mb-1 block font-mono text-xs uppercase tracking-[0.18em] text-[#e2c9a2]">
                        Performance Marketing
                      </span>
                      Orchestrated Meta Ads with AI-driven creative testing
                      algorithms.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ROLE 2 */}
          <div className="relative grid gap-8 md:grid-cols-2 md:gap-24">
            {/* Node */}
            <div className="pointer-events-none absolute left-6 top-0 md:left-1/2 md:-translate-x-1/2">
              <div className="h-4 w-4 rounded-full border border-white/20 bg-[#0b0b07]" />
            </div>

            {/* Left (Card) */}
            <div className="order-last pl-14 md:order-first md:pl-0">
              <div className="border border-white/10 bg-[#0b0b07]/70 p-6 sm:p-8 shadow-2xl">
                <ul className="space-y-6">
                  <li className="flex gap-4 text-sm text-[#e2c9a2]/75">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-white/35" />
                    <span>
                      <span className="mb-1 block font-mono text-xs uppercase tracking-[0.18em] text-[#e2c9a2]">
                        Executive Liaison
                      </span>
                      Coordinated high-stakes logistics for Jubilant, Teva, &
                      Radico.
                    </span>
                  </li>

                  <li className="flex gap-4 text-sm text-[#e2c9a2]/75">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-white/35" />
                    <span>
                      <span className="mb-1 block font-mono text-xs uppercase tracking-[0.18em] text-[#e2c9a2]">
                        Financial Integrity
                      </span>
                      Managed 5 years of industrial billing with{" "}
                      <span className="text-[#e2c9a2] font-bold">
                        100% audit accuracy
                      </span>
                      .
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right (Title / meta) */}
            <div className="pl-14 md:pl-16">
              <h3 className="font-serif text-3xl text-[#e2c9a2]/65">
                Ops Liaison
              </h3>
              <div className="mt-3 flex items-center gap-3">
                <span className="rounded border border-white/10 bg-white/5 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                  ARCHIVED
                </span>
                <span className="font-mono text-sm text-[#e2c9a2]/25">
                  [2019 - 2024]
                </span>
              </div>
              <p className="mt-4 text-sm font-mono italic leading-relaxed text-[#e2c9a2]/45">
                Legacy Industrial Infrastructure & Family Business Operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
