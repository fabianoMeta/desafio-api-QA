# Testes Automatizados - Pasta `gui`

Este projeto utiliza o Cypress para automação de testes end-to-end na interface gráfica (GUI) da aplicação.

## Estrutura dos Testes

Os testes localizados em `cypress/e2e/gui` têm como objetivo validar funcionalidades da interface do usuário, garantindo que os fluxos principais estejam funcionando conforme esperado.

### Exemplos de Testes Realizados na GUI

- **Login de Usuário:** Verifica se o login ocorre corretamente com credenciais válidas e exibe mensagens de erro para credenciais inválidas.
- **Cadastro de Novo Usuário:** Testa o fluxo de criação de conta, incluindo validação de campos obrigatórios.
- **Adição de Produtos ao Carrinho:** Garante que produtos podem ser adicionados e removidos do carrinho corretamente.
- **Finalização de Compra:** Valida o processo de checkout, desde o carrinho até a confirmação do pedido.

## Testes Automatizados - Pasta `api`

Além dos testes de interface, o projeto também inclui testes automatizados para a API da aplicação, localizados em `cypress/e2e/api`.

### Exemplos de Testes Realizados na API

- **Autenticação de Usuário:** Valida o endpoint de login, verificando respostas para credenciais válidas e inválidas.
- **Cadastro via API:** Testa o endpoint de criação de usuários, incluindo validação de campos obrigatórios e tratamento de erros.
- **Operações com Produtos:** Verifica a criação, atualização, listagem e remoção de produtos via API.
- **Processo de Compra:** Garante que o fluxo de compra pode ser realizado integralmente por meio das requisições à API.

## Como Executar os Testes

1. Instale as dependências:
    ```bash
    npm install
    ```
2. Execute os testes:
    ```bash
    npx cypress open
    ```
    ou
    ```bash
    npx cypress run
    ```

## Observações

- Os testes são escritos em JavaScript e utilizam a sintaxe recomendada pelo Cypress.
- Certifique-se de que o ambiente da aplicação esteja disponível antes de rodar os testes.

---