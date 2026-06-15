import { twMerge } from "tailwind-merge";

export function CaseStudySection({ 
  title, 
  children, 
  className 
}: { 
  title: string; 
  children: React.ReactNode; 
  className?: string;
}) {
  return (
    <section className={twMerge("py-12 border-b border-border/30 last:border-0", className)}>
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-16">
        <div className="lg:col-span-1">
          <h2 className="text-sm font-mono text-muted uppercase tracking-widest sticky top-24">
            {title}
          </h2>
        </div>
        <div className="lg:col-span-3 prose prose-invert prose-p:text-primary/90 prose-p:leading-relaxed max-w-none">
          {children}
        </div>
      </div>
    </section>
  );
}
