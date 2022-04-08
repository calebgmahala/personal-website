import { createClient } from 'sanity-codegen'
import { Documents } from './schema'

export const sanityClient = createClient<Documents>({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  token: process.env.SANITY_TOKEN,
  fetch: fetch
})
