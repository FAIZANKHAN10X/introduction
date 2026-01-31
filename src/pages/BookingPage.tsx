import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import PageShell from "../components/PageShell";

export default function BookingPage() {
  return (
    <PageShell>
      <Navbar />

      <main className="relative z-10 pb-32 pt-28">
        <section className="relative border-t border-white/10 bg-bg-dark py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="mb-10 flex items-end justify-between border-b border-white/10 pb-6">
              <div>
                <h1 className="font-serif text-3xl md:text-4xl text-text-primary">
                  BOOK A CALL
                </h1>
                <p className="mt-2 font-mono text-xs uppercase tracking-widest text-accent/80">
                  Calendar embed placeholder (CAL ID later)
                </p>
              </div>

              <Link
                to="/#top"
                className="font-mono text-xs uppercase tracking-[0.22em] text-text-primary/60 hover:text-text-primary transition-colors"
              >
                Back To Base
              </Link>
            </div>

            <div className="glass-panel p-8">
              <div className="scanline-top" />
              <p className="font-mono text-sm text-text-primary/70 leading-relaxed">
                Embed goes here later. For now this page confirms routing,
                styling, and redirects.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="mailto:email@example.com"
                  className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-text-primary/70"
                >
                  Email
                </a>

                <Link
                  to="/#faq"
                  className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-text-primary/70"
                >
                  Read FAQ
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
