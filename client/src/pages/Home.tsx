import React from 'react';
import { LayoutWrapper } from '@/components/layout/LayoutWrapper';
import { AdContainer } from '@/components/common/AdContainer';
import { ImageUploader } from '@/components/common/ImageUploader';
import { ImageGallery } from '@/components/common/ImageGallery';
import { ToolPanel } from '@/components/common/ToolPanel';
import { DownloadPanel } from '@/components/common/DownloadPanel';
import { useImageStore } from '@/store/useImageStore';

const Home = () => {
  const { images, selectedImageId } = useImageStore();

  return (
    <LayoutWrapper>
      <div className="space-y-8 animate-in fade-in duration-700">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent animate-gradient">
            Professional Image Processing
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Secure, fast, and free client-side tools. Convert, resize, and optimize your images without uploading to a server.
          </p>
        </div>

        <AdContainer size="leaderboard" label="Sponsored Content" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <ImageUploader />
            <ImageGallery />
            <DownloadPanel />
          </div>
          
          <div className="lg:col-span-1">
             {images.length > 0 ? (
               <div className="sticky top-24">
                 <ToolPanel />
                 <AdContainer size="rectangle" className="mt-8" />
               </div>
             ) : (
               <div className="sticky top-24">
                 <div className="bg-card/50 border border-border/50 rounded-xl p-8 text-center">
                   <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                     <span className="text-2xl">✨</span>
                   </div>
                   <h3 className="font-semibold mb-2">No Image Selected</h3>
                   <p className="text-sm text-muted-foreground">Upload an image to access professional editing tools.</p>
                 </div>
                 <AdContainer size="rectangle" className="mt-8" />
               </div>
             )}
          </div>
        </div>
        
        <AdContainer size="leaderboard" className="mt-12" />
      </div>
    </LayoutWrapper>
  );
};

export default Home;
