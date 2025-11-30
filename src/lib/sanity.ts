import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

// Configure your Sanity client
export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'rsvncbtu',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
});

// Helper function to build image URLs
const builder = createImageUrlBuilder(sanityClient);

export const urlFor = (source: any) => {
  return builder.image(source);
};
