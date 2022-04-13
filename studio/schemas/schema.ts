import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
// Documents
import basicSiteInformation from './basicSiteInformation/basicSiteInformation'
import homepage from './homepage/homepage'
// Types
import { metadata, color } from './shared'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // Documents
    basicSiteInformation,
    homepage,
    // Types
    color,
    metadata
  ])
})
