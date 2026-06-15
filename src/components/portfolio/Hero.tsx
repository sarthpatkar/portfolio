import { profile } from "@/data/profile";
import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface/50 text-sm text-muted font-mono mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-technical animate-pulse"></span>
          {profile.role}
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-primary mb-6 max-w-4xl">
          Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-technical">intelligent products</span> <br className="hidden md:block" />
          and reliable systems.
        </h1>
        
        <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed mb-10">
          {profile.heroDescription}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link 
            href="#projects" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-background font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            View Projects <ArrowRight className="w-4 h-4" />
          </Link>
          <a 
            href={profile.resume} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-surface border border-border text-primary font-medium rounded-lg hover:bg-elevated transition-colors"
          >
            <FileText className="w-4 h-4" /> Resume
          </a>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-grid-pattern opacity-[0.02] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"></div>
    </section>
  );
}
