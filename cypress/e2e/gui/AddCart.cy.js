const options = {env: { snapShotOnly: true }}

describe('Adicionar produto ao carrinho', options, () => {
    beforeEach(() => {
        cy.login()
    })

    it('Validar adicionar produto ao carrinho com sucesso no site', () => {
        cy.clearCookies()
        cy.gui_addCart()

        cy.get('h1.product_title').invoke('text').then((productName) => {
            cy.get('#content > div > div.woocommerce-message').should('contain', '“' + productName + '” foi adicionado no seu carrinho.')
        })
    })
})