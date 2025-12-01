import React from 'react';
import { LayoutWrapper } from '@/components/layout/LayoutWrapper';
import { AdContainer } from '@/components/common/AdContainer';

const PrivacyPolicy = () => {
  return (
    <LayoutWrapper>
      <div className="max-w-3xl mx-auto py-12 animate-in fade-in duration-500">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Privacy Policy</h1>
        
        <AdContainer size="leaderboard" className="mb-8" />

        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <p className="text-lg text-foreground font-medium">Last Updated: December 1, 2025</p>
          
          <section className="bg-card p-6 rounded-xl border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
            <p>
              PixelForge Pro ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
          </section>

          <section className="bg-card p-6 rounded-xl border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Client-Side Processing</h2>
            <p>
              PixelForge Pro operates primarily as a client-side application. This means that when you process images using our tools (resizing, converting, compressing), <strong>your images are processed directly within your web browser and are NOT uploaded to our servers</strong>.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>We do not store your images.</li>
              <li>We do not view your images.</li>
              <li>Your images never leave your device during processing.</li>
            </ul>
          </section>

          <AdContainer size="rectangle" className="float-right ml-6 mb-6" />

          <section className="bg-card p-6 rounded-xl border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Data Collection</h2>
            <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
            <h3 className="text-xl font-medium text-foreground mt-4 mb-2">Usage Data</h3>
            <p>
              We may collect non-personal information about how you use the site, such as pages visited, time spent, and tools used, to improve our services.
            </p>
          </section>

          <section className="bg-card p-6 rounded-xl border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at:
              <br />
              <a href="mailto:privacy@pixelforge.pro" className="text-primary hover:underline">privacy@pixelforge.pro</a>
            </p>
          </section>
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default PrivacyPolicy;
