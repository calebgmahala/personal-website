export default {
  title: 'Color',
  name: 'color',
  type: 'object',
  fields: [
    {
      title: 'Light Mode',
      name: 'light',
      type: 'colorPicker',
      codegen: { required: true },
      validation: (Rule) => Rule.required()
    },
    {
      title: 'Dark Mode',
      name: 'dark',
      type: 'colorPicker'
    }
  ]
}
