import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface SpecItem {
  label: string;
  value: React.ReactNode;
}

export function SpecSheet({ title, items, className }: { title?: string, items: SpecItem[], className?: string }) {
  return (
    <div className={twMerge("border border-border/80 bg-surface/80 rounded-lg overflow-hidden backdrop-blur-sm relative", className)}>
      {/* Subtle top highlight */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
      
      {title && (
        <div className="border-b border-border/80 bg-elevated/40 px-5 py-3 flex items-center justify-between">
          <h3 className="text-sm font-mono text-technical tracking-widest uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-technical rounded-sm"></span>
            {title}
          </h3>
        </div>
      )}
      
      <div className="divide-y divide-border/50">
        {items.map((item, idx) => (
          <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline px-5 py-3 gap-2 sm:gap-6 hover:bg-elevated/30 transition-colors group">
            <dt className="text-xs font-mono text-muted uppercase tracking-wider w-36 shrink-0 group-hover:text-primary/70 transition-colors">
              {item.label}
            </dt>
            <dd className="text-sm text-primary font-medium w-full">
              {item.value}
            </dd>
          </div>
        ))}
      </div>
    </div>
  );
}
