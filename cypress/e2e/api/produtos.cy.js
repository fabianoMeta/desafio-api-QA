import { faker } from "@faker-js/faker"
import { usuarioCriado } from "./usuarios.cy"

export let produtoCriado = {}

describe('Produtos', () => {
    let token
    const produto = {
        nome: faker.commerce.productName(),
        preco: parseInt(faker.commerce.price({ min: 1, max: 1000, dec: 0 }), 10),
        descricao: faker.commerce.productDescription(),
        quantidade: faker.number.int({ min: 1, max: 100 }),
    }
    before(() => {
        cy.api_login(usuarioCriado.email, usuarioCriado.password).then((response) => {
            token = response.body.authorization
        })
    })

    it('Cadastrar produto com sucesso', () => {
        cy.api_cadastrarProdutos(produto, token)
            .then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body.message).to.eq('Cadastro realizado com sucesso')
                expect(response.body._id).to.exist

                produtoCriado._id = response.body._id
            })
    })

    it('Buscar por ID', () => {
        cy.api_buscarProduto(produtoCriado._id, token)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.nome).to.eq(produto.nome)
                expect(response.body.preco).to.eq(produto.preco)
                expect(response.body.descricao).to.eq(produto.descricao)
                expect(response.body.quantidade).to.eq(produto.quantidade)
                expect(response.body._id).to.eq(produtoCriado._id)
                expect(response.body).to.have.all.keys(
                    '_id',
                    'nome',
                    'preco',
                    'descricao',
                    'quantidade',
                )
            })
    })
})