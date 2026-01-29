import { ArrowLeft, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-bg-dark overflow-hidden p-6">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
      <div className="absolute inset-0 bg-vignette pointer-events-none" />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-lg w-full">
        <div className="glass-panel p-8 md:p-12 text-center">
          <div className="scanline-top" />
          
          {/* Error Icon */}
          <div className="inline-flex items-center justify-center p-4 bg-accent/10 rounded-full border border-accent/20 mb-8">
            <AlertTriangle className="w-8 h-8 text-accent" />
          </div>

          {/* Glitchy Text Header */}
          <h1 className="font-serif text-6xl md:text-8xl text-text-primary tracking-tighter mb-2">
            404
          </h1>
          
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-red-400">
              System_Error: Path_Not_Found
            </span>
          </div>

          <p className="font-mono text-sm text-text-primary/60 leading-relaxed mb-10">
            The requested protocol does not exist or has been archived by the administrator. 
            Return to the main terminal to re-initialize.
          </p>

          {/* Action Button */}
          <a 
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-text-primary text-bg-dark font-mono text-xs uppercase tracking-widest font-bold hover:bg-white transition-colors rounded-sm"
          >
            <ArrowLeft size={14} />
            Return to Base
          </a>
          
          {/* Footer Metadata */}
          <div className="mt-12 pt-6 border-t border-white/10 flex justify-between text-[10px] font-mono text-white/20 uppercase tracking-widest">
            <span>Err_Code: 0x404</span>
            <span>Sys_Admin</span>
          </div>
        </div>
      </div>
    </div>
  );
}
