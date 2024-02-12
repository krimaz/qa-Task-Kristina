const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    email: '',
    password: ''
  },
  e2e: {
    setupNodeEvents(on, config) {
    },
    defaultCommandTimeout: 4000,
    pageLoadTimeout: 30000,
    viewportWidth: 1280,
    viewportHeight: 720,
    chromeWebSecurity: false,
    baseUrl: 'https://www.hostinger.com'
  }
});