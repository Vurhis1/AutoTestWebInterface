const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 360, // iphone
    viewportHeight: 760,
    baseUrl: "http://localhost:3000/",
    setupNodeEvents(on, config) {},
  },
});
