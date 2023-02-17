const { should } = require("chai");
const sets = require("../fixtures/seats.json");

describe("movie selection screen", () => {
  it("shows schedule for 7 days", () => {
    cy.visit("/");
    cy.get(".page-nav__day").should("have.length", 7);
  });

  sets.forEach((current) => {
    it("reserved tickets", () => {
      afterEach,
        () => {
          if ("h2") {
            should("be.visible");
          } else {
            return;
          }
        };
      cy.visit("/");
      cy.get(".page-nav__day").eq(3).click();
      cy.get(".movie").contains("14:00").click();

      current.data.forEach((seat) => {
        cy.get(
          `.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`
        ).click();
      });
    });
  });
});
