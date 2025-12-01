import React from 'react';
import { LayoutWrapper } from '@/components/layout/LayoutWrapper';
import { AdContainer } from '@/components/common/AdContainer';

const TermsConditions = () => {
  return (
    <LayoutWrapper showSidebar={false}>
      <div className="max-w-3xl mx-auto py-12 animate-in fade-in duration-500">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Terms and Conditions</h1>
        
        <AdContainer size="leaderboard" className="mb-8" />

        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <section className="bg-card p-6 rounded-xl border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using PixelForge Pro, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you disagree with any part of the terms, then you may not access the Service.
            </p>
          </section>

          <section className="bg-card p-6 rounded-xl border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are and will remain the exclusive property of PixelForge Pro and its licensors.
            </p>
          </section>

          <section className="bg-card p-6 rounded-xl border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Content</h2>
            <p>
              You retain all rights to any images or content you process using our Service. Since processing happens locally on your device, we claim no ownership or license to your content.
            </p>
          </section>

          <section className="bg-card p-6 rounded-xl border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Limitation of Liability</h2>
            <p>
              In no event shall PixelForge Pro, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </p>
          </section>
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default TermsConditions;
