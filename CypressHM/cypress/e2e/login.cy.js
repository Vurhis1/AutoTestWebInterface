describe("login procces", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("logins user with correct credentials", () => {
    cy.login("test@test.com", "test");
    cy.contains("Добро пожаловать test@test.com").should("be.visible");
  });

  it("shows error in case of empty login", () => {
    cy.login(null, "test");

    cy.get("#mail")
      .then((elements) => elements[0].checkValidity())
      .should("be.false");

    cy.get("#mail")
      .then((elements) => elements[0].validationMessage)
      .should("contain", "Заполните это поле.");
  });

  it("shows error in case of non-email login", () => {
    cy.login("wrongtext", "test");

    cy.get("#mail")
      .then((elements) => elements[0].checkValidity())
      .should("be.false");

    cy.get("#mail")
      .then((elements) => elements[0].validationMessage)
      .should(
        "contain",
        'Адрес электронной почты должен содержать символ "@". В адресе "wrongtext" отсутствует символ "@".'
      );
  });
});

describe("favorites procces", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.login("bropet@mail.ru", "123");
    cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible");
    //cy.addBook();
    //cy.formFilling("The Lord of the ring", "John R.R. Tolkien");
  });

  it("delete from favorites", () => {
    cy.addToFavorite();
    cy.goToFavorite();
    cy.delFromFav();
  });

  it("go to book", () => {
    cy.addToFavorite();
    cy.goToFavorite();
    cy.get(".card-body").click();
    cy.get("h2").should("be.visible");
  });

  it("download book", () => {
    cy.goToFavorite();
    cy.get(".card-body").click();
    cy.get(".col-md-7 > .btn").click();
  });
});
