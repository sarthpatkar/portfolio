import { Hero } from "@/components/portfolio/Hero";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";
import { notes } from "@/data/notes";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { stack } from "@/data/stack";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);
  const recentNotes = notes.slice(0, 3);

  return (
    <div className="flex flex-col gap-32 pb-32">
      <Hero />

      {/* Featured Engineering */}
      <section id="projects" className="max-w-5xl mx-auto px-6 w-full scroll-mt-24">
        <SectionHeading>Featured Engineering</SectionHeading>
        <div className="flex flex-col gap-12">
          {featuredProjects.map(project => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Other Projects */}
      <section className="max-w-5xl mx-auto px-6 w-full">
        <SectionHeading className="mb-6 text-2xl">Other Projects</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map(project => (
            <ProjectCard key={project.slug} project={project} compact={true} />
          ))}
        </div>
      </section>

      {/* Engineering Notes Preview */}
      <section className="max-w-5xl mx-auto px-6 w-full">
        <div className="flex items-end justify-between mb-8">
          <SectionHeading className="mb-0">Engineering Notes</SectionHeading>
          <Link href="/notes" className="text-sm font-medium text-accent hover:text-accent/80 transition-colors flex items-center gap-1">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentNotes.map((note) => (
            <div key={note.slug} className="border border-border/60 bg-surface/40 hover:bg-elevated/80 rounded-xl p-5 transition-all duration-300 hover:border-border/80 hover:-translate-y-1 flex flex-col h-full group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-2 text-muted mb-4 text-xs font-mono">
                  <BookOpen className="w-4 h-4" />
                  {note.isDraft && <span className="uppercase tracking-widest border border-border px-1.5 py-0.5 rounded-sm bg-surface">Draft</span>}
                </div>
                <h3 className="font-semibold text-primary group-hover:text-accent transition-colors mb-2 line-clamp-2">{note.title}</h3>
                <p className="text-sm text-muted line-clamp-3 mt-auto">{note.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="max-w-5xl mx-auto px-6 w-full">
        <SectionHeading>Technical Arsenal</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(stack).map(([category, items]) => (
            <div key={category} className="border border-border/60 bg-surface/40 rounded-xl p-6 relative overflow-hidden group hover:border-border/80 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-technical/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-xs font-mono text-technical uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-sm bg-technical/80"></span>
                {category}
              </h3>
              <div className="flex flex-wrap gap-2 relative z-10">
                {items.map(item => (
                  <TechBadge key={item} className="bg-elevated/50 border-border/60 text-primary/80">{item}</TechBadge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto px-6 w-full scroll-mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeading>About</SectionHeading>
            <div className="prose prose-invert max-w-none">
              <p className="text-primary/90 text-lg leading-relaxed mb-6 font-medium">
                {profile.about}
              </p>
              <p className="text-muted leading-relaxed mb-6">
                I focus on understanding the underlying architecture and trade-offs in systems, prioritizing reliable implementations over hype. Currently studying {profile.education.degree} at {profile.education.university} (Class of {profile.education.graduation}).
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-mono text-muted uppercase tracking-widest mb-6">Selected Credentials</h3>
            <div className="flex flex-col gap-3">
              {profile.certifications.map(c => (
                <div key={c} className="flex items-center gap-3 px-4 py-3 border border-border/50 bg-surface/30 rounded-lg hover:bg-elevated/40 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-border shrink-0"></div>
                  <span className="text-sm text-primary/80 font-medium">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-3xl mx-auto px-6 w-full text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-grid-pattern opacity-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"></div>
        <div className="relative z-10 p-12 border border-border/80 bg-surface/60 rounded-3xl backdrop-blur-md">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">Let&apos;s build something.</h2>
          <p className="text-muted mb-10 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed">
            Currently open for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
          <a 
            href={`mailto:${profile.email}`}
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-background font-medium rounded-xl hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgb(255,255,255,0.1)] hover:shadow-[0_0_40px_rgb(255,255,255,0.2)]"
          >
            Say Hello
          </a>
        </div>
      </section>
    </div>
  );
}
