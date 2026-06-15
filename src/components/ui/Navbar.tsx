import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-medium text-primary hover:text-accent transition-colors">
          SP
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium text-muted">
          <Link href="/#projects" className="hover:text-primary transition-colors">Projects</Link>
          <Link href="/notes" className="hover:text-primary transition-colors">Engineering Notes</Link>
          <Link href="/#about" className="hover:text-primary transition-colors">About</Link>
        </div>
      </div>
    </nav>
  );
}
