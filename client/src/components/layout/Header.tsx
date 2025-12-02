import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Layers, Sparkles, Menu, Github, ChevronDown, FileType, Crop, Minimize2, Image, BookOpen, Shield, Mail, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useImageStore } from '@/store/useImageStore';
import { Sidebar } from './Sidebar';
import { cn } from '@/lib/utils';

export const Header = () => {
  const { setTool } = useImageStore();
  const [location, setLocation] = useLocation();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleToolClick = (toolId: string) => {
    setTool(toolId);
    if (location !== '/') setLocation('/');
    
    // Show popup message
    alert('Please upload the image here');
    
    // Scroll to image uploader section
    setTimeout(() => {
      const uploaderElement = document.getElementById('image-uploader-section');
      if (uploaderElement) {
        uploaderElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 500);
  };

  return (
    <header className="h-[73px] border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full">
      {/* Shimmer Effect Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-[shimmer_3s_infinite]" />
      </div>

      <div className="container mx-auto px-4 h-full flex items-center justify-between relative z-10">
        <div className="flex items-center gap-4">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-72 [&>button]:hidden">
              <Sidebar onItemClick={() => setIsSheetOpen(false)} />
            </SheetContent>
          </Sheet>
          
          <Link href="/">
            <a className="flex items-center gap-2 group">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary shadow-lg group-hover:scale-105 transition-transform duration-300">
                <Layers className="text-white w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                  PixelForge
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold leading-none">Pro</span>
              </div>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block ml-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 w-[400px] md:w-[500px] lg:w-[600px] lg:grid-cols-2 bg-popover">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/50 to-secondary/50 p-6 no-underline outline-none focus:shadow-md hover:scale-[1.02] transition-transform"
                            href="/"
                            onClick={() => handleToolClick('format')}
                          >
                            <Layers className="h-6 w-6 text-white" />
                            <div className="mb-2 mt-4 text-lg font-medium text-white">
                              PixelForge Suite
                            </div>
                            <p className="text-sm leading-tight text-white/90">
                              All-in-one professional image processing directly in your browser.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem title="Format Converter" icon={<FileType className="w-4 h-4" />} onClick={() => handleToolClick('format')}>
                        Convert between JPG, PNG, WEBP and more.
                      </ListItem>
                      <ListItem title="Image Resizer" icon={<Crop className="w-4 h-4" />} onClick={() => handleToolClick('resize')}>
                        Resize images with pixel-perfect precision.
                      </ListItem>
                      <ListItem title="Image Compressor" icon={<Minimize2 className="w-4 h-4" />} onClick={() => handleToolClick('compress')}>
                        Reduce file size without losing quality.
                      </ListItem>
                      <ListItem title="Filters & Effects" icon={<Image className="w-4 h-4" />} onClick={() => handleToolClick('filters')}>
                        Apply professional filters and adjustments.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-popover">
                      <ListItem title="About Us" href="/about" icon={<Info className="w-4 h-4" />}>
                        Learn about our mission and technology.
                      </ListItem>
                      <ListItem title="Contact" href="/contact" icon={<Mail className="w-4 h-4" />}>
                        Get in touch with our support team.
                      </ListItem>
                      <ListItem title="Privacy Policy" href="/privacy" icon={<Shield className="w-4 h-4" />}>
                        How we handle your data securely.
                      </ListItem>
                      <ListItem title="Terms of Service" href="/terms" icon={<BookOpen className="w-4 h-4" />}>
                        User agreements and guidelines.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/about">
                    <a className={navigationMenuTriggerStyle()}>
                      Documentation
                    </a>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-3 py-2 text-sm border border-input rounded-md bg-background w-48"
            />
            <Button size="sm" className="bg-primary text-white hover:bg-primary/90 transition-colors">
              Subscribe
            </Button>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="hidden sm:flex gap-2 border-primary/20 hover:bg-primary/10 hover:text-primary"
            onClick={() => window.open('https://github.com/huzaifa-001529', '_blank')}
          >
            <Github className="w-4 h-4" />
            <span className="hidden lg:inline">Star on GitHub</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none flex items-center gap-2 group-hover:text-primary transition-colors">
            {icon && <span className="text-muted-foreground group-hover:text-primary">{icon}</span>}
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1.5">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
