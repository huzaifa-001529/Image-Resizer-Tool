import React from 'react';
import { Link, useLocation } from 'wouter';
import { Layers, Image, Crop, Minimize2, FileType, Settings, Home, Info, Mail, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useImageStore } from '@/store/useImageStore';

export const Sidebar = () => {
  const [location] = useLocation();
  const { currentTool, setTool } = useImageStore();

  const tools = [
    { id: 'format', name: 'Format Converter', icon: FileType },
    { id: 'resize', name: 'Image Resizer', icon: Crop },
    { id: 'compress', name: 'Image Compressor', icon: Minimize2 },
    { id: 'filters', name: 'Filters & Effects', icon: Image },
  ];

  const pages = [
    { path: '/', name: 'Home', icon: Home },
    { path: '/about', name: 'About', icon: Info },
    { path: '/contact', name: 'Contact', icon: Mail },
    { path: '/privacy', name: 'Privacy', icon: Shield },
  ];

  return (
    <aside className="w-64 bg-sidebar border-r border-border hidden md:flex flex-col h-[calc(100vh-73px)] sticky top-[73px]">
      <div className="p-4 border-b border-border">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Tools</h3>
        <div className="space-y-1">
          {tools.map((tool) => (
            <button
              key={tool.id}
              onClick={() => setTool(tool.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 group relative overflow-hidden",
                currentTool === tool.id && location === '/'
                  ? "bg-primary text-primary-foreground shadow-md" 
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
            >
              <tool.icon size={18} />
              <span>{tool.name}</span>
              {currentTool === tool.id && location === '/' && (
                <div className="absolute inset-0 bg-white/10 animate-pulse-soft pointer-events-none" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Navigation</h3>
        <div className="space-y-1">
          {pages.map((page) => (
            <Link 
              key={page.path} 
              href={page.path}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                location === page.path 
                  ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
              )}
            >
              <page.icon size={18} />
              <span>{page.name}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-auto p-4 border-t border-border">
        <div className="bg-card p-4 rounded-lg border border-border/50">
          <h4 className="font-semibold text-sm mb-1">PixelForge Pro</h4>
          <p className="text-xs text-muted-foreground">v2.0.0 (Beta)</p>
        </div>
      </div>
    </aside>
  );
};
