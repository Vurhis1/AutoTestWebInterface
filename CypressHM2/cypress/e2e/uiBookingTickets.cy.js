it("UI test from booking tickets in an accessible hall", () => {
  cy.visit("/admin");
  cy.login("qamid@qamid.ru", "qamid");
  cy.nameInAdmin()
    .then(($el) => $el.textContent)
    .should("have.text", "Логан");
  cy.nameInAdmin()
    .invoke("text")
    .then((text) => {
      cy.visit("qamid.tmweb.ru");
      cy.nameInKino().should("have.text", text);
      cy.selectDay();
      cy.selectFilm();
      cy.selectChair();
      cy.btnBooking();
      cy.contains("Получить код бронирования").click();
      cy.contains("Приятного просмотра!").should("be.visible");
    });
});
