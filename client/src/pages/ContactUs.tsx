import React from 'react';
import { LayoutWrapper } from '@/components/layout/LayoutWrapper';
import { AdContainer } from '@/components/common/AdContainer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactUs = () => {
  return (
    <LayoutWrapper>
      <div className="max-w-5xl mx-auto py-12 animate-in fade-in duration-500">
        <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-card p-8 rounded-xl border border-border shadow-lg">
              <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us more..." className="min-h-[150px]" />
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90">Send Message</Button>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card p-6 rounded-xl border border-border shadow-lg">
              <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="text-primary" />
                  <span>support@pixelforge.pro</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="text-primary" />
                  <span>123 Innovation Dr, Tech City</span>
                </div>
              </div>
            </div>

            <AdContainer size="skyscraper" className="h-full" />
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default ContactUs;
