import React from 'react';
import { cn } from '@/lib/utils';

interface AdContainerProps {
  size: 'leaderboard' | 'rectangle' | 'skyscraper' | 'banner';
  className?: string;
  label?: string;
}

export const AdContainer: React.FC<AdContainerProps> = ({ size, className, label = 'Advertisement' }) => {
  const getSizeClass = () => {
    switch (size) {
      case 'leaderboard': return 'h-[90px] w-full max-w-[728px]';
      case 'rectangle': return 'h-[250px] w-[300px]';
      case 'skyscraper': return 'h-[600px] w-[300px]';
      case 'banner': return 'h-[50px] w-full max-w-[320px]';
      default: return 'h-auto w-auto';
    }
  };

  return (
    <div className={cn("flex flex-col items-center justify-center my-4 mx-auto", className)}>
      <div className={cn(
        "bg-card border border-border/50 rounded-lg flex items-center justify-center relative overflow-hidden group",
        getSizeClass()
      )}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-50" />
        <div className="text-muted-foreground text-xs font-mono uppercase tracking-widest z-10">
          {label}
        </div>
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
};
