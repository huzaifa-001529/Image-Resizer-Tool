import React from 'react';
import { Link, useLocation } from 'wouter';
import { Layers, Heart, ChevronDown } from 'lucide-react';
import { AdContainer } from '@/components/common/AdContainer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useImageStore } from '@/store/useImageStore';

export const Footer = () => {
  const { setTool } = useImageStore();
  const [, setLocation] = useLocation();

  const handleToolClick = (toolId: string) => {
    setTool(toolId);
    setLocation('/');
  };

  const FooterSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="hidden md:block">
      <h4 className="font-semibold mb-4 text-foreground">{title}</h4>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {children}
      </ul>
    </div>
  );

  const FooterLink = ({ href, onClick, children }: { href?: string, onClick?: () => void, children: React.ReactNode }) => {
    if (onClick) {
      return (
        <li>
          <button onClick={onClick} className="hover:text-primary transition-colors text-left w-full">
            {children}
          </button>
        </li>
      );
    }
    return (
      <li>
        <Link href={href!}>
          <a className="hover:text-primary transition-colors">{children}</a>
        </Link>
      </li>
    );
  };

  return (
    <footer className="bg-card border-t border-border mt-auto pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <AdContainer size="leaderboard" label="Supported By Our Partners" className="hidden md:flex" />
          <AdContainer size="banner" label="Supported By Our Partners" className="md:hidden" />
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-4 gap-8 mb-12">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Layers className="text-white w-5 h-5" />
              </div>
              <span className="font-bold text-lg">PixelForge Pro</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Professional client-side image processing tools. Secure, fast, and free forever.
            </p>
          </div>

          <FooterSection title="Tools">
            <FooterLink onClick={() => handleToolClick('format')}>Format Converter</FooterLink>
            <FooterLink onClick={() => handleToolClick('resize')}>Image Resizer</FooterLink>
            <FooterLink onClick={() => handleToolClick('compress')}>Image Compressor</FooterLink>
            <FooterLink onClick={() => handleToolClick('filters')}>Filters & Effects</FooterLink>
          </FooterSection>

          <FooterSection title="Company">
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/terms">Terms of Service</FooterLink>
          </FooterSection>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Newsletter</h4>
            <p className="text-xs text-muted-foreground mb-4">Subscribe to get the latest updates and features.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-background border border-border rounded px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary text-white px-3 py-2 rounded text-sm font-medium hover:bg-primary/90 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden mb-12">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Layers className="text-white w-5 h-5" />
            </div>
            <span className="font-bold text-lg">PixelForge Pro</span>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="tools">
              <AccordionTrigger>Tools</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-sm text-muted-foreground pl-4">
                  <FooterLink onClick={() => handleToolClick('format')}>Format Converter</FooterLink>
                  <FooterLink onClick={() => handleToolClick('resize')}>Image Resizer</FooterLink>
                  <FooterLink onClick={() => handleToolClick('compress')}>Image Compressor</FooterLink>
                  <FooterLink onClick={() => handleToolClick('filters')}>Filters & Effects</FooterLink>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="company">
              <AccordionTrigger>Company</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-sm text-muted-foreground pl-4">
                  <FooterLink href="/about">About Us</FooterLink>
                  <FooterLink href="/contact">Contact</FooterLink>
                  <FooterLink href="/privacy">Privacy Policy</FooterLink>
                  <FooterLink href="/terms">Terms of Service</FooterLink>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="newsletter">
              <AccordionTrigger>Newsletter</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2">
                  <p className="text-xs text-muted-foreground">Subscribe to get the latest updates and features.</p>
                  <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="bg-background border border-border rounded px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button className="bg-primary text-white px-3 py-2 rounded text-sm font-medium hover:bg-primary/90 transition-colors">
                      Join
                    </button>
                  </form>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} PixelForge Pro. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>by PixelForge Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
