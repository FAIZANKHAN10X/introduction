import type { ReactNode } from "react";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  right?: ReactNode;
  className?: string;
};

export default function SectionHeader({
  title,
  subtitle,
  right,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-12 flex items-end justify-between border-b border-white/10 pb-6 ${className}`}
    >
      <div>
        <h2 className="font-serif text-3xl md:text-4xl text-text-primary">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-2 font-mono text-xs uppercase tracking-widest text-accent/80">
            {subtitle}
          </p>
        ) : null}
      </div>

      {right ? (
        <div className="hidden md:block font-mono text-xs text-white/30 tracking-widest">
          {right}
        </div>
      ) : null}
    </div>
  );
}
