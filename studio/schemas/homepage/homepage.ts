export default {
  title: 'Homepage',
  name: 'homepage',
  type: 'document',
  fields: [
    {
      type: 'metadata',
      title: 'Metadata',
      name: 'metadata',
      codegen: { required: true },
      validation: (Rule) => Rule.required()
    },
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
      codegen: { required: true },
      validation: (Rule) => Rule.required()
    },
    {
      title: 'Mission Statement',
      name: 'missionStatement',
      type: 'array',
      of: [
        {
          type: 'block'
        }
      ]
    }
  ]
}
