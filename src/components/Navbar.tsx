import { useState, useEffect, useRef } from "react";
import { Menu, X, Terminal, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: "Competencies", href: "#" },
    { name: "Ops & Experience", href: "#" },
    { name: "Protocols", href: "#" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <header className="fixed top-4 md:top-6 left-0 right-0 z-50 px-4">
      <div className="mx-auto max-w-5xl">
        <nav className="relative flex items-center justify-between rounded-2xl border border-white/10 bg-[#0b0b07]/80 backdrop-blur-md px-6 py-3 shadow-2xl">
          <div className="scanline-top" />

          {/* Logo */}
          <a href="#" className="relative z-10 flex items-center gap-3">
            <span className="flex h-2 w-2 shrink-0 rounded-full bg-accent" />
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-text-primary">
              System.Arch_v2.0
            </span>
            <span className="hidden sm:inline font-mono text-[10px] tracking-[0.2em] uppercase text-accent/80">
              // Online
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-mono text-xs tracking-[0.18em] uppercase text-text-primary/60 hover:text-text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="hidden md:inline-flex items-center gap-2 bg-text-primary text-bg-dark px-5 py-2.5 font-mono text-xs uppercase tracking-[0.18em] font-bold hover:bg-white transition-colors"
            >
              Init System <Terminal size={14} />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-text-primary border border-white/10 rounded-lg bg-white/5"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 px-4 md:hidden">
            <div ref={panelRef} className="glass-panel p-4 rounded-xl">
              <div className="scanline-top" />
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 font-mono text-xs uppercase tracking-[0.18em] text-text-primary/80"
                  >
                    {link.name}{" "}
                    <ChevronRight size={14} className="text-accent" />
                  </a>
                ))}
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 w-full mt-4 bg-text-primary text-bg-dark p-3 rounded-lg font-mono text-xs uppercase tracking-[0.18em] font-bold"
                >
                  Init System <Terminal size={14} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
