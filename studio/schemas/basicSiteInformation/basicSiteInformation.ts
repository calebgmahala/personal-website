import assets from './assets'
import colors from './colors'

export default {
  title: 'Basic Site Information',
  name: 'basicSiteInformation',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      codegen: { required: true },
      validation: (Rule) => Rule.required()
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string'
    },
    ...assets,
    ...colors
  ]
}
