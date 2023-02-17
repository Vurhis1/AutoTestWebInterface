describe("Main title tests", () => {
  it("Main title in authorization", () => {
    cy.visit("/admin");
    cy.get(".login__title").should("be.visible");
  });

  it("Main title in halls management", () => {
    cy.visit("/admin");
    cy.login("qamid@qamid.ru", "qamid");
    cy.get("h2").should("be.visible");
  });
});

it("Main title in select tickets", () => {
  cy.visit("/");
  cy.get("h1").should("be.visible");
});
