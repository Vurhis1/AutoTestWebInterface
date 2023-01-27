//const { expect } = require("chai");
const { clickElement, getText } = require("../lib/commands.js");

let page;

describe("Ticket booking", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/payment.php");
  });

  afterEach(() => {
    page.close();
  });

  test("Ticket booking happy path", async () => {
    const selNewDate = await clickElement(page, "body > nav > a:nth-child(4)");
    const selTime = await clickElement(page, "ul li");
    const selPlace = await clickElement(
      page,
      "div:nth-child(1) > span:nth-child(2)"
    );
    const btnSelTicket = await clickElement(page, "main span");
    const btnSelBook = await clickElement(page, "button.acceptin-button");
    const btnSelGetCode = await clickElement(page, ".acceptin-button");
    const actual = await getText(page, ".ticket__hint");
    expect(actual).toContain(
      "Покажите QR-код нашему контроллеру для подтверждения бронирования."
    );
  });

  test("The first link text 'Идем в кино'", async () => {
    const actual = await getText(page, "h1 span");
    expect(actual).toContain("в");
  });

  test("Ticket booking sad path", async () => {
    const actual = await getText(page, ["__chair_taken"]);
    const expect = clickElement();
    expect(actual).toContain(expect);
  });
});
