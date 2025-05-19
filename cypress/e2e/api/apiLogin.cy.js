import { faker } from "@faker-js/faker"
import { usuarioCriado } from "./usuarios.cy"

export let dadosLogin = {}

describe('api_login', () => {
    it('Validar login com sucesso na api', () => {
        const email = usuarioCriado.email
        const password = usuarioCriado.password

        cy.api_login(email, password)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.message).to.exist
                expect(response.body.authorization).to.exist
                expect(response.body.message).to.eq('Login realizado com sucesso')

                dadosLogin.authorization = response.body.authorization;
            })
    })

    it('login com email em branco', () => {
        const email = ""
        const password = usuarioCriado.password

        cy.api_login(email, password)
            .then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body.email).to.equal('email não pode ficar em branco')
        })
    })

    it('login com senha em branco', () => {
        const email = usuarioCriado.email
        const password = ""

        cy.api_login(email, password)
            .then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body.password).to.equal('password não pode ficar em branco')
        })
    })

    it('login com email e senha em branco', () => {
        const email = ""
        const password = ""

        cy.api_login(email, password)
            .then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body.email).to.equal('email não pode ficar em branco')
            expect(response.body.password).to.equal('password não pode ficar em branco')
        })
    })

    it('login com email e senha em branco', () => {
        const email = "123"
        const password = faker.internet.password()

        cy.api_login(email, password)
            .then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body.email).to.equal('email deve ser um email válido')
        })
    })

    it('login com senha incorreta', () => {
        const email = "teste@teste.com"
        const password = faker.internet.password()

        cy.api_login(email, password)
            .then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body.message).to.equal('Email e/ou senha inválidos')
        })
    })
})