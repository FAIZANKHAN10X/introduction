import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
};

export default function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-bg-dark text-text-primary selection:bg-accent selection:text-bg-dark">
      <div className="fixed inset-0 z-0 pointer-events-none bg-noise" />
      {children}
    </div>
  );
}
