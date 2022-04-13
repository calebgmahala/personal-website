import { SanityCodegenConfig } from 'sanity-codegen'

const config: SanityCodegenConfig = {
  schemaPath: '../studio/schemas/schema.ts',
  outputPath: './lib/sanity/schema.ts',
  /**
   * We need to parse the sanity imports inside node modules. This ignore
   * pattern only pulls the packages we need to build the schema file
   */
  babelOptions: {
    ignore: [
      function (filepath) {
        return /\/node_modules\/(?!(@sanity)|(sanity-plugin))/.test(filepath)
      }
    ]
  }
}

export default config
