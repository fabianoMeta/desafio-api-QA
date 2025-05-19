Cypress.Commands.add('login', (
    email = Cypress.env('email'),
    password = Cypress.env('password'),
    { cacheSession = true } = {},
) => {

    const login = () => {
        cy.visit(`/minha-conta/`)

        cy.get('#username').type(email)
        cy.get('#password').type(password, { log: false })
        cy.get('form.login > input.button').click()
    }

    const validate = () => {
        cy.visit('/')
        cy.location('pathname', { timeout: 1000 })
            .should('not.eq', '/minha-conta/')
    }

    const options = {
        cacheAcrossSpecs: true,
        validate,
    }

    if (cacheSession) {
        cy.session(email, login, options)
    } else {
        login()
    }
})

Cypress.Commands.add('gui_addCart', () => {
    cy.visit('/produtos/')
    cy.get('div.row > div > [data-product-id="2559"]').click()
    cy.get('[role="radiogroup"] > [data-wvstooltip="M"]').click()
    cy.get('[role="radiogroup"] > [data-wvstooltip="Red"]').click()
    cy.get('button.single_add_to_cart_button').click()
})

Cypress.Commands.add('gui_buy', buy => {
    cy.visit('/checkout/')
    cy.get('#billing_first_name').clear().type(buy.firstName)
    cy.get('#billing_last_name_field input').clear().type(buy.lastName)
    cy.get('#billing_company').clear().type(buy.nameCompany)
    cy.get('#billing_address_1').clear().type(buy.adress)
    cy.get('#billing_city').clear().type(buy.city)
    cy.get('#select2-billing_state-container').click()
    cy.get('input.select2-search__field').type('Minas Gerais').type('{enter}')
    cy.get('#billing_postcode').clear().type(buy.CEP)
    cy.get('#billing_phone').clear().type(buy.phoneNumber)
    cy.get('#billing_email').clear().type(Cypress.env('email'))
    cy.get('#order_comments').clear().type(buy.comments)
    cy.get('#payment_method_cod').click()
    cy.get('#terms').click()
    cy.get('#place_order').click()
})

Cypress.Commands.add('removeAllProducts', () => {
    cy.visit('/carrinho/')
    cy.get('body').then($body => {
        if ($body.find('.cart-empty').length > 0) {
            cy.log('Carrinho vazio')
            return
        } else {
            cy.get('.product-remove > a.remove').each(($el) => {
                cy.wrap($el).click()
            })
        }
    })
})