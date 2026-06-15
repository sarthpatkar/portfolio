import { Project } from "@/data/projects";
import { ArrowLeft, ExternalLink, Code } from "lucide-react";
import Link from "next/link";

export function CaseStudyHeader({ project }: { project: Project }) {
  return (
    <div className="pt-28 pb-12 relative overflow-hidden">

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* Back nav */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-muted/50 hover:text-primary transition-colors mb-14 group uppercase tracking-widest"
        >
          <ArrowLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" />
          All Builds
        </Link>

        {/* Status / type row */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-muted/60">
            <span className={`w-1.5 h-1.5 rounded-full ${project.status === 'Live' ? 'bg-green-500/80' : project.status === 'Active evolving project' ? 'bg-amber-500/80' : 'bg-border/60'}`} />
            {project.status}
          </span>
          <span className="text-border/40 font-mono text-xs">/</span>
          <span className="text-xs font-mono text-muted/50">{project.type}</span>
          {project.year && (
            <>
              <span className="text-border/40 font-mono text-xs">/</span>
              <span className="text-xs font-mono text-muted/50">{project.year}</span>
            </>
          )}
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary mb-6 leading-[1.05]">
          {project.title}
        </h1>

        {/* Description */}
        <p className="text-lg text-muted max-w-2xl leading-relaxed mb-10 font-normal">
          {project.longDescription || project.description}
        </p>

        {/* Actions — flat, no rounded-lg */}
        <div className="flex flex-wrap items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-background text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Visit Project <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          {(project.github || project.githubUrl) && (
            <a
              href={project.github || project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-border/30 text-primary text-sm font-medium hover:bg-surface/50 hover:border-border/50 transition-colors"
            >
              <Code className="w-3.5 h-3.5 text-muted" /> Source Code
            </a>
          )}
        </div>
      </div>

      {/* Hairline bottom separator */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-border/10" />
    </div>
  );
}
