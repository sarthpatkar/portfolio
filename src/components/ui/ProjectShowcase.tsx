import React from 'react';
import { ExternalLink, Code } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import fs from 'fs';
import path from 'path';

interface ProjectShowcaseProps {
  title: string;
  previewImage?: string;
  liveUrl?: string;
  githubUrl?: string;
  className?: string;
}

export function ProjectShowcase({ title, previewImage, liveUrl, githubUrl, className }: ProjectShowcaseProps) {
  // Strip https:// for display
  const displayUrl = liveUrl ? liveUrl.replace(/^https?:\/\//, '') : '';

  let imageExists = false;
  if (previewImage) {
    try {
      imageExists = fs.existsSync(path.join(process.cwd(), 'public', previewImage));
    } catch (e) {
      // ignore
    }
  }

  return (
    <div className={twMerge("flex flex-col border border-border/80 bg-surface/50 rounded-xl overflow-hidden shadow-2xl", className)}>
      {/* Browser Chrome Top Bar */}
      <div className="flex items-center px-4 h-10 border-b border-border/50 bg-elevated/80 shrink-0">
        <div className="flex items-center gap-1.5 mr-4">
          <div className="w-2.5 h-2.5 rounded-full bg-border/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-border/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-border/80"></div>
        </div>
        
        {displayUrl && (
          <div className="flex-1 flex justify-center">
            <div className="flex items-center gap-2 bg-background/50 px-3 py-1 rounded-md border border-border/30 text-xs font-mono text-muted truncate max-w-[200px] sm:max-w-xs">
              <span>{displayUrl}</span>
            </div>
          </div>
        )}

        <div className="flex items-center gap-2 ml-auto">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors p-1 relative z-10" aria-label="View Source">
              <Code className="w-3.5 h-3.5" />
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors p-1 relative z-10" aria-label="Open Live Site">
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* Preview Area */}
      <div className="relative flex-1 bg-background flex flex-col justify-center items-center overflow-hidden min-h-[200px] group">
        {imageExists ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img 
            src={previewImage} 
            alt={`${title} preview`} 
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-surface to-background text-center">
            <div className="w-16 h-16 mb-4 rounded-xl border border-border/40 bg-elevated/20 flex items-center justify-center">
              <span className="font-mono text-xl text-muted/50">{title.charAt(0)}</span>
            </div>
            <p className="text-sm font-mono text-muted/50 uppercase tracking-widest">Preview Unavailable</p>
          </div>
        )}
      </div>
    </div>
  );
}
