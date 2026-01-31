import type { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  children: ReactNode;
  className?: string;

  /** Keep true so hash navigation lands below the fixed navbar. */
  scrollMtClassName?: string;

  /** Turn off if a section explicitly needs no border. */
  withBorder?: boolean;
};

export default function SectionShell({
  id,
  children,
  className = "",
  scrollMtClassName = "scroll-mt-28",
  withBorder = true,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={[
        "relative bg-bg-dark",
        withBorder ? "border-t border-white10" : "",
        scrollMtClassName,

        // Height + vertical layout: mobile/top, desktop/center (your choice B)
        "min-h-screen",
        "flex",
        "items-stretch",
        "py-16 sm:py-20", // controlled, consistent section padding (no parent gap needed)
        "md:py-0", // on desktop we rely on centering instead of padding
        "md:items-center",
        className,
      ].join(" ")}
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {children}
      </div>
    </section>
  );
}
