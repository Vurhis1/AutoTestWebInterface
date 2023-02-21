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
  if (email) {
    cy.get(
      "body > main > section > div > form > label:nth-child(1) > input"
    ).type(email);
  }

  if (password) {
    cy.get(
      "body > main > section > div > form > label:nth-child(2) > input"
    ).type(password);
  }

  cy.get(".login__button[type = submit]").click();
});

Cypress.Commands.add("nameInAdmin", () => {
  cy.get(
    "#grid-session > div > div.conf-step__seances > div:nth-child(6) > div > div > p.conf-step__seances-movie-title"
  );
});

Cypress.Commands.add("nameInKino", () => {
  cy.get(
    "body > main > section:nth-child(2) > div.movie__info > div.movie__description > h2"
  );
});

Cypress.Commands.add("selectDay", () => {
  cy.get(".page-nav__day").eq(3).click();
});

Cypress.Commands.add("selectFilm", () => {
  cy.get(".movie").contains("23:45").click();
});

Cypress.Commands.add("selectChair", () => {
  cy.get("div:nth-child(2) > span:nth-child(1)").click();
});

Cypress.Commands.add("btnBooking", () => {
  cy.get(".acceptin-button").click();
});
