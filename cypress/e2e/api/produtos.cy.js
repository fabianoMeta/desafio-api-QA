import { faker } from "@faker-js/faker"
import { usuarioCriado } from "./usuarios.cy"

export let produtoCriado = {}

describe('Produtos', () => {
    let token

    before(() => {
        // Supondo que você tenha um comando customizado para login
        cy.api_login(usuarioCriado.email, usuarioCriado.password).then((response) => {
            token = response.body.authorization
        })
    })

    it('Cadastrar produto com sucesso', () => {
        const produto = {
            nome: faker.commerce.productName(),
            preco: faker.commerce.price({ min: 1, max: 1000, dec: 0 }),
            descricao: faker.commerce.productDescription(),
            quantidade: faker.number.int({ min: 1, max: 100 }),
        }

        cy.api_cadastrarProdutos(produto, token)
            .then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body.message).to.eq('Cadastro realizado com sucesso')
                expect(response.body._id).to.exist

                produtoCriado._id = response.body._id
            })
    })
})