import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, token } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})




// // lib/client.ts
// export const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
//   apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
//   useCdn: false, // Write operations ke liye CDN off rakhein
//   token: process.env.SANITY_API_TOKEN, // New token yahan aayega
// });