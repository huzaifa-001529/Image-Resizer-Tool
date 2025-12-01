import React from 'react';
import { useImageStore } from '@/store/useImageStore';
import { Button } from '@/components/ui/button';
import { Download, Share2, Cloud } from 'lucide-react';

export const DownloadPanel = () => {
  const { selectedImageId, images } = useImageStore();
  const selectedImage = images.find(img => img.id === selectedImageId);

  if (!selectedImage || !selectedImage.processedPreview) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = selectedImage.processedPreview!;
    link.download = `processed-${selectedImage.name}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mt-6 bg-card border border-border rounded-xl p-6 shadow-lg animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-lg text-success">Ready for Download!</h3>
          <p className="text-sm text-muted-foreground">Your image has been processed successfully.</p>
        </div>
        
        <div className="flex gap-3 w-full md:w-auto">
          <Button variant="outline" className="flex-1 md:flex-none">
            <Share2 className="w-4 h-4 mr-2" /> Share
          </Button>
          <Button variant="outline" className="flex-1 md:flex-none">
            <Cloud className="w-4 h-4 mr-2" /> Save to Cloud
          </Button>
          <Button onClick={handleDownload} className="flex-1 md:flex-none bg-green-600 hover:bg-green-700 text-white">
            <Download className="w-4 h-4 mr-2" /> Download
          </Button>
        </div>
      </div>
    </div>
  );
};
