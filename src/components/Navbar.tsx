"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronRight, Terminal } from "lucide-react";

export default function FloatingNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: "Competencies", href: "#competencies" },
    { name: "Ops & Experience", href: "#experience" },
    { name: "Protocols", href: "#projects" },
  ];

  // Close on Escape + click outside (mobile panel)
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    const onPointerDown = (e: PointerEvent) => {
      if (!isOpen) return;
      const panel = panelRef.current;
      if (!panel) return;
      if (!panel.contains(e.target as Node)) setIsOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [isOpen]);

  const onNavClick = () => setIsOpen(false);

  return (
    <div className="fixed top-4 md:top-6 left-0 right-0 z-50 px-3 md:px-4">
      <div className="mx-auto w-full max-w-450 flex justify-center">
        <div className="relative w-full max-w-5xl">
          {/* Main bar */}
          <nav
            className="
              relative overflow-hidden
              flex items-center justify-between
              rounded-2xl
              px-4 py-3 md:px-6
              border border-white/10
              bg-[#0b0b07]/55 backdrop-blur-xl
              shadow-2xl
            "
          >
            {/* Top scan line (matches hero telemetry feel) */}
            <div className="pointer-events-none absolute top-0 left-0 h-px w-full bg-linear-to-r from-transparent via-[#a37541] to-transparent opacity-50" />

            {/* Subtle vignette inside navbar for depth */}
            <div
              className="pointer-events-none absolute inset-0 opacity-90"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(11,11,7,0) 0%, rgba(11,11,7,0.35) 65%, rgba(11,11,7,0.75) 100%)",
              }}
            />

            {/* Noise overlay like hero */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
              style={{
                backgroundImage:
                  "url('https://grainy-gradients.vercel.app/noise.svg')",
              }}
            />

            {/* Left: identity */}
            <a
              href="#top"
              className="relative z-10 flex items-center gap-3 min-w-0"
              onClick={onNavClick}
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#a37541] opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#a37541]" />
              </span>

              <span className="truncate font-mono text-[11px] md:text-xs tracking-[0.22em] uppercase text-[#e2c9a2]">
                System.Arch_v2.0
              </span>

              <span className="hidden sm:inline font-mono text-[10px] tracking-[0.2em] uppercase text-[#a37541]/80">
                // Online
              </span>
            </a>

            {/* Center: desktop links */}
            <div className="relative z-10 hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="
                    font-mono text-xs tracking-[0.18em] uppercase
                    text-[#e2c9a2]/60 hover:text-[#e2c9a2]
                    transition-colors
                  "
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Right: actions */}
            <div className="relative z-10 flex items-center gap-2 md:gap-3">
              {/* Desktop primary CTA (same button language as hero) */}
              <a
                href="#contact"
                className="
                  hidden md:inline-flex
                  group relative overflow-hidden
                  px-5 py-2.5
                  bg-[#e2c9a2] text-[#0b0b07]
                  font-mono text-xs uppercase tracking-[0.18em] font-bold
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a37541]/60
                "
              >
                <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-[#e2c9a2]">
                  Init System <Terminal size={16} />
                </span>
                <span className="absolute inset-0 bg-[#0b0b07] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </a>

              {/* Mobile toggle */}
              <button
                type="button"
                aria-label="Open menu"
                aria-expanded={isOpen}
                onClick={() => setIsOpen((v) => !v)}
                className="
                  md:hidden
                  inline-flex items-center justify-center
                  h-10 w-10
                  rounded-xl
                  border border-white/10
                  bg-white/5 hover:bg-white/10
                  text-[#e2c9a2]/80
                  backdrop-blur-xl
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a37541]/60
                "
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>

          {/* Mobile sheet */}
          <div
            className={[
              "md:hidden",
              "pointer-events-none",
              "absolute left-0 right-0 mt-3",
              "transition-all duration-200 ease-out",
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2",
            ].join(" ")}
          >
            <div
              ref={panelRef}
              className={[
                "pointer-events-auto",
                "relative overflow-hidden",
                "rounded-2xl border border-white/10",
                "bg-[#0b0b07]/75 backdrop-blur-xl shadow-2xl",
                "p-3",
              ].join(" ")}
            >
              <div className="pointer-events-none absolute top-0 left-0 h-px w-full bg-linear-to-r from-transparent via-[#a37541] to-transparent opacity-50" />

              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(11,11,7,0) 0%, rgba(11,11,7,0.35) 65%, rgba(11,11,7,0.85) 100%)",
                }}
              />

              <div
                className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
                style={{
                  backgroundImage:
                    "url('https://grainy-gradients.vercel.app/noise.svg')",
                }}
              />

              <div className="relative z-10 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={onNavClick}
                    className="
                      flex items-center justify-between
                      rounded-xl px-3 py-3
                      font-mono text-xs tracking-[0.18em] uppercase
                      text-[#e2c9a2]/75 hover:text-[#e2c9a2]
                      hover:bg-white/5
                      transition
                    "
                  >
                    <span>{link.name}</span>
                    <ChevronRight size={16} className="text-[#a37541]/80" />
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={onNavClick}
                  className="
                    mt-2
                    group relative overflow-hidden
                    flex items-center justify-center gap-2
                    w-full
                    px-4 py-3
                    bg-[#e2c9a2] text-[#0b0b07]
                    rounded-xl
                    font-mono text-xs uppercase tracking-[0.18em] font-bold
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a37541]/60
                  "
                >
                  <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-[#e2c9a2]">
                    Init System <Terminal size={16} />
                  </span>
                  <span className="absolute inset-0 bg-[#0b0b07] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                </a>

                <p className="px-3 pt-2 text-[10px] font-mono uppercase tracking-[0.22em] text-white/25">
                  Scroll to decrypt
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Note: backdrop blur utility is what creates the frosted-glass feel [web:30] */}
    </div>
  );
}
