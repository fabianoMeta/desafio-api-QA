# Desafio-api-QA
Este projeto utiliza o cypress para automação de testes end-to-end na interface gráfica (GUI) da aplicação (lojaebac.ebaconline.art.br) e também para automação de APIs no repositório (https://serverest.dev/) com intuito de mapear alguns cenários de testes em ambos os ambientes para automatização dos testes.

## Testes Automatizados - Pasta `gui`

Este projeto utiliza o Cypress para automação de testes e2e na interface gráfica (GUI) da aplicação, onde foram mapeados os fluxos de login, cadastro, adicionar produtos no carrinho e concluir a compra como cenários a serem automatizados.

## Estrutura dos Testes

Os testes localizados em `cypress/e2e/gui` têm como objetivo validar funcionalidades da interface do usuário, garantindo que os fluxos planejados estejam funcionando conforme esperado.

### Exemplos de Testes Realizados na GUI

- **Login de Usuário:** Verifica se o login ocorre corretamente com credenciais válidas e exibe mensagens de erro para credenciais inválidas.
- **Cadastro de Novo Usuário:** Testa o fluxo de criação de conta, incluindo validação de campos obrigatórios.
- **Adição de Produtos ao Carrinho:** Garante que produtos podem ser adicionados e removidos do carrinho corretamente.
- **Finalização de Compra:** Valida o processo de checkout, desde o carrinho até a confirmação do pedido.
  
### Contexto para Criação dos cenários de testes acima 
Os testes acima foram plenejados pensando em sua importância para um fluxo de execução que será executado diversas vezes, em diferentes entregas, onde o login é a parte no qual será necessário ser chamada várias vezes, devido o cenário ser executado em diferentes situações dentro de um fluxo de compras no e-commerce, por exemplo, assim como o cadastro de usuário que seria um passo a ser executado, caso não haja um usuário já inserido na aplicação. Já o cenário de adição de produtos no carrinhos é um importante para mapear visando a finalização da compra, garantindo com isso que este fluxo esteja devidamente mapeado e por fim a finalização da compra é o destino final que normalmente ocorre num processo de compra dentro do e-commerce, mostrando com isso sua importância como fluxo a ser mapeado para automação e posteriormente execução em testes regressivos.

## Testes Automatizados - Pasta `api`

Além dos testes de interface, o projeto também inclui testes automatizados para a API da aplicação, localizados em `cypress/e2e/api`, onde foram mapeados fluxos de testes para as APIs de Login, Usuários, Produtos e Carrinhos.

### Exemplos de Testes Realizados na API

- **Autenticação de Usuário:** Valida o endpoint de login, verificando respostas para credenciais válidas e inválidas.
- **Cadastro via API:** Testa o endpoint de criação de usuários, incluindo validação de campos obrigatórios e tratamento de erros.
- **Operações com Produtos:** Verifica a criação, atualização, listagem e remoção de produtos via API.
- **Processo de Compra:** Garante que o fluxo de compra pode ser realizado integralmente por meio das requisições à API.

## Como Executar os Testes

1. Instale as dependências:
    ```bash
    npm install cypress --save-dev
    npm install @faker-js/faker --save-dev
    npm i cypress-plugin-api
    ```
2. Execute os testes:
    ```bash
    npx cypress open
    ```
    ou
    ```bash
    npx cypress run --spec 'cypress/e2e/**/*.cy.js'
    ```

## Observações

- Os testes são escritos em JavaScript e utilizam a sintaxe recomendada pelo Cypress.
- Certifique-se de que o ambiente da aplicação esteja disponível antes de rodar os testes.

---