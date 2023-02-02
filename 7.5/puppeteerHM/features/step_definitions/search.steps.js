const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("cucumber");
const { getText, clickElement } = require("../../lib/commands.js");

Before(async function () {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

Given("user is on page {string}", { timeout: 10000 }, async function (string) {
  return await this.page.goto(`${string}`);
});

When("user select new date", { timeout: 10000 }, async function () {
  return await clickElement(this.page, "body > nav > a:nth-child(4)");
});

When("user go to tickets", { timeout: 10000 }, async function () {
  return await clickElement(
    this.page,
    "body > main > section:nth-child(2) > div.movie-seances__hall > ul > li > a"
  );
});

When("user go to tickets second film", { timeout: 10000 }, async function () {
  return await clickElement(
    this.page,
    "body > main > section:nth-child(3) > div.movie-seances__hall > ul > li > a"
  );
});

When("user select a ticket", { timeout: 10000 }, async function () {
  return await clickElement(this.page, "div:nth-child(1) > span:nth-child(1)");
});

When(
  "user select a ticket film Hercules",
  { timeout: 10000 },
  async function () {
    return await clickElement(
      this.page,
      "div:nth-child(9) > span:nth-child(1)"
    );
  }
);

When("user click on the button", { timeout: 10000 }, async function () {
  return await clickElement(this.page, "button.acceptin-button");
});

Then(
  "user sees text film {string}",
  { timeout: 10000 },
  async function (string) {
    const actual = await getText(
      this.page,
      "body > main > section > div > p:nth-child(1) > span"
    );
    const expected = await string;
    expect(actual).contains(expected);
  }
);

Then("user cannot buying chair taken", { timeout: 10000 }, async function () {
  expect(
    String(
      await this.page.$eval("button", (button) => {
        return button.disabled;
      })
    )
  ).contain("true");
});
