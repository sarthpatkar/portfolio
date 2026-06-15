import { twMerge } from "tailwind-merge";

export function SectionHeading({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <h2 className={twMerge("text-3xl font-semibold text-primary tracking-tight mb-8", className)}>
      {children}
    </h2>
  );
}
