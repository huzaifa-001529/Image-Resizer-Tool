import React from 'react';
import { LayoutWrapper } from '@/components/layout/LayoutWrapper';
import { AdContainer } from '@/components/common/AdContainer';

const Disclaimer = () => {
  return (
    <LayoutWrapper>
      <div className="max-w-3xl mx-auto py-12 animate-in fade-in duration-500">
        <h1 className="text-4xl font-bold mb-8 text-warning">Disclaimer</h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <section className="bg-card p-6 rounded-xl border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-4">General Disclaimer</h2>
            <p>
              The information provided by PixelForge Pro on this website is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the Site.
            </p>
          </section>

          <AdContainer size="leaderboard" className="my-8" />

          <section className="bg-card p-6 rounded-xl border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Processing Disclaimer</h2>
            <p>
              While we strive to provide high-quality image processing tools, results may vary depending on the source file quality, browser capabilities, and device performance. We are not responsible for any loss of data or quality degradation that may occur during processing. Always keep a backup of your original files.
            </p>
          </section>
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default Disclaimer;
