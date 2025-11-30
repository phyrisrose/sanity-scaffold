import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

const sanityConfig = defineConfig({
  name: 'default',
  title: 'Demo project',

  projectId: 'rsvncbtu',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

// Helper function to build image URLs
export const urlFor = (source: string) => {
  return `https://cdn.sanity.io/images/${sanityConfig.projectId}/${sanityConfig.dataset}/${source}`
}

export default sanityConfig
