import React from 'react';
import { LayoutWrapper } from '@/components/layout/LayoutWrapper';
import { AdContainer } from '@/components/common/AdContainer';
import { Layers, Users, Zap, Globe } from 'lucide-react';

const About = () => {
  return (
    <LayoutWrapper>
      <div className="max-w-4xl mx-auto py-12 animate-in fade-in duration-500">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">About PixelForge Pro</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're on a mission to make professional-grade image processing accessible to everyone, directly in the browser.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Zap, title: "Lightning Fast", desc: "Powered by WebAssembly and modern browser APIs for near-native performance." },
            { icon: Users, title: "Privacy First", desc: "All processing happens on your device. Your images never touch our servers." },
            { icon: Globe, title: "Universal", desc: "Works on any device, anywhere. No installation required." }
          ].map((item, i) => (
            <div key={i} className="bg-card p-6 rounded-xl border border-border text-center hover:border-primary/50 transition-colors group">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="text-primary w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        <AdContainer size="leaderboard" className="mb-16" />

        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-6">
                Founded in 2023, PixelForge started as a simple idea: why should you have to upload your private photos to a server just to resize them? 
              </p>
              <p className="text-muted-foreground">
                Today, we serve thousands of users daily, providing a secure, fast, and free alternative to cloud-based image tools. We believe in the power of the open web and client-side computing.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 min-h-[300px] flex items-center justify-center p-8">
              <Layers className="w-32 h-32 text-primary opacity-50 animate-pulse-soft" />
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default About;
