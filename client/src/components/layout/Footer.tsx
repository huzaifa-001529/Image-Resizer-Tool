import React from 'react';
import { Link } from 'wouter';
import { Layers, Heart } from 'lucide-react';
import { AdContainer } from '@/components/common/AdContainer';

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <AdContainer size="leaderboard" label="Supported By Our Partners" className="hidden md:flex" />
          <AdContainer size="banner" label="Supported By Our Partners" className="md:hidden" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
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

          <div>
            <h4 className="font-semibold mb-4">Tools</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Format Converter</Link></li>
              <li><Link href="/" className="hover:text-primary transition-colors">Image Resizer</Link></li>
              <li><Link href="/" className="hover:text-primary transition-colors">Image Compressor</Link></li>
              <li><Link href="/" className="hover:text-primary transition-colors">Filters & Effects</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
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

        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
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
