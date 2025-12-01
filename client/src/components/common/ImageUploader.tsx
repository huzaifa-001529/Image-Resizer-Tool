import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { UploadCloud, Image as ImageIcon } from 'lucide-react';
import { useImageStore } from '@/store/useImageStore';
import { cn } from '@/lib/utils';

export const ImageUploader = () => {
  const addImages = useImageStore((state) => state.addImages);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    addImages(acceptedFiles);
  }, [addImages]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.webp', '.gif']
    }
  });

  return (
    <div 
      {...getRootProps()} 
      className={cn(
        "border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300 cursor-pointer group relative overflow-hidden bg-card",
        isDragActive ? "border-primary bg-primary/5 scale-[1.02]" : "border-border hover:border-primary hover:bg-accent/5"
      )}
    >
      <input {...getInputProps()} data-testid="input-upload" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className={cn(
          "w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300",
          isDragActive ? "bg-primary text-white scale-110" : "bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white"
        )}>
          <UploadCloud className="w-10 h-10" />
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {isDragActive ? "Drop images here" : "Drag & Drop Images"}
          </h3>
          <p className="text-muted-foreground text-sm max-w-xs mx-auto">
            Support for JPG, PNG, WEBP and more. High-speed client-side processing.
          </p>
        </div>

        <button className="mt-4 px-6 py-2 bg-primary text-white rounded-full font-medium text-sm shadow-lg shadow-primary/25 group-hover:shadow-primary/40 transition-all transform group-hover:-translate-y-1">
          Browse Files
        </button>
      </div>
    </div>
  );
};
