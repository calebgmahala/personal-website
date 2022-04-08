import { mount } from '@cypress/react'
import HeadTag from '../../../components/shared/head'
import { Metadata } from '../../../lib/sanity/schema'

/**
 * The HeadTag will not mount to the cypress DOM correctly. We just run this to
 * make sure that everything compiles and the DOM is read properly by Cypress
 *
 * * Feel free to delete this test
 */
describe('Metadata', () => {
  it("doesn't error when attempting to render head tag", () => {
    cy.fixture('component/metadata.json').then((json: Metadata) => {
      mount(<HeadTag metadata={json}/>)
      cy.get('head').should('exist')
    })
  })
})
