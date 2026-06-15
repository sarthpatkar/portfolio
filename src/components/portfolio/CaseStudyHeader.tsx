import { Project } from "@/data/projects";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";

export function CaseStudyHeader({ project }: { project: Project }) {
  return (
    <div className="pt-24 pb-16 border-b border-border/50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-grid-pattern opacity-[0.02] pointer-events-none [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-primary transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>
        
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded border border-technical/20 text-technical bg-technical/5">
            <span className="w-1.5 h-1.5 rounded-full bg-technical"></span>
            {project.status}
          </span>
          <span className="text-sm font-mono text-muted">{project.type}</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary mb-6">
          {project.title}
        </h1>

        <p className="text-xl text-muted max-w-3xl leading-relaxed mb-10">
          {project.longDescription || project.description}
        </p>

        <div className="flex flex-wrap items-center gap-4">
          {project.url && (
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-background font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Visit Project <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-surface border border-border text-primary font-medium rounded-lg hover:bg-elevated transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg> View Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
