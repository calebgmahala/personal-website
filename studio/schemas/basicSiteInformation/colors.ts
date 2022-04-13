export default [
  {
    type: 'color',
    title: 'Primary Color 1',
    name: 'primaryColor1',
    codegen: { required: true },
    validation: (Rule) => Rule.required()
  },
  {
    type: 'color',
    title: 'Primary Color 2',
    name: 'primaryColor2',
    codegen: { required: true },
    validation: (Rule) => Rule.required()
  },
  {
    type: 'color',
    title: 'Primary Color 3',
    name: 'primaryColor3'
  },
  {
    type: 'color',
    title: 'Secondary Color 1',
    name: 'secondaryColor1'
  },
  {
    type: 'color',
    title: 'Secondary Color 2',
    name: 'secondaryColor2'
  },
  {
    type: 'color',
    title: 'Secondary Color 3',
    name: 'secondaryColor3'
  }
]
