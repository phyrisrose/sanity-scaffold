/* We have Sanity setup in a separate folder; this approach is recommended because
The Studio is a standalone React app → easier to upgrade, deploy, and separate.

Keeps dependencies isolated (react versions can differ!).

Matches the official Sanity docs and examples.
*/

// import { createClient } from '@sanity/client';

// // Configure your Sanity client
// // Replace with your actual project ID and dataset
// export const sanityClient = createClient({
//   projectId: process.env.VITE_SANITY_PROJECT_ID || 'your-project-id',
//   dataset: process.env.VITE_SANITY_DATASET || 'production',
//   useCdn: true, // set to `false` to bypass the edge cache
//   apiVersion: '2024-01-01', // use current date (YYYY-MM-DD) to target the latest API version
// });

// Helper function to build image URLs
// export const urlFor = (source: string) => {
//   return `https://cdn.sanity.io/images/${sanityClient.config().projectId}/${
//     sanityClient.config().dataset
//   }/${source}`;
// };
