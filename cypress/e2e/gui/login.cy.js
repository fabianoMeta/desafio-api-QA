

describe('Login', () => {
  it('Validar login com sucesso no site', () => {
    const user = Cypress.env('email')
    const password = Cypress.env('password')
    const option = { cacheSession: false }
    
    cy.login(user, password, option)

    cy.get('#main > div.woocommerce > div > p > strong:nth-child(1)').should('contain', 'fabianometa25')
  })
});