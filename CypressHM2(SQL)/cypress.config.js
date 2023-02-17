const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "dkgma3",
  e2e: {
    baseUrl: "https://petstore.swagger.io/v2/pet/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
