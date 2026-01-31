import type { HTMLAttributes, ReactNode } from "react";

type PanelProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  withScanline?: boolean;
};

export default function Panel({
  children,
  className,
  withScanline = true,
  ...rest
}: PanelProps) {
  return (
    <div
      className={["glass-panel", className].filter(Boolean).join(" ")}
      {...rest}
    >
      {withScanline ? <div className="scanline-top" /> : null}
      {children}
    </div>
  );
}
