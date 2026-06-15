'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/projects', label: 'Builds' },
  { href: '/notes',    label: 'Notes'  },
  { href: '/about',    label: 'About'  },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-7 inset-x-0 z-50 flex justify-center pointer-events-none px-4">
      <nav className="pointer-events-auto bg-background/75 backdrop-blur-2xl border border-white/[0.07] shadow-[0_4px_32px_rgba(0,0,0,0.5)] rounded-full px-4 py-2 flex items-center justify-between gap-10 transition-all duration-500">

        {/* Logo */}
        <Link href="/" className="flex items-center group" aria-label="Home">
          <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center overflow-hidden relative group-hover:bg-white/[0.08] transition-colors duration-300">
            <span className="text-[11px] text-primary font-serif italic absolute group-hover:-translate-y-full transition-transform duration-500 ease-out">S</span>
            <span className="text-[11px] text-brand-amber font-bold absolute translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">✦</span>
          </div>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-1">
          {links.map(({ href, label }) => {
            const isActive = pathname === href || pathname.startsWith(href + '/');
            return (
              <Link
                key={href}
                href={href}
                className={`relative px-3.5 py-1.5 text-[11px] tracking-wide font-medium transition-colors duration-200 rounded-full ${
                  isActive
                    ? 'text-primary bg-white/[0.06]'
                    : 'text-muted/70 hover:text-primary hover:bg-white/[0.04]'
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-amber" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Contact */}
        <a
          href="mailto:sarthpatkar78@gmail.com"
          className="text-[10px] font-mono text-muted/50 hover:text-primary border border-border/20 hover:border-border/40 px-3 py-1 rounded-full transition-all duration-200 hidden sm:block"
        >
          contact
        </a>

      </nav>
    </div>
  );
}
