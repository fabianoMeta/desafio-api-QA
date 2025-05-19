describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  it('should have a title', () => {
    cy.visit('/')
    cy.title().should('include', 'Kitchen Sink')
  })
})