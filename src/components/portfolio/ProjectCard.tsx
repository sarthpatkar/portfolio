import Link from 'next/link';
import { Project } from '@/data/projects';
import { TechBadge } from '../ui/TechBadge';
import { ArchitectureDiagram } from '../ui/ArchitectureDiagram';
import { ExternalLink, Code } from 'lucide-react';

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
    <div className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch border border-border/40 bg-surface/20 rounded-2xl p-6 sm:p-8 hover:bg-surface/30 transition-all duration-300">
      {/* Project Info Section */}
      <div className="lg:col-span-6 flex flex-col z-10 order-2 lg:order-1 justify-center">
        <h3 className="text-2xl font-bold text-primary mb-2">
          {project.title}
        </h3>
        
        <p className="text-muted text-sm mb-6 font-medium">
          {project.description}
        </p>

        <div className="flex flex-col gap-4 mb-8">
          {project.challenge && (
            <div>
              <p className="text-[10px] font-mono text-muted uppercase tracking-widest mb-1">Challenge</p>
              <p className="text-primary/90 text-sm leading-relaxed">{project.challenge}</p>
            </div>
          )}
          {project.focus && (
            <div>
              <p className="text-[10px] font-mono text-muted uppercase tracking-widest mb-1">Engineering Focus</p>
              <p className="text-primary/90 text-sm leading-relaxed">{project.focus}</p>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-4 mt-auto pt-4 border-t border-border/30">
          <Link 
            href={`/projects/${project.slug}`} 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-background text-sm font-medium rounded hover:bg-primary/90 transition-all duration-300 w-fit"
          >
            Read Engineering Breakdown
          </Link>
          
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-accent transition-colors">
                <ExternalLink className="w-3.5 h-3.5" /> Open Product
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-primary transition-colors">
                <Code className="w-3.5 h-3.5" /> Source
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Project Diagram Section */}
      <div className="lg:col-span-6 order-1 lg:order-2 flex items-center justify-center">
        <ArchitectureDiagram 
          slug={project.slug} 
          className="h-full min-h-[300px] transition-all duration-500 hover:border-border/80" 
        />
      </div>
    </div>
  );
}
