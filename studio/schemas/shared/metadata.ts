export default {
  title: 'Metadata',
  name: 'metadata',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      codegen: { required: true },
      validation: (Rule) => Rule.required()
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
      codegen: { required: true },
      validation: (Rule) => Rule.required()
    },
    {
      title: 'Keywords',
      name: 'keywords',
      type: 'string'
    },
    {
      title: 'Author',
      name: 'author',
      type: 'string',
      initialValue: 'Caleb Mahala'
    }
  ]
}
