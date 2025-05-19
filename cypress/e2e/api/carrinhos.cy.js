import { usuarioCriado } from './usuarios.cy'
import { produtoCriado } from './produtos.cy'

export let carrinhoCriado = {}

describe('Carrinhos', () => {
    let token
    let idProduto
    let idUsuario

    before(() => {
        // Supondo que você tenha um comando customizado para login
        cy.api_login(usuarioCriado.email, usuarioCriado.password).then((response) => {
            token = response.body.authorization
        })
    })

    it('Cadastrar carrinho com sucesso', () => {
        const carrinho = {
            idProduto: produtoCriado._id,
            quantidade: 1,
        }

        cy.api_cadastrarCarrinho(carrinho, token)
            .then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body.message).to.eq('Cadastro realizado com sucesso')
                expect(response.body._id).to.exist

                carrinhoCriado.idProduto = response.body._id
            })
    })
})