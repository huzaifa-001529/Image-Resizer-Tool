import { create } from 'zustand';
import { createImagePreview } from '@/lib/fileUtils';

export interface UploadedImage {
  id: string;
  file: File;
  preview: string;
  name: string;
  size: number;
  type: string;
  processedPreview?: string;
  selected: boolean;
}

interface ImageStore {
  images: UploadedImage[];
  selectedImageId: string | null;
  currentTool: string;
  isProcessing: boolean;
  
  addImages: (files: File[]) => Promise<void>;
  removeImage: (id: string) => void;
  selectImage: (id: string) => void;
  setTool: (tool: string) => void;
  setProcessing: (isProcessing: boolean) => void;
  updateImageProcessed: (id: string, preview: string) => void;
}

export const useImageStore = create<ImageStore>((set, get) => ({
  images: [],
  selectedImageId: null,
  currentTool: 'format',
  isProcessing: false,

  addImages: async (files) => {
    const newImages = await Promise.all(
      files.map(async (file) => ({
        id: Math.random().toString(36).substring(2, 9),
        file,
        preview: await createImagePreview(file),
        name: file.name,
        size: file.size,
        type: file.type,
        selected: false,
      }))
    );

    set((state) => ({
      images: [...state.images, ...newImages],
      selectedImageId: state.selectedImageId || newImages[0]?.id || null,
    }));
  },

  removeImage: (id) => {
    set((state) => ({
      images: state.images.filter((img) => img.id !== id),
      selectedImageId: state.selectedImageId === id ? null : state.selectedImageId,
    }));
  },

  selectImage: (id) => {
    set((state) => ({
      selectedImageId: id,
      images: state.images.map(img => ({...img, selected: img.id === id}))
    }));
  },

  setTool: (tool) => set({ currentTool: tool }),
  setProcessing: (isProcessing) => set({ isProcessing }),
  
  updateImageProcessed: (id, preview) => {
    set((state) => ({
      images: state.images.map((img) => 
        img.id === id ? { ...img, processedPreview: preview } : img
      )
    }));
  }
}));
