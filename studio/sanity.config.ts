import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

const sanityConfig = defineConfig({
  name: 'default',
  title: 'Demo project',

  /** @todo the env variable is getting read, but an error still occurs */
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'rsvncbtu',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

export default sanityConfig
