import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Sidebar } from './Sidebar';

interface LayoutWrapperProps {
  children: React.ReactNode;
  showSidebar?: boolean;
}

export const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children, showSidebar = true }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-primary/30">
      <Header />
      <div className="flex flex-1 container mx-auto px-4 max-w-7xl md:gap-8 pt-6">
        {showSidebar && <Sidebar className="hidden md:flex shrink-0" />}
        <main className="flex-1 w-full pb-12 min-w-0">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};
