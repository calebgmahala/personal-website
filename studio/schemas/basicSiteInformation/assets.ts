export default [
  {
    title: 'Logo',
    name: 'logo',
    type: 'image',
    fields: [
      {
        title: 'Alternate text',
        name: 'alt',
        type: 'string',
        codegen: { required: true },
        validation: (Rule) => Rule.required()
      }
    ]
  },
  {
    title: 'Favicon',
    name: 'favicon',
    type: 'image',
    codegen: { required: true },
    validation: (Rule) => Rule.required()
  }
]
