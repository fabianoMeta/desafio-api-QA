import { faker } from '@faker-js/faker';


export let usuarioCriado = {}
const dadosUsuario = {
    nome: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    administrador: 'true',
}

describe('Usuarios', () => {
    it('Usuario criado com sucesso', () => {
        cy.api_usuarios(dadosUsuario)
            .then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body.message).to.eq('Cadastro realizado com sucesso')
                expect(response.body._id).to.exist

                usuarioCriado.email = dadosUsuario.email;
                usuarioCriado.password = dadosUsuario.password;
                usuarioCriado.id = response.body._id;
            })
    })

    it('Usuario com dados em branco', () => {
        const dadosUsuario = {
            nome: "",
            email: "",
            password: "",
            administrador: "",
        }
        cy.api_usuarios(dadosUsuario)
            .then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body.nome).to.equal('nome não pode ficar em branco')
                expect(response.body.email).to.equal('email não pode ficar em branco')
                expect(response.body.password).to.equal('password não pode ficar em branco')
                expect(response.body.administrador).to.equal("administrador deve ser 'true' ou 'false'")
            })
    })

    it('Repetir dados de um usuário já cadastrado', () => {
        cy.api_usuarios(dadosUsuario)
            .then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body.message).to.equal('Este email já está sendo usado')
            })
    })

    it('Buscar usuario por id', () => {
        cy.api_usuarios_id(usuarioCriado.id)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body._id).to.eq(usuarioCriado.id)
                expect(response.body.nome).to.eq(dadosUsuario.nome)
                expect(response.body.email).to.eq(dadosUsuario.email)
                expect(response.body.password).to.eq(dadosUsuario.password)
                expect(response.body.administrador).to.eq(dadosUsuario.administrador)
            })
    })

    it('Usuario inexistente', () => {
        cy.api_usuarios_id("1231231231231231")
            .then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body.message).to.eq('Usuário não encontrado')
            })
    })
})