import Link from 'next/link';
import { Project } from '@/data/projects';
import { ArrowRight } from 'lucide-react';
import { TechBadge } from '../ui/TechBadge';
import { ProjectShowcase } from '../ui/ProjectShowcase';

export function ProjectCard({ project, compact = false }: { project: Project, compact?: boolean }) {
  if (compact) {
    return (
      <Link href={`/projects/${project.slug}`} className="group block h-full">
        <div className="h-full border border-border/60 bg-surface/40 hover:bg-elevated/80 rounded-xl p-5 transition-all duration-300 hover:border-border/80 hover:-translate-y-1 relative overflow-hidden flex flex-col">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-semibold text-primary group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            {project.status === 'Early Stage' && (
              <span className="text-[10px] uppercase tracking-wider font-mono text-muted border border-border px-2 py-0.5 rounded-sm bg-surface">
                {project.status}
              </span>
            )}
          </div>
          
          <p className="text-sm text-muted mb-6 flex-grow leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {project.tech.slice(0, 3).map(t => (
              <TechBadge key={t} className="text-[10px] px-1.5 py-0.5 bg-background/50 border-border/40 text-muted">{t}</TechBadge>
            ))}
            {project.tech.length > 3 && (
              <span className="text-[10px] text-muted font-mono self-center px-1">+{project.tech.length - 3}</span>
            )}
          </div>
        </div>
      </Link>
    );
  }

  // Featured Project Card
  return (
    <div className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-border/40 bg-surface/20 rounded-2xl p-6 sm:p-8 hover:bg-surface/30 transition-all duration-300">
      {/* Project Info Section */}
      <div className="lg:col-span-5 flex flex-col z-10 order-2 lg:order-1">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded border border-border/50 text-muted bg-surface/50">
            {project.status === "Live" && <span className="w-1.5 h-1.5 rounded-full bg-technical animate-pulse"></span>}
            {project.status}
          </span>
          <span className="font-mono text-xs text-technical/80 tracking-wide">
            {project.category}
          </span>
        </div>
        
        <h3 className="text-3xl font-bold text-primary mb-4">
          {project.title}
        </h3>
        
        {project.challenge ? (
          <div className="mb-6 border-l-2 border-border pl-4">
            <p className="text-xs font-mono text-muted uppercase tracking-widest mb-1.5">Challenge</p>
            <p className="text-primary/90 text-sm leading-relaxed">{project.challenge}</p>
          </div>
        ) : (
          <p className="text-muted leading-relaxed mb-6">
            {project.description}
          </p>
        )}

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.slice(0, 4).map(t => (
            <TechBadge key={t} className="bg-surface border-border/60 text-primary/80">{t}</TechBadge>
          ))}
          {project.tech.length > 4 && (
            <span className="text-xs text-muted font-mono self-center px-1">+{project.tech.length - 4}</span>
          )}
        </div>

        <Link 
          href={`/projects/${project.slug}`} 
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-background font-medium rounded-lg hover:bg-primary/90 hover:scale-[1.02] transition-all duration-300 w-fit"
        >
          Read Case Study <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Project Showcase Section */}
      <div className="lg:col-span-7 order-1 lg:order-2">
        <ProjectShowcase 
          title={project.title}
          previewImage={project.previewImage}
          liveUrl={project.liveUrl}
          githubUrl={project.githubUrl}
          className="h-[300px] sm:h-[400px] transition-all duration-500 border-border/40 hover:border-border/80"
        />
      </div>
    </div>
  );
}
