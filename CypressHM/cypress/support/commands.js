// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (email, password) => {
  cy.contains("Log in").click();

  if (email) {
    cy.get("#mail").type(email);
  }

  if (password) {
    cy.get("#pass").type(password);
  }

  cy.get("button[type = submit]").click();
});

Cypress.Commands.add("addBook", (book) => {
  cy.contains("Add new").click();

  if (book) {
    cy.contains("Book description").should("be.visible");
  }
});

Cypress.Commands.add("formFilling", (title, authors) => {
  if (title) {
    cy.get("#title").type(title);
  }

  if (authors) {
    cy.get("#authors").type(authors);
  }

  cy.get("form > .ml-2").click();
});

Cypress.Commands.add("addToFavorite", () => {
  cy.contains("Add to favorite").click();
});

Cypress.Commands.add("goToFavorite", () => {
  cy.get("h4").click();
});

Cypress.Commands.add("delFromFav", () => {
  cy.get(".card-footer > .btn").click();
  cy.contains("Please add some book to favorit on home page!").should(
    "be.visible"
  );
});
