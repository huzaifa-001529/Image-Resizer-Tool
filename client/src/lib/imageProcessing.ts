export interface ProcessingOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'image/jpeg' | 'image/png' | 'image/webp';
  grayscale?: boolean;
  sepia?: boolean;
  blur?: number;
}

export const processImage = async (
  imageUrl: string,
  options: ProcessingOptions
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageUrl;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      
      if (!ctx) {
        reject(new Error('Could not get canvas context'));
        return;
      }

      // Calculate dimensions
      let width = options.width || img.width;
      let height = options.height || img.height;

      // Maintain aspect ratio if only one dimension provided
      if (options.width && !options.height) {
        height = (img.height / img.width) * width;
      } else if (!options.width && options.height) {
        width = (img.width / img.height) * height;
      }

      canvas.width = width;
      canvas.height = height;

      // For JPEG format, fill with white background to handle transparency
      const targetFormat = options.format || 'image/jpeg';
      if (targetFormat === 'image/jpeg') {
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, width, height);
      }

      // Apply filters
      const filters = [];
      if (options.grayscale) filters.push('grayscale(100%)');
      if (options.sepia) filters.push('sepia(100%)');
      if (options.blur) filters.push(`blur(${options.blur}px)`);
      
      if (filters.length > 0) {
        ctx.filter = filters.join(' ');
      }

      ctx.drawImage(img, 0, 0, width, height);

      // Reset filter for potential future operations
      ctx.filter = 'none';

      // Use appropriate quality based on format
      let quality = options.quality || 0.9;
      
      // PNG ignores quality parameter, but we'll still pass it
      // WEBP and JPEG use quality
      try {
        const dataUrl = canvas.toDataURL(targetFormat, quality);
        
        // Verify the conversion worked
        if (!dataUrl || dataUrl === 'data:,') {
          reject(new Error('Failed to convert image to ' + targetFormat));
          return;
        }
        
        resolve(dataUrl);
      } catch (error) {
        reject(new Error('Error converting image: ' + (error as Error).message));
      }
    };
    img.onerror = (err) => {
      reject(new Error('Failed to load image: ' + err));
    };
  });
};