import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
// Documents
import homepage from './homepage/homepage'
// Types
import { metadata } from './shared'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // Documents
    homepage,
    // Types
    metadata
  ])
})
