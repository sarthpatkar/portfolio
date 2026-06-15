import { projects } from "@/data/projects";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-32 min-h-screen">
      <div className="animate-fade-in-up delay-0 mb-20">
        <div className="flex items-center gap-3 mb-8 font-mono text-[10px] text-muted/45 uppercase tracking-[0.25em]">
          <span className="w-6 h-px bg-border/30" />
          Build Log
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-5 leading-[1.1]">Engineering Work</h1>
        <p className="text-muted max-w-xl text-base leading-relaxed">
          An index of systems, products, and pipelines I&apos;ve built. Documenting the problems solved and the technical decisions made.
        </p>
      </div>

      <div className="flex flex-col border-t border-border/20">
        {projects.map((project, index) => {
          const numberStr = (index + 1).toString().padStart(2, '0');
          
          return (
            <div key={project.slug} className="group relative flex flex-col md:flex-row items-start gap-8 md:gap-16 py-12 border-b border-border/10 hover:border-border/40 transition-colors">
              {/* Subtle hover background block */}
              <div className="absolute inset-0 bg-surface/0 group-hover:bg-surface/10 transition-colors duration-500 -mx-6 px-6 z-0 hidden md:block"></div>
              
              {/* Number & Year */}
              <div className="relative z-10 flex items-center md:flex-col md:items-start gap-6 md:gap-3 shrink-0 md:w-24">
                <span className="font-mono text-2xl font-light text-muted/30 group-hover:text-primary transition-colors duration-300">{numberStr}</span>
                <span className="font-mono text-[10px] text-muted uppercase tracking-[0.2em]">{project.year || "2023"}</span>
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col flex-1 w-full">
                <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-4 w-fit group/link mb-8">
                  <h2 className="text-2xl font-bold text-primary group-hover/link:text-accent transition-colors">
                    {project.title}
                  </h2>
                  <div className="flex items-center overflow-hidden">
                    <ArrowRight className="w-5 h-5 text-accent opacity-0 -translate-x-full group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
                  </div>
                </Link>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 mb-8">
                  <div className="flex flex-col gap-3 group/item">
                    <span className="text-[10px] font-mono text-muted uppercase tracking-[0.2em] flex items-center gap-2">
                      <span className="w-0 h-px bg-border/40 group-hover/item:w-3 transition-all duration-300"></span>
                      Category
                    </span>
                    <span className="text-sm font-semibold text-primary/90">{project.category || project.type}</span>
                  </div>
                  
                  <div className="flex flex-col gap-3 group/item">
                    <span className="text-[10px] font-mono text-muted uppercase tracking-[0.2em] flex items-center gap-2">
                      <span className="w-0 h-px bg-border/40 group-hover/item:w-3 transition-all duration-300"></span>
                      Core Problem
                    </span>
                    <span className="text-sm text-primary/80 leading-relaxed line-clamp-2">{project.challenge || project.description}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3 pt-4 border-t border-border/10">
                  <span className="text-[10px] font-mono text-muted uppercase tracking-[0.2em]">Technical Stack</span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] font-mono text-muted px-2.5 py-1 bg-surface/20 border border-border/20 group-hover:border-border/40 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                
                {project.status === "Live" && (
                  <div className="absolute top-0 right-0 flex items-center gap-1.5 font-mono text-[10px] text-green-400/70 uppercase tracking-[0.2em]">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500/70 animate-pulse" />
                    Live
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
