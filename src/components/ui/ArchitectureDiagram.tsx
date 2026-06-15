import React from 'react';
import { ArrowDown } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

interface DiagramStep {
  label: string;
  sub?: string;
}

const DIAGRAMS: Record<string, DiagramStep[]> = {
  "t20-arena": [
    { label: "User Action", sub: "Bid placed by client" },
    { label: "Bid Validation", sub: "Business rules checked" },
    { label: "PostgreSQL RPC", sub: "Atomic state update" },
    { label: "Realtime Sync", sub: "Broadcast to all users" }
  ],
  "talent-intelligence-ai": [
    { label: "Candidate Data", sub: "Raw resume ingestion" },
    { label: "Signal Extraction", sub: "Contextual skill matching" },
    { label: "Evidence Scoring", sub: "Weighted evaluation" },
    { label: "Ranked Output", sub: "Deterministic list" }
  ],
  "ipocraft": [
    { label: "IPO Information", sub: "Raw data aggregation" },
    { label: "Data Organization", sub: "Structured PostgreSQL" },
    { label: "User Interface", sub: "Next.js SSR for SEO" }
  ]
};

interface ArchitectureDiagramProps {
  slug: string;
  className?: string;
}

export function ArchitectureDiagram({ slug, className }: ArchitectureDiagramProps) {
  const steps = DIAGRAMS[slug];

  if (!steps) {
    return (
      <div className={twMerge("w-full h-full flex items-center justify-center bg-surface/50 rounded-xl border border-border/40", className)}>
        <span className="font-mono text-xs text-muted">Diagram unavailable</span>
      </div>
    );
  }

  return (
    <div className={twMerge("w-full h-full flex flex-col items-center justify-center bg-surface/30 rounded-xl border border-border/40 p-8", className)}>
      <div className="flex flex-col items-center gap-2 w-full max-w-[240px]">
        {steps.map((step, i) => (
          <React.Fragment key={i}>
            <div className="w-full bg-background border border-border/60 rounded-lg p-3 text-center shadow-sm">
              <div className="text-sm font-semibold text-primary">{step.label}</div>
              {step.sub && <div className="text-[10px] text-muted font-mono mt-1">{step.sub}</div>}
            </div>
            {i < steps.length - 1 && (
              <div className="py-1">
                <ArrowDown className="w-4 h-4 text-muted/60" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
