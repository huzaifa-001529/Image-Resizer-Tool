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
      const ctx = canvas.getContext('2d');
      
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

      // Apply filters
      const filters = [];
      if (options.grayscale) filters.push('grayscale(100%)');
      if (options.sepia) filters.push('sepia(100%)');
      if (options.blur) filters.push(`blur(${options.blur}px)`);
      
      ctx.filter = filters.join(' ');

      ctx.drawImage(img, 0, 0, width, height);

      resolve(canvas.toDataURL(options.format || 'image/jpeg', options.quality || 0.9));
    };
    img.onerror = (err) => reject(err);
  });
};
