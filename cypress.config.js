const { defineConfig } = require("cypress");

const apiBaseUrl = "https://serverest.dev";
const baseUrl = "http://lojaebac.ebaconline.art.br";

module.exports = defineConfig({
  e2e: {
    baseUrl,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // Você pode acessar config.env.apiBaseUrl aqui se precisar
    },
    env: {
      apiBaseUrl, // agora disponível como Cypress.env('apiBaseUrl')
      hideCredentials: true,
      requestMode: true,
      snapshotOnly: false,
    },
  },
});
