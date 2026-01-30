import { ArrowRight, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-end pb-24 px-6 md:px-12 lg:px-24 overflow-hidden pt-32">
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-image.avif"
          alt="Faizan Khan AI Automation Consultant UAE"
          className="h-full w-full object-cover opacity-80"
          loading="eager"
        />
        <div className="absolute inset-0 bg-vignette" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/50 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-[1.5fr_1fr] gap-16 items-end">
        <div className="space-y-8">
          <div className="font-serif leading-none tracking-tighter">
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-text-primary">
              Faizan Khan
            </h1>
            <h2 className="text-3xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#6f481e] to-text-primary italic">
              AI Automation Consultant & Systems Architect
            </h2>
          </div>

          <p className="max-w-2xl text-lg md:text-xl font-mono text-text-primary/80 leading-relaxed">
            AI Automation Consultant in UAE specializing in enterprise AI
            workflow automation, n8n systems, industrial automation
            architecture, and scalable AI infrastructure.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-8 py-4 bg-text-primary text-bg-dark font-mono text-sm uppercase tracking-wider font-bold flex items-center gap-2">
              Work With Me <Terminal size={16} />
            </button>
            <button className="px-8 py-4 border border-text-primary/20 text-text-primary font-mono text-sm uppercase tracking-wider flex items-center gap-2">
              View Projects <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
