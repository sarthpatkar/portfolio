import { profile } from "@/data/profile";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/10 py-12 mt-24">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">

        {/* Left: identity */}
        <div className="flex flex-col gap-1">
          <span className="text-sm font-semibold text-primary/80">{profile.name}</span>
          <span className="text-xs font-mono text-muted/50">
            Engineering student · Mumbai · {new Date().getFullYear()}
          </span>
        </div>

        {/* Right: links */}
        <div className="flex items-center gap-6 font-mono text-xs text-muted/60">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-primary transition-colors"
          >
            Email
          </a>
          <Link
            href="/about"
            className="hover:text-primary transition-colors inline-flex items-center gap-1 group"
          >
            About <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

      </div>
    </footer>
  );
}
