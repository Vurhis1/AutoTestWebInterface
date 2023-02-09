const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1200, // laptop
    viewportHeight: 600,
    baseUrl: "http://localhost:3000/",
    setupNodeEvents(on, config) {},
  },
});
