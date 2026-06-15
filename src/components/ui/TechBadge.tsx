import { twMerge } from "tailwind-merge";

export function TechBadge({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <span className={twMerge(
      "inline-block px-2.5 py-1 text-xs font-mono bg-elevated/50 text-primary border border-border/50 rounded",
      className
    )}>
      {children}
    </span>
  );
}
