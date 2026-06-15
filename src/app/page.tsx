import { Hero } from "@/components/portfolio/Hero";
import { notes } from "@/data/notes";
import { projects } from "@/data/projects";
import { stack, StackItem } from "@/data/stack";
import { ArrowRight, ArrowUpRight, Activity, TerminalSquare, LayoutGrid, Zap, Database } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const recentNotes = notes.slice(0, 3);

  const t20 = featuredProjects.find((p) => p.slug === "t20-arena");
  const talent = featuredProjects.find((p) => p.slug === "talent-intelligence-ai");
  const ipo = featuredProjects.find((p) => p.slug === "ipocraft");

  return (
    <div className="flex flex-col gap-28 pb-32">
      <Hero />

      {/* ── Selected Work ─────────────────────────────────────────── */}
      <section id="projects" className="max-w-5xl mx-auto px-6 w-full scroll-mt-24">

        {/* Section header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-20 gap-4 pb-6 border-b border-border/10">
          <div>
            <h2 className="text-2xl font-bold text-primary tracking-tight">Selected Builds</h2>
            <p className="text-muted mt-1.5 text-sm max-w-sm">Projects where I got deep into the problem and had to figure things out.</p>
          </div>
          <Link
            href="/projects"
            className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted hover:text-primary transition-colors flex items-center gap-2 group"
          >
            Full archive <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="flex flex-col gap-28">

          {/* ── T20 Arena: image + text split ── */}
          {t20 && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
              {/* Text */}
              <div className="md:col-span-5 flex flex-col order-2 md:order-1">
                <div className="flex items-center gap-2.5 mb-5">
                  <Activity className="w-3.5 h-3.5 text-accent" />
                  <span className="font-mono text-[10px] text-muted uppercase tracking-[0.2em]">{t20.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3 leading-snug">{t20.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-5">{t20.whyBuilt}</p>
                <div className="flex flex-col gap-1 mb-7 font-mono text-xs text-muted/60 border-l-2 border-border/20 pl-3">
                  {t20.impact?.map((f, i) => <span key={i}>{f}</span>)}
                </div>
                <div className="flex items-center gap-6">
                  <Link
                    href={`/projects/${t20.slug}`}
                    className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-colors"
                  >
                    Case Study <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-px group-hover:translate-x-px transition-transform" />
                  </Link>
                  {t20.liveUrl && (
                    <a href={t20.liveUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-muted hover:text-primary transition-colors font-mono">
                      t20arena.online ↗
                    </a>
                  )}
                </div>
              </div>
              {/* Image */}
              <div className="md:col-span-7 order-1 md:order-2 w-full aspect-[16/10] bg-surface/20 relative overflow-hidden group">
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                {t20.previewImage && (
                  <Image
                    src={t20.previewImage}
                    alt="T20 Arena"
                    fill
                    className="object-cover object-top grayscale-[60%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.02]"
                  />
                )}
              </div>
            </div>
          )}

          {/* ── Talent Intelligence AI: terminal + text ── */}
          {talent && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
              {/* Terminal viz */}
              <div className="md:col-span-6 order-1 bg-[#080c12] border border-border/15 font-mono text-xs overflow-hidden">
                <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border/10">
                  <span className="w-2 h-2 rounded-full bg-border/30" />
                  <span className="w-2 h-2 rounded-full bg-border/30" />
                  <span className="w-2 h-2 rounded-full bg-border/30" />
                  <span className="ml-3 text-muted/30 text-[10px] tracking-wider">pipeline.py</span>
                </div>
                <div className="p-6 flex flex-col gap-2.5 text-green-400/60">
                  <p className="text-muted/30">$ python pipeline.py --dataset=100k_resumes</p>
                  <p>{">"} Loading records ............. [100K]</p>
                  <p>{">"} Extracting signals ........... [OK]</p>
                  <p>{">"} Running scoring formula ...... [OK]</p>
                  <p className="text-amber-400/70 mt-2">{">"} Ranked output generated — deterministic.</p>
                </div>
              </div>
              {/* Text */}
              <div className="md:col-span-6 flex flex-col order-2">
                <div className="flex items-center gap-2.5 mb-5">
                  <TerminalSquare className="w-3.5 h-3.5 text-technical" />
                  <span className="font-mono text-[10px] text-muted uppercase tracking-[0.2em]">{talent.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3 leading-snug">{talent.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">{talent.problem}</p>
                <div className="flex items-center gap-6">
                  <Link
                    href={`/projects/${talent.slug}`}
                    className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-colors"
                  >
                    Case Study <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-px group-hover:translate-x-px transition-transform" />
                  </Link>
                  {talent.githubUrl && (
                    <a href={talent.githubUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-muted hover:text-primary transition-colors font-mono">
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ── IPOCraft: editorial text layout ── */}
          {ipo && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start border-t border-border/10 pt-14">
              <div className="md:col-span-4 flex flex-col">
                <div className="flex items-center gap-2.5 mb-5">
                  <LayoutGrid className="w-3.5 h-3.5 text-muted" />
                  <span className="font-mono text-[10px] text-muted uppercase tracking-[0.2em]">{ipo.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 leading-snug">{ipo.title}</h3>
                <div className="flex items-center gap-6 mt-2">
                  <Link
                    href={`/projects/${ipo.slug}`}
                    className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-colors"
                  >
                    Case Study <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-px group-hover:translate-x-px transition-transform" />
                  </Link>
                  {ipo.liveUrl && (
                    <a href={ipo.liveUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-muted hover:text-primary transition-colors font-mono">
                      ipocraft.com ↗
                    </a>
                  )}
                </div>
              </div>
              <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold text-primary/70">The Problem</span>
                  <p className="text-sm text-muted leading-relaxed">{ipo.problem}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold text-primary/70">Engineering Focus</span>
                  <p className="text-sm text-muted leading-relaxed">{ipo.focus}</p>
                </div>
                <div className="sm:col-span-2 flex flex-wrap gap-1.5 pt-2">
                  {ipo.tech.map((t) => (
                    <span key={t} className="text-[10px] font-mono text-muted/60 border border-border/20 px-2.5 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Arsenal ───────────────────────────────────────────────── */}
      <section id="stack" className="max-w-5xl mx-auto px-6 w-full">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 pb-6 border-b border-border/10">
          <h2 className="text-2xl font-bold text-primary tracking-tight">Arsenal</h2>
          <p className="text-sm text-muted mt-1 sm:mt-0 max-w-xs">Technologies I reach for and why.</p>
        </div>
        <div className="flex flex-col">
          {Object.entries(stack).map(([category, items]) => (
            <div
              key={category}
              className="grid grid-cols-1 md:grid-cols-4 py-7 border-b border-border/10 gap-4 md:gap-8"
            >
              <h3 className="text-xs font-bold text-primary md:col-span-1 uppercase tracking-widest pt-0.5">{category}</h3>
              <div className="md:col-span-3 flex flex-col gap-5">
                {(items as StackItem[]).map((item) => {
                  let Icon = TerminalSquare;
                  if (item.name.includes("React")) Icon = LayoutGrid;
                  if (item.name.includes("Next.js")) Icon = Zap;
                  if (item.name.includes("Supabase") || item.name.includes("SQL")) Icon = Database;
                  if (item.name.includes("Java")) Icon = TerminalSquare;
                  if (item.name.includes("Python")) Icon = Activity;
                  return (
                    <div key={item.name} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 group">
                      <div className="flex items-center gap-2.5 min-w-[170px] shrink-0">
                        <div className="w-5 h-5 border border-border/20 bg-surface/20 flex items-center justify-center group-hover:border-brand-amber/25 group-hover:text-brand-amber transition-colors shrink-0">
                          <Icon className="w-2.5 h-2.5" />
                        </div>
                        <span className="text-sm font-medium text-primary/90">{item.name}</span>
                      </div>
                      <p className="text-sm text-muted group-hover:text-primary/75 transition-colors leading-relaxed">
                        {item.context}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Notes ─────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 w-full">
        <div className="flex items-end justify-between mb-8 pb-6 border-b border-border/10">
          <h2 className="text-2xl font-bold text-primary tracking-tight">Notes</h2>
          <Link
            href="/notes"
            className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted hover:text-primary transition-colors flex items-center gap-2 group"
          >
            View all <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="flex flex-col">
          {recentNotes.map((note) => (
            <Link
              key={note.slug}
              href="/notes"
              className="group flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-border/10 hover:border-border/30 transition-colors"
            >
              <div className="flex flex-col gap-1.5">
                <h3 className="text-base font-medium text-primary group-hover:text-accent transition-colors leading-snug">{note.title}</h3>
                {note.relatedProject && (
                  <span className="text-[10px] font-mono text-muted/50 uppercase tracking-widest">{note.relatedProject}</span>
                )}
              </div>
              <div className="mt-3 sm:mt-0 font-mono text-[10px] text-muted/30 uppercase tracking-widest flex items-center gap-4 shrink-0">
                {note.isDraft && <span className="border border-border/30 px-2 py-0.5">Draft</span>}
                <span className="group-hover:text-primary transition-colors">Read →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
