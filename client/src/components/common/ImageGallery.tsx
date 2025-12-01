import React from 'react';
import { X, Check, ZoomIn, Trash2 } from 'lucide-react';
import { useImageStore } from '@/store/useImageStore';
import { formatFileSize } from '@/lib/fileUtils';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export const ImageGallery = () => {
  const { images, selectedImageId, selectImage, removeImage } = useImageStore();

  if (images.length === 0) return null;

  return (
    <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <span>Gallery</span>
          <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">{images.length}</span>
        </h3>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <div 
            key={image.id}
            onClick={() => selectImage(image.id)}
            className={cn(
              "group relative rounded-lg overflow-hidden border-2 cursor-pointer transition-all duration-200 bg-card shadow-sm hover:shadow-md",
              selectedImageId === image.id 
                ? "border-primary ring-2 ring-primary/20" 
                : "border-transparent hover:border-primary/50"
            )}
          >
            <div className="aspect-square overflow-hidden bg-black/20">
              <img 
                src={image.processedPreview || image.preview} 
                alt={image.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

            <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-200">
              <p className="text-white text-xs font-medium truncate">{image.name}</p>
              <p className="text-white/70 text-[10px]">{formatFileSize(image.size)}</p>
            </div>

            {selectedImageId === image.id && (
              <div className="absolute top-2 left-2 bg-primary text-white rounded-full p-1 shadow-lg">
                <Check className="w-3 h-3" />
              </div>
            )}

            <Button 
              variant="destructive" 
              size="icon" 
              className="absolute top-2 right-2 w-7 h-7 opacity-0 group-hover:opacity-100 transition-opacity scale-90 hover:scale-100"
              onClick={(e) => {
                e.stopPropagation();
                removeImage(image.id);
              }}
            >
              <Trash2 className="w-3 h-3" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
