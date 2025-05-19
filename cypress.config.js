const { defineConfig } = require("cypress");
const path = require('path');
const fs = require('fs-extra'); // Adicionado

const apiBaseUrl = "https://serverest.dev";
const baseUrl = "http://lojaebac.ebaconline.art.br";

module.exports = defineConfig({
  e2e: {
    baseUrl,
    setupNodeEvents(on, config) {
      // Limpa a pasta de reports antes de cada execução
      on('before:run', async (details) => {
        const reportsDir = path.join(__dirname, 'cypress', 'results');
        if (fs.existsSync(reportsDir)) {
          await fs.emptyDir(reportsDir);
        }
      });

      on('after:spec', (spec, results) => {
        if (results && results.video) {
          // fs.unlinkSync(results.video)
        }
      });

      return config;
    },
    env: {
      apiBaseUrl,
      hideCredentials: true,
      requestMode: true,
      snapshotOnly: false,
    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: true,
    json: false,
    timestamp: 'yyyy-mm-dd_HH-MM-ss',
    reportFilename: '[name]-report',
  },
  video: false,
});
