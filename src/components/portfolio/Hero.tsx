import { profile } from "@/data/profile";
import { ArrowRight, Code } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden">

      {/* Hairline top rule */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/20 to-transparent pointer-events-none" />

      {/* Very subtle radial ambient light — not a glow, just depth */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-accent/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 w-full">

        {/* Identity label */}
        <div className="animate-fade-in delay-0 flex items-center gap-3 mb-10 font-mono text-[10px] text-muted/45 uppercase tracking-[0.25em] select-none">
          <span className="w-6 h-px bg-border/30" />
          {profile.name} · Mumbai, India · B.E. IT · 2028
        </div>

        {/* Main headline — staggered in */}
        <h1 className="animate-fade-in-up delay-100 text-5xl sm:text-6xl lg:text-[5.5rem] font-bold tracking-tight text-primary leading-[1.03] mb-10 max-w-[16ch]">
          I build software to understand{" "}
          <span className="font-serif italic font-normal text-brand-amber">
            how things work.
          </span>
        </h1>

        {/* Short, honest description */}
        <p className="animate-fade-in-up delay-200 text-lg text-muted max-w-xl leading-relaxed mb-12">
          3rd year B.E. IT student at RGIT Mumbai. I ship full-stack products,
          realtime systems, and data pipelines. I learn by building, debugging,
          and improving.
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up delay-300 flex flex-wrap items-center gap-5">
          <Link
            href="#projects"
            className="group flex items-center gap-3 px-6 py-3 bg-primary text-background text-sm font-semibold hover:bg-primary/90 hover:-translate-y-px active:translate-y-0 transition-all"
          >
            See what I&apos;ve built
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors font-mono group"
          >
            <Code className="w-4 h-4 group-hover:text-accent transition-colors" />
            github.com/sarthpatkar
          </a>
        </div>

        {/* Status strip — plain text columns, no boxes */}
        <div className="animate-fade-in delay-500 mt-20 pt-8 border-t border-border/10 grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-6">
          <div className="flex flex-col gap-1.5">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted/40">Currently</span>
            <span className="text-sm text-primary/60">Improving T20 Arena</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted/40">Exploring</span>
            <span className="text-sm text-primary/60">Java Spring Boot APIs</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted/40">Year</span>
            <span className="text-sm text-primary/60">3rd Year · RGIT Mumbai</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted/40">Open to</span>
            <span className="text-sm text-primary/60 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500/70 shrink-0" />
              Software Engineering Internships · 2026
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
