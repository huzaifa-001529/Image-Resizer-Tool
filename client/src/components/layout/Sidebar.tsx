import React from 'react';
import { Link, useLocation } from 'wouter';
import { Layers, Image, Crop, Minimize2, FileType, Home, Info, Mail, Shield, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useImageStore } from '@/store/useImageStore';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';

interface SidebarProps {
  onItemClick?: () => void;
  className?: string;
}

export const Sidebar = ({ onItemClick, className }: SidebarProps) => {
  const [location, setLocation] = useLocation();
  const { currentTool, setTool } = useImageStore();

  const handleToolClick = (toolId: string) => {
    setTool(toolId);
    if (location !== '/') setLocation('/');
    onItemClick?.();
  };

  const handleLinkClick = () => {
    onItemClick?.();
  };

  return (
    <aside className={cn("w-full md:w-64 bg-sidebar border-r border-border flex flex-col h-full", className)}>
      <div className="p-6 flex items-center gap-2 md:hidden border-b border-sidebar-border">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
          <Layers className="text-white w-5 h-5" />
        </div>
        <span className="font-bold text-lg">PixelForge Pro</span>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="mb-6">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2">Tools</h3>
          <div className="space-y-1">
            <SidebarItem 
              active={currentTool === 'format' && location === '/'} 
              onClick={() => handleToolClick('format')} 
              icon={FileType}
              label="Format Converter"
            />
            <SidebarItem 
              active={currentTool === 'resize' && location === '/'} 
              onClick={() => handleToolClick('resize')} 
              icon={Crop}
              label="Image Resizer"
            />
            <SidebarItem 
              active={currentTool === 'compress' && location === '/'} 
              onClick={() => handleToolClick('compress')} 
              icon={Minimize2}
              label="Image Compressor"
            />
            <SidebarItem 
              active={currentTool === 'filters' && location === '/'} 
              onClick={() => handleToolClick('filters')} 
              icon={Image}
              label="Filters & Effects"
            />
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2">Menu</h3>
          <div className="space-y-1">
            <Link href="/">
               <a onClick={handleLinkClick} className={cn("flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors", location === '/' ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-foreground hover:bg-sidebar-accent/50")}>
                  <Home size={18} />
                  <span>Home</span>
               </a>
            </Link>
            <Link href="/about">
               <a onClick={handleLinkClick} className={cn("flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors", location === '/about' ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-foreground hover:bg-sidebar-accent/50")}>
                  <Info size={18} />
                  <span>About</span>
               </a>
            </Link>
            <Link href="/contact">
               <a onClick={handleLinkClick} className={cn("flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors", location === '/contact' ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-foreground hover:bg-sidebar-accent/50")}>
                  <Mail size={18} />
                  <span>Contact</span>
               </a>
            </Link>
          </div>
        </div>

        {/* Mobile only additional menu items */}
        <div className="md:hidden">
           <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2">Legal</h3>
           <div className="space-y-1">
             <Link href="/privacy">
                <a onClick={handleLinkClick} className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors">
                   <Shield size={18} />
                   <span>Privacy Policy</span>
                </a>
             </Link>
             <Link href="/terms">
                <a onClick={handleLinkClick} className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors">
                   <BookOpen size={18} />
                   <span>Terms of Service</span>
                </a>
             </Link>
           </div>
        </div>
      </div>

      <div className="mt-auto p-4 border-t border-sidebar-border">
        <div className="bg-sidebar-accent/50 p-4 rounded-lg border border-sidebar-border">
          <h4 className="font-semibold text-sm mb-1">PixelForge Pro</h4>
          <p className="text-xs text-muted-foreground">v2.0.0 (Beta)</p>
        </div>
      </div>
    </aside>
  );
};

const SidebarItem = ({ active, onClick, icon: Icon, label }: { active: boolean, onClick: () => void, icon: any, label: string }) => (
  <button
    onClick={onClick}
    className={cn(
      "w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 group relative overflow-hidden",
      active
        ? "bg-primary text-primary-foreground shadow-md" 
        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
    )}
  >
    <Icon size={18} />
    <span>{label}</span>
    {active && (
      <div className="absolute inset-0 bg-white/10 animate-pulse-soft pointer-events-none" />
    )}
  </button>
);
