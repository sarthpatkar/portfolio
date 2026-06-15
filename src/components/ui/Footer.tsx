import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border mt-24 py-12">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-muted font-mono">
          © {new Date().getFullYear()} {profile.name}.
        </div>
        <div className="flex items-center gap-6 text-sm font-medium text-muted">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
          <a href={`mailto:${profile.email}`} className="hover:text-primary transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
