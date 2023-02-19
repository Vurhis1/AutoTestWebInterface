it("UI test from booking tickets in an accessible hall", () => {
  cy.visit("/admin");
  cy.login("qamid@qamid.ru", "qamid");
  cy.nameInAdmin().then((text1) => {
    cy.visit("/");
    cy.nameInKino().then((text2) => {
      if (text1 != text2) {
        cy.get(".page-nav__day").eq(3).click();
        cy.get(".movie").contains("23:45").click();
        cy.get("div:nth-child(3) > span:nth-child(1)").click();
        cy.get(".acceptin-button").click();
        cy.contains("Получить код бронирования").click();
        cy.contains("Приятного просмотра!").should("be.visible");
      }
    });
  });
});
