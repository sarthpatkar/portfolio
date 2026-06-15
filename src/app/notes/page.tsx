import { notes } from "@/data/notes";

export default function NotesPage() {
  return (
    <div className="pt-32 pb-32 max-w-3xl mx-auto px-6 w-full">

      {/* ── Header ─────────────────────────────────────────────── */}
      <div className="animate-fade-in-up delay-0 mb-20">
        <div className="flex items-center gap-3 mb-8 font-mono text-[10px] text-muted/45 uppercase tracking-[0.25em]">
          <span className="w-6 h-px bg-border/30" />
          Engineering Journal
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight mb-5 leading-tight">
          Notes &amp; Explorations
        </h1>
        <p className="text-base text-muted leading-relaxed max-w-lg">
          Problems I&apos;ve thought through, decisions I&apos;ve had to make,
          and things I&apos;m still figuring out. All drafts — written as I go.
        </p>
      </div>

      {/* ── Theme legend ───────────────────────────────────────── */}
      <div className="animate-fade-in delay-100 flex flex-wrap gap-2 mb-14">
        {['Realtime Systems', 'Data Pipelines', 'Product Engineering', 'Backend Architecture', 'AI Systems'].map(theme => (
          <span key={theme} className="font-mono text-[10px] uppercase tracking-widest text-muted/50 border border-border/20 px-2.5 py-1">
            {theme}
          </span>
        ))}
      </div>

      {/* ── Notes list ─────────────────────────────────────────── */}
      <div className="flex flex-col border-t border-border/10">
        {notes.map((note, index) => (
          <article
            key={note.slug}
            className="group animate-fade-in-up py-10 border-b border-border/10 hover:border-border/25 transition-colors"
            style={{ animationDelay: `${150 + index * 80}ms` }}
          >
            {/* Number + theme row */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <span className="font-mono text-lg text-muted/15 group-hover:text-primary/20 transition-colors tabular-nums leading-none">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                {note.theme && (
                  <span className="font-mono text-[10px] uppercase tracking-widest text-brand-amber/60 border border-brand-amber/20 px-2 py-0.5">
                    {note.theme}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                {note.isDraft && (
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted/35 border border-border/25 px-2 py-0.5">
                    Draft
                  </span>
                )}
                {note.relatedProject && (
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent/50 border border-accent/15 px-2 py-0.5 hidden sm:block">
                    {note.relatedProject}
                  </span>
                )}
              </div>
            </div>

            {/* Title */}
            <h2 className="text-xl font-semibold text-primary/90 group-hover:text-primary leading-snug mb-3 transition-colors">
              {note.title}
            </h2>

            {/* Description */}
            {note.description && (
              <p className="text-sm text-muted leading-relaxed mb-5 max-w-2xl">
                {note.description}
              </p>
            )}

            {/* Explores — plain list, no card box */}
            {note.explores && note.explores.length > 0 && (
              <ul className="flex flex-col gap-2 mt-4">
                {note.explores.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-primary/45 group-hover:text-primary/55 transition-colors">
                    <span className="text-muted/30 font-mono mt-px shrink-0 text-xs">↳</span>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>

      {/* ── Footer note ────────────────────────────────────────── */}
      <div className="mt-16 pt-8 border-t border-border/10">
        <p className="text-xs font-mono text-muted/35 leading-relaxed">
          These are personal engineering notes — not polished articles. They reflect things I&apos;m
          actively learning, problems I&apos;ve encountered, and decisions I&apos;ve had to make while
          building real projects.
        </p>
      </div>

    </div>
  );
}
