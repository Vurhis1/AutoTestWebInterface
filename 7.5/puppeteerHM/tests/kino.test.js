const { clickElement, getText } = require("../lib/commands.js");

let page;

describe("Ticket booking", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/index.php");
    await clickElement(page, "body > nav > a:nth-child(4)");
  });

  afterEach(() => {
    page.close();
  });

  test("Ticket booking happy path film 'Логан'", async () => {
    await clickElement(page, "ul li");
    await clickElement(page, "div:nth-child(2) > span:nth-child(1)");
    await clickElement(page, "button.acceptin-button");
    await clickElement(page, ".acceptin-button");
    const actual = await getText(
      page,
      "body > main > section > div > p:nth-child(1) > span"
    );
    expect(actual).toContain("Логан");
  });

  test("Ticket booking happy path film 'Hercules'", async () => {
    await clickElement(
      page,
      "body > main > section:nth-child(2) > div.movie-seances__hall > ul > li > a"
    );
    await clickElement(page, "div:nth-child(10) > span:nth-child(8)");
    await clickElement(page, "button.acceptin-button");
    await clickElement(page, ".acceptin-button");
    const actual = await getText(
      page,
      "body > main > section > div > p:nth-child(3) > span"
    );
    expect(actual).toContain("Hercules");
  });

  test("Ticket booking sad path", async () => {
    await clickElement(page, "ul li");
    await clickElement(page, "div:nth-child(1) > span:nth-child(1)");
    expect(
      String(
        await page.$eval("button", (button) => {
          return button.disabled;
        })
      )
    ).toContain("true");
  });
});
