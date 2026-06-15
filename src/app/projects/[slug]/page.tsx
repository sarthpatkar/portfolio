import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { CaseStudyHeader } from "@/components/portfolio/CaseStudyHeader";
import { CaseStudySection } from "@/components/portfolio/CaseStudySection";
import { SpecSheet } from "@/components/ui/SpecSheet";
import { TechBadge } from "@/components/ui/TechBadge";
import { CheckCircle2, GitPullRequest, Target, Lightbulb, Workflow, AlertCircle } from "lucide-react";
import { ProjectShowcase } from "@/components/ui/ProjectShowcase";

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
    <article className="pb-32">
      <CaseStudyHeader project={project} />

      {/* Visual Showcase if available */}
      {project.previewImage && (
        <section className="max-w-5xl mx-auto px-6 -mt-8 relative z-20 mb-16">
          <ProjectShowcase 
            title={project.title}
            previewImage={project.previewImage}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
            className="w-full h-auto aspect-video"
          />
        </section>
      )}

      {/* Quick Specs */}
      <section className="max-w-5xl mx-auto px-6 mb-16">
        <SpecSheet 
          title="Project Specifications"
          items={[
            { label: "Role", value: project.role || "Engineer" },
            { label: "Ownership", value: project.ownership || "Independent" },
            ...(project.team ? [{ label: "Team", value: project.team }] : []),
            { label: "Category", value: project.category || project.type },
          ]}
        />
      </section>

      {/* Engineering Outcomes (Impact & Contribution) */}
      {(project.impact || project.contribution) && (
        <CaseStudySection title="Engineering Outcomes">
          {project.impact && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-accent" /> Impact & Scale
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none pl-0">
                {project.impact.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-surface/30 p-4 rounded-lg border border-border/40">
                    <CheckCircle2 className="w-5 h-5 text-technical shrink-0 mt-0.5" />
                    <span className="text-primary/90 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.contribution && (
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                <GitPullRequest className="w-5 h-5 text-accent" /> Core Contributions
              </h3>
              <ul className="space-y-3 list-none pl-0">
                {project.contribution.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-border mt-2 shrink-0"></span>
                    <span className="text-primary/80 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CaseStudySection>
      )}

      {/* Overview & Problem */}
      {(project.overview || project.problem || project.whyBuilt) && (
        <CaseStudySection title="Context">
          {project.overview && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-3">Overview</h3>
              <p>{project.overview}</p>
            </div>
          )}
          {project.problem && (
            <div className="mb-8 border-l-2 border-technical/50 pl-6 py-1">
              <h3 className="text-lg font-mono text-technical tracking-wide mb-2">The Problem</h3>
              <p className="m-0 text-muted">{project.problem}</p>
            </div>
          )}
          {project.whyBuilt && (
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Motivation</h3>
              <p>{project.whyBuilt}</p>
            </div>
          )}
        </CaseStudySection>
      )}

      {/* Architecture & Stack */}
      <CaseStudySection title="Architecture & Stack">
        {project.architecture && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
              <Workflow className="w-5 h-5 text-accent" /> System Flow
            </h3>
            <p>{project.architecture}</p>
          </div>
        )}
        <div>
          <h3 className="text-xl font-semibold text-primary mb-4">Technical Arsenal</h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map(tech => (
              <TechBadge key={tech} className="px-3 py-1.5 text-sm">{tech}</TechBadge>
            ))}
          </div>
        </div>
      </CaseStudySection>

      {/* Decisions & Challenges */}
      {(project.decisions || project.challenges) && (
        <CaseStudySection title="Engineering Process">
          {project.decisions && (
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-accent" /> Decisions & Trade-offs
              </h3>
              <p>{project.decisions}</p>
            </div>
          )}
          {project.challenges && (
            <div className="bg-surface/30 border border-border/50 rounded-xl p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-technical/5 rounded-full blur-[40px]"></div>
              <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2 relative z-10">
                <AlertCircle className="w-5 h-5 text-technical" /> Technical Challenges
              </h3>
              <p className="m-0 relative z-10">{project.challenges}</p>
            </div>
          )}
        </CaseStudySection>
      )}

      {/* Status & Future */}
      {project.future && (
        <CaseStudySection title="Future">
          <p>{project.future}</p>
        </CaseStudySection>
      )}
    </article>
  );
}
