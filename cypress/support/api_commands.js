
Cypress.Commands.add('api_login', (
    email,
    password,
) => {
    cy.request({
        method: 'POST',
        url: `${Cypress.env('apiBaseUrl')}/login`,
        body: {
            email: email,
            password: password,
        },
        failOnStatusCode: false,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    })
})

Cypress.Commands.add('api_usuarios', dadosUsuario => {
    cy.request({
        method: 'POST',
        url: `${Cypress.env('apiBaseUrl')}/usuarios`,
        body: {
            nome: dadosUsuario.nome,
            email: dadosUsuario.email,
            password: dadosUsuario.password,
            administrador: dadosUsuario.administrador,
        },
        failOnStatusCode: false,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    })
})

Cypress.Commands.add('api_usuarios_id', id => {
    cy.request({
        method: 'GET',
        url: `${Cypress.env('apiBaseUrl')}/usuarios/${id}`,
        failOnStatusCode: false,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    })
})

Cypress.Commands.add('api_cadastrarProdutos', ( produto, authorization ) => {
    cy.request({
        method: 'POST',
        url: `${Cypress.env('apiBaseUrl')}/produtos`,
        body: {
            nome: produto.nome,
            preco: produto.preco,
            descricao: produto.descricao,
            quantidade: produto.quantidade,
        },
        failOnStatusCode: false,
        headers: {
            'Authorization': `${authorization}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    })
})

Cypress.Commands.add('api_excluirProduto', ( produtoId ) => {
    cy.request({
        method: 'DELETE',
        url: `${Cypress.env('apiBaseUrl')}/produtos/${produtoId}`,
        failOnStatusCode: false,
        headers: {
            'Authorization': `${authorization}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    })
})

Cypress.Commands.add('api_buscarProduto', ( produtoId, authorization ) => {
    cy.request({
        method: 'GET',
        url: `${Cypress.env('apiBaseUrl')}/produtos/${produtoId}`,
        failOnStatusCode: false,
        headers: {
            'Authorization': `${authorization}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    })
})

Cypress.Commands.add('api_cadastrarCarrinho', ( carrinho, authorization ) => {
    const produtos = [
        {
            idProduto: carrinho.idProduto,
            quantidade: carrinho.quantidade,
        },
    ]

    cy.request({
        method: 'POST',
        url: `${Cypress.env('apiBaseUrl')}/carrinhos`,
        body: { produtos: produtos },
        failOnStatusCode: false,
        headers: {
            'Authorization': `${authorization}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    })
})

Cypress.Commands.add('api_excluirCarrinho', ( token ) => {
    cy.request({
        method: 'DELETE',
        url: `${Cypress.env('apiBaseUrl')}/carrinhos/concluir-compra`,
        failOnStatusCode: false,
        headers: {
            'Authorization': `${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    })
})