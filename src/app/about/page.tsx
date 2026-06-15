import { profile } from "@/data/profile";
import Image from "next/image";
import { Mail, Code, Briefcase, ExternalLink } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-32 min-h-screen">
      <div className="flex flex-col md:flex-row gap-20 items-start">
        
        {/* Left Column: Image and Links */}
        <div className="w-full md:w-1/3 flex flex-col gap-8 shrink-0 md:sticky md:top-32 items-center md:items-start">
          {/* Profile image — no grayscale hover, properly sized */}
          <div className="w-36 sm:w-40 md:w-full max-w-[200px] md:max-w-none aspect-square relative overflow-hidden bg-surface/50 border border-border/15">
            <Image
              src="/images/sarth.jpeg"
              alt="Sarth Patkar"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          <div className="flex flex-col gap-1 text-sm font-mono tracking-tight w-full max-w-[16rem] md:max-w-none">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-muted hover:text-primary transition-colors py-2 border-b border-border/10 group">
              <Mail className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" /> sarthpatkar78@gmail.com
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted hover:text-primary transition-colors py-2 border-b border-border/10 group">
              <Code className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted hover:text-primary transition-colors py-2 border-b border-border/10 group">
              <Briefcase className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" /> LinkedIn
            </a>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted hover:text-primary transition-colors py-2 mt-4 group">
              <ExternalLink className="w-4 h-4 group-hover:text-brand-amber transition-colors" /> <span className="group-hover:text-brand-amber transition-colors">View Full Resume</span>
            </a>
          </div>
        </div>


        {/* Right Column: Content */}
        <div className="w-full md:w-2/3 flex flex-col gap-24 font-sans">
          
          <section>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 tracking-tight font-serif italic">About Sarth</h1>
            <div className="flex flex-col gap-5 text-muted leading-relaxed">
              <p className="text-lg text-primary/85 leading-relaxed">
                I started building software by following tutorials. Then I got curious about why things broke — so I started building projects to actually understand them.
              </p>
              <p>
                Right now I&apos;m completing my {profile.education.degree} at {profile.education.university} (Class of {profile.education.graduation}, CGPA {profile.education.cgpa}). Outside of coursework, I spend my time building real products: a realtime multiplayer auction system, a candidate ranking pipeline, a finance platform, and a few more.
              </p>
              <p>
                {profile.about}
              </p>
            </div>
          </section>

          {/* Timeline Story */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-12 tracking-tight">Progression</h2>
            
            <div className="flex flex-col relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:via-border/30 before:to-transparent">
              
              {/* 2024 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-16">
                <div className="flex items-center justify-center w-8 h-8 rounded-full border border-border/30 bg-background text-muted group-hover:text-primary group-hover:border-primary/50 group-hover:scale-110 transition-all duration-300 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-current transition-colors"></span>
                </div>
                <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] flex flex-col px-4 md:px-0">
                  <span className="font-mono text-[10px] text-muted uppercase tracking-[0.2em] mb-2">2024</span>
                  <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Started IT Engineering</h3>
                  <p className="text-sm text-muted">Established strong programming fundamentals, focusing on C++ and basic web architectures.</p>
                </div>
              </div>

              {/* 2025 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-16">
                <div className="flex items-center justify-center w-8 h-8 rounded-full border border-border/30 bg-background text-muted group-hover:text-primary group-hover:border-primary/50 group-hover:scale-110 transition-all duration-300 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-current transition-colors"></span>
                </div>
                <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] flex flex-col px-4 md:px-0 md:text-right">
                  <span className="font-mono text-[10px] text-muted uppercase tracking-[0.2em] mb-2">2025</span>
                  <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Building Foundations</h3>
                  <p className="text-sm text-muted mb-4">Transitioned from learning concepts to executing complete, functioning applications.</p>
                  <span className="text-[10px] font-mono text-primary/80 bg-surface/30 border border-border/20 px-2.5 py-1 w-fit md:ml-auto">MeetSync</span>
                </div>
              </div>

              {/* 2026 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-8 h-8 rounded-full border border-technical/50 bg-technical/5 text-technical group-hover:bg-technical group-hover:text-background group-hover:scale-110 transition-all duration-300 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(var(--technical),0.2)] z-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-current transition-colors"></span>
                </div>
                <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] flex flex-col px-4 md:px-0">
                  <span className="font-mono text-[10px] text-technical uppercase tracking-[0.2em] mb-2">2026</span>
                  <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Architecting Systems</h3>
                  <p className="text-sm text-muted mb-5">Currently building complex domains: state synchronization, data pipelines, and full product lifecycles.</p>
                  <div className="flex flex-col gap-2.5">
                    <span className="text-xs text-primary/90 flex items-center gap-2 group/item"><span className="w-3 h-px bg-technical/50 group-hover/item:w-4 transition-all"></span>Realtime: <span className="font-mono text-muted text-[10px] uppercase tracking-widest border border-border/20 px-1.5 py-0.5">T20 Arena</span></span>
                    <span className="text-xs text-primary/90 flex items-center gap-2 group/item"><span className="w-3 h-px bg-technical/50 group-hover/item:w-4 transition-all"></span>Intelligence: <span className="font-mono text-muted text-[10px] uppercase tracking-widest border border-border/20 px-1.5 py-0.5">Talent Intelligence AI</span></span>
                    <span className="text-xs text-primary/90 flex items-center gap-2 group/item"><span className="w-3 h-px bg-technical/50 group-hover/item:w-4 transition-all"></span>Finance: <span className="font-mono text-muted text-[10px] uppercase tracking-widest border border-border/20 px-1.5 py-0.5">IPOCraft</span></span>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Areas I Keep Exploring */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-10 tracking-tight">Areas of Exploration</h2>
            <div className="flex flex-col gap-12">
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start group">
                <span className="font-mono text-muted/30 group-hover:text-primary transition-colors text-xl mt-0.5 font-light">01</span>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-3">
                    <span className="w-0 h-px bg-accent group-hover:w-4 transition-all duration-300"></span>
                    Backend Reliability
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    Small implementation decisions dictate whether applications survive contact with real users. I focus on understanding transaction locks, atomic updates, and state consistency when multiple connections interact simultaneously.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start group">
                <span className="font-mono text-muted/30 group-hover:text-primary transition-colors text-xl mt-0.5 font-light">02</span>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-3">
                    <span className="w-0 h-px bg-accent group-hover:w-4 transition-all duration-300"></span>
                    Information Systems
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    Search, ranking, and organization decide how people extract utility from data. I build pipelines to extract deterministic signals from unstructured text rather than relying on brittle keyword matching.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start group">
                <span className="font-mono text-muted/30 group-hover:text-primary transition-colors text-xl mt-0.5 font-light">03</span>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-3">
                    <span className="w-0 h-px bg-accent group-hover:w-4 transition-all duration-300"></span>
                    Finance + Software
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    Financial products require absolute clarity, trust, and rigorous engineering. I explore this intersection by building platforms that structure and serve dense financial data efficiently to end-users.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* Credentials */}
          <section className="pt-8 border-t border-border/10">
            <h2 className="text-[10px] font-mono text-muted uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
              <span className="w-2 h-2 border border-muted/50 rotate-45"></span>
              Selected Credentials
            </h2>
            <div className="flex flex-col font-mono text-sm">
              {(profile.certifications as {name: string, provider: string, area: string}[]).map((c, i) => (
                <div key={i} className="group flex justify-between items-center py-3 border-b border-border/10 hover:border-border/30 transition-colors">
                  <span className="text-muted group-hover:text-primary transition-colors flex items-center gap-3">
                    <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-accent text-[10px]">►</span>
                    {c.name}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted/40 group-hover:text-muted/80 transition-colors">{c.provider}</span>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
