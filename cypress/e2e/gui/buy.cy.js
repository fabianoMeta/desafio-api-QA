import { faker } from '@faker-js/faker/locale/pt_BR'
const fakerBr = require('faker-br')

const options = { env: { snapShotOnly: true, cacheSession: false } }


describe('Buy', options, () => {


  beforeEach(() => {
    cy.login()
    cy.removeAllProducts()
    cy.gui_addCart()
  })

  it('Validar compra com sucesso no site', () => {
    const phoneFormat = '## #####-####'; // Define the phone number format
    const CEPFormat = '#####-###'; // Define the CEP format
    const buy = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      nameCompany: faker.company.name(),
      adress: faker.location.streetAddress(),
      city: faker.location.city(),
      CEP: fakerBr.address.zipCode(CEPFormat),
      phoneNumber: faker.phone.number(phoneFormat),
      comments: faker.lorem.sentence(5),
    }

    cy.intercept('POST', '/?wc-ajax=checkout').as('checkout')

    cy.gui_buy(buy)
    cy.wait('@checkout').its('response.statusCode').should('eq', 200)

    cy.get('.woocommerce-notice').contains('Obrigado. Seu pedido foi recebido.')
    cy.get('ul.woocommerce-order-overview > li.woocommerce-order-overview__order').should('exist')
  })
})