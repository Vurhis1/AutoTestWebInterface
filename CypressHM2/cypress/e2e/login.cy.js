const loginHappy = require("../fixtures/loginHappy.json");
const loginSad = require("../fixtures/loginSad.json");

describe("login checks in the admin panel", () => {
  loginHappy.forEach((current) => {
    it("Happy login", () => {
      cy.visit("/admin");
      current.happy.forEach((auto) => {
        cy.login(`${auto.log}`, `${auto.pass}`);
        cy.get("h2").should("be.visible");
      });
    });
  });

  loginSad.forEach((current) => {
    it("Sad login", () => {
      cy.visit("/admin");
      current.sad.forEach((auto) => {
        cy.login(`${auto.log}`, `${auto.pass}`);
      });
    });
  });
});
