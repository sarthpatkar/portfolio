import { SectionHeading } from "@/components/ui/SectionHeading";
import { notes } from "@/data/notes";

export default function NotesPage() {
  return (
    <div className="pt-32 pb-32 max-w-3xl mx-auto px-6 w-full">
      <SectionHeading className="mb-4">Engineering Notes</SectionHeading>
      <p className="text-xl text-muted mb-16 leading-relaxed">
        Technical documentation, architectural explorations, and lessons learned from building reliable systems.
      </p>

      <div className="flex flex-col gap-12">
        {notes.map((note, index) => (
          <div key={note.slug} className="relative group">
            {/* Minimal left border indicator */}
            <div className="absolute -left-4 sm:-left-6 top-0 bottom-0 w-[1px] bg-border/40 group-hover:bg-accent/40 transition-colors"></div>
            
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                {index + 1}. {note.title}
              </h2>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {note.isDraft && (
                <span className="uppercase tracking-widest font-mono text-[10px] px-2 py-0.5 border border-border/80 rounded-sm text-muted bg-surface/50">
                  Status: Draft
                </span>
              )}
              {note.relatedProject && (
                <span className="uppercase tracking-widest font-mono text-[10px] px-2 py-0.5 border border-technical/30 rounded-sm text-technical/80 bg-technical/5">
                  Project: {note.relatedProject}
                </span>
              )}
            </div>

            <div className="bg-surface/20 border border-border/40 rounded-lg p-6">
              <h3 className="text-xs font-mono text-muted uppercase tracking-widest mb-4">Explores</h3>
              <ul className="space-y-3 list-none pl-0 m-0">
                {note.explores?.map((explore, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-accent mt-0.5 font-mono text-sm leading-none">↳</span>
                    <span className="text-primary/80 leading-relaxed text-sm">{explore}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
