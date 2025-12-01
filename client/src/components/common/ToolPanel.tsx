import React, { useState } from 'react';
import { useImageStore } from '@/store/useImageStore';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { processImage } from '@/lib/imageProcessing';
import { Loader2, Wand2, Download, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';

export const ToolPanel = () => {
  const { currentTool, selectedImageId, images, updateImageProcessed, isProcessing, setProcessing } = useImageStore();
  const selectedImage = images.find(img => img.id === selectedImageId);

  const [width, setWidth] = useState<number>(800);
  const [height, setHeight] = useState<number>(600);
  const [quality, setQuality] = useState<number>(90);
  const [format, setFormat] = useState<'image/jpeg' | 'image/png' | 'image/webp'>('image/jpeg');
  const [blur, setBlur] = useState<number>(0);
  const [grayscale, setGrayscale] = useState<boolean>(false);
  const [sepia, setSepia] = useState<boolean>(false);

  if (!selectedImage) {
    return (
      <div className="bg-card border border-border rounded-xl p-8 text-center text-muted-foreground animate-pulse-soft">
        Select an image to start editing
      </div>
    );
  }

  const handleProcess = async () => {
    setProcessing(true);
    try {
      const result = await processImage(selectedImage.preview, {
        width: currentTool === 'resize' ? width : undefined,
        height: currentTool === 'resize' ? height : undefined,
        quality: quality / 100,
        format: currentTool === 'format' ? format : undefined,
        grayscale,
        sepia,
        blur: blur > 0 ? blur : undefined,
      });
      updateImageProcessed(selectedImage.id, result);
    } catch (error) {
      console.error("Processing failed", error);
    } finally {
      setProcessing(false);
    }
  };

  const renderControls = () => {
    switch (currentTool) {
      case 'format':
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Target Format</Label>
              <Select value={format} onValueChange={(v: any) => setFormat(v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="image/jpeg">JPEG</SelectItem>
                  <SelectItem value="image/png">PNG</SelectItem>
                  <SelectItem value="image/webp">WEBP</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Quality ({quality}%)</Label>
              <Slider value={[quality]} onValueChange={(v) => setQuality(v[0])} min={1} max={100} step={1} />
            </div>
          </div>
        );
      case 'resize':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Width (px)</Label>
                <input 
                  type="number" 
                  value={width} 
                  onChange={(e) => setWidth(parseInt(e.target.value))} 
                  className="w-full bg-background border border-input rounded-md px-3 py-2 text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label>Height (px)</Label>
                <input 
                  type="number" 
                  value={height} 
                  onChange={(e) => setHeight(parseInt(e.target.value))} 
                  className="w-full bg-background border border-input rounded-md px-3 py-2 text-sm"
                />
              </div>
            </div>
            <div className="text-xs text-muted-foreground">
              Aspect ratio is currently unlocked.
            </div>
          </div>
        );
      case 'compress':
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Compression Level ({100 - quality}%)</Label>
              <Slider value={[quality]} onValueChange={(v) => setQuality(v[0])} min={1} max={100} step={1} />
              <p className="text-xs text-muted-foreground">Lower quality results in smaller file size.</p>
            </div>
          </div>
        );
      case 'filters':
        return (
          <div className="space-y-6">
             <div className="space-y-3">
              <Label>Blur ({blur}px)</Label>
              <Slider value={[blur]} onValueChange={(v) => setBlur(v[0])} min={0} max={20} step={1} />
            </div>
            <div className="flex items-center gap-4">
              <Button 
                variant={grayscale ? "default" : "outline"} 
                onClick={() => setGrayscale(!grayscale)}
                className="flex-1"
              >
                Grayscale
              </Button>
              <Button 
                variant={sepia ? "default" : "outline"} 
                onClick={() => setSepia(!sepia)}
                className="flex-1"
              >
                Sepia
              </Button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-lg animate-in slide-in-from-right-4 duration-500">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <Wand2 className="w-5 h-5 text-primary" />
          Configuration
        </h3>
        <Button variant="ghost" size="sm" onClick={() => {
          setBlur(0); setGrayscale(false); setSepia(false); setQuality(90);
        }}>
          <RotateCcw className="w-4 h-4 mr-1" /> Reset
        </Button>
      </div>

      <div className="mb-8">
        {renderControls()}
      </div>

      <Button 
        className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity shadow-lg shadow-primary/20" 
        size="lg"
        onClick={handleProcess}
        disabled={isProcessing}
      >
        {isProcessing ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <Wand2 className="w-4 h-4 mr-2" />
            Apply Changes
          </>
        )}
      </Button>
    </div>
  );
};
