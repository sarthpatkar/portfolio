import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { CaseStudyHeader } from "@/components/portfolio/CaseStudyHeader";
import { ArchitectureDiagram } from "@/components/ui/ArchitectureDiagram";
import { ExternalLink, Code, LayoutTemplate, PenTool } from "lucide-react";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return notFound();
  }

  return (
    <article className="pb-32 font-sans">
      <CaseStudyHeader project={project} />

      {/* Main Engineering Focus Header */}
      <section className="max-w-4xl mx-auto px-6 mb-16 -mt-4 relative z-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-border/10">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight font-serif">{project.title}</h1>
            <p className="text-xl text-muted/90 font-medium leading-relaxed">{project.description}</p>
          </div>
          
          <div className="flex flex-col gap-3 shrink-0">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-8 px-6 py-3 bg-primary text-background text-sm font-bold hover:bg-primary/90 transition-colors">
                <span>View Live Project</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-8 px-6 py-3 bg-surface/50 border border-border/20 text-primary text-sm font-medium hover:bg-surface hover:border-border/40 transition-colors">
                <span>View Source</span>
                <Code className="w-4 h-4 text-muted" />
              </a>
            )}
          </div>
        </div>
        
        {/* Core Metadata Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 font-mono text-xs">
          <div className="flex flex-col gap-1">
            <span className="text-muted/60 uppercase tracking-widest">Type</span>
            <span className="text-primary">{project.category || project.type}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-muted/60 uppercase tracking-widest">Role</span>
            <span className="text-primary">{project.role || "Developer"}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-muted/60 uppercase tracking-widest">Year</span>
            <span className="text-primary">{project.year}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-muted/60 uppercase tracking-widest">Stack</span>
            <div className="flex flex-wrap gap-x-2 gap-y-1">
              {project.tech.slice(0,3).map(t => <span key={t} className="text-primary/80">{t}</span>)}
              {project.tech.length > 3 && <span className="text-muted">+{project.tech.length - 3} more</span>}
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Content Layout */}
      <div className="max-w-4xl mx-auto px-6 flex flex-col gap-24">
        
        {project.overview && (
          <section className="flex flex-col md:flex-row gap-8 md:gap-16">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest md:w-1/4 shrink-0 mt-1">Context</h2>
            <div className="flex flex-col gap-6 md:w-3/4">
              <p className="text-lg text-primary/90 leading-relaxed font-serif">{project.overview}</p>
              {project.problem && (
                <div className="pl-6 border-l-2 border-amber-500/50 flex flex-col gap-2">
                  <span className="text-[10px] font-mono text-amber-500/80 uppercase tracking-widest">The Problem</span>
                  <p className="text-primary/80 leading-relaxed text-sm">{project.problem}</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Execution facts & engineering work */}
        {(project.impact || project.contribution) && (
          <section className="flex flex-col md:flex-row gap-8 md:gap-16">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest md:w-1/4 shrink-0 mt-1">Execution</h2>
            <div className="flex flex-col gap-10 md:w-3/4">

              {project.impact && (
                <ul className="flex flex-col gap-3">
                  {project.impact.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-sm text-primary/80 leading-relaxed">
                      <span className="font-mono text-muted/40 shrink-0 mt-px tabular-nums">{(idx + 1).toString().padStart(2, '0')}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {project.contribution && (
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] font-mono text-muted uppercase tracking-widest">Key Engineering Work</span>
                  <ul className="flex flex-col gap-4">
                    {project.contribution.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4 pb-4 border-b border-border/5 last:border-0 last:pb-0">
                        <span className="font-mono text-muted/30 shrink-0 mt-px tabular-nums text-xs">{String.fromCharCode(65 + idx)}</span>
                        <span className="text-primary/80 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Architecture — only renders when a visualization exists for this project */}
        {['prompt2craft', 'devicely', 't20-arena', 'talent-intelligence-ai', 'ipocraft'].includes(project.slug) && (
          <section className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest">Architecture Flow</h2>
              <div className="h-px bg-border/10 flex-1" />
            </div>

            <div className="w-full">
              {(project.slug === 'prompt2craft' || project.slug === 'devicely') && (
                <div className="bg-[#0a0a0a] border border-border/10 p-8 md:p-12 font-mono text-sm overflow-x-auto">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0 relative min-w-max">
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-border/15 -z-10" />
                    {project.architecture?.split('→').map((step, idx, arr) => (
                      <div key={idx} className="flex items-center gap-0">
                        <div className={`px-4 py-3 border text-xs whitespace-nowrap ${
                          idx === arr.length - 1
                            ? 'border-amber-500/30 text-amber-400/80 bg-amber-500/5'
                            : 'border-border/30 text-primary/70 bg-[#0a0a0a]'
                        }`}>
                          {step.trim()}
                        </div>
                        {idx < arr.length - 1 && (
                          <span className="text-border/40 mx-2 hidden md:block">→</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.slug === 't20-arena' && (
                <div className="bg-[#0a0a0a] border border-border/10 p-8 md:p-12 flex justify-center">
                  <ArchitectureDiagram slug={project.slug} className="border-none bg-transparent max-w-xl mx-auto w-full" />
                </div>
              )}

              {project.slug === 'talent-intelligence-ai' && (
                <div className="bg-[#0a0a0a] border border-border/10 p-8 md:p-12 font-mono text-sm text-primary/80">
                  <div className="flex flex-col gap-0 max-w-md mx-auto">
                    {[
                      { label: 'Ingest 100K Resume Dataset', highlight: false },
                      { label: 'Extract Contextual Evidence (Python)', highlight: false },
                      { label: 'Score & Rank Deterministically', highlight: true },
                    ].map((step, idx, arr) => (
                      <div key={idx}>
                        <div className={`border p-4 flex items-center gap-3 text-xs ${
                          step.highlight
                            ? 'border-amber-500/30 bg-amber-500/5 text-amber-400/80'
                            : 'border-border/20 bg-background/50'
                        }`}>
                          <span className="font-mono text-muted/30 tabular-nums">{String(idx + 1).padStart(2,'0')}</span>
                          {step.label}
                        </div>
                        {idx < arr.length - 1 && (
                          <div className="w-px h-5 bg-border/15 ml-10" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.slug === 'ipocraft' && (
                <div className="bg-[#0a0a0a] border border-border/10 p-8 md:p-12">
                  <p className="text-muted font-mono text-xs max-w-lg">SSR via Next.js → Supabase PostgreSQL → Structured financial data → Client render. Prioritized SSR and semantic HTML for search engine indexability.</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Deep Dives */}
        {(project.decisions || project.challenges) && (
          <section className="flex flex-col md:flex-row gap-8 md:gap-16 border-t border-border/10 pt-16">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest md:w-1/4 shrink-0 mt-1">Deep Dive</h2>
            <div className="flex flex-col gap-12 md:w-3/4">
              
              {project.decisions && (
                <div className="flex flex-col gap-4">
                  <h3 className="text-lg font-bold text-primary flex items-center gap-3">
                    <LayoutTemplate className="w-5 h-5 text-amber-500/70" /> Engineering Decisions
                  </h3>
                  <p className="text-muted/90 leading-relaxed text-sm">{project.decisions}</p>
                </div>
              )}

              {project.challenges && (
                <div className="flex flex-col gap-4">
                  <h3 className="text-lg font-bold text-primary flex items-center gap-3">
                    <PenTool className="w-5 h-5 text-amber-500/70" /> Challenges Overcome
                  </h3>
                  <p className="text-muted/90 leading-relaxed text-sm">{project.challenges}</p>
                </div>
              )}

            </div>
          </section>
        )}

        {/* Technical Stack Breakdown */}
        <section className="flex flex-col md:flex-row gap-8 md:gap-16 border-t border-border/10 pt-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest md:w-1/4 shrink-0 mt-1">Stack</h2>
          <div className="md:w-3/4 flex flex-wrap gap-2">
            {project.tech.map(t => (
              <span key={t} className="text-sm font-mono text-primary/80 bg-surface/30 border border-border/20 px-3 py-1.5 hover:bg-surface transition-colors">
                {t}
              </span>
            ))}
          </div>
        </section>

      </div>
    </article>
  );
}
