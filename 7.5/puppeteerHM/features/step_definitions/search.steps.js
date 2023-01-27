const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("cucumber");
const { getText, clickElement } = require("../../lib/commands.js");

Before(async function () {
  const browser = await puppeteer.launch({ headless: true, slowMo: 50 });
  const page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

Given(
  "buyer is on {string} page",
  async function (string) {
    return await this.page.goto(
      `http://qamid.tmweb.ru/client/index.php${string}`
    );
  },
  60000
);

When("buyer go to tickets", { timeout: 60000 }, async function () {
  return await clickElement(
    this.page,
    "body > main > section:nth-child(1) > div.movie-seances__hall > ul > li > a"
  );
});

Then("buyer sees tickets on the film {string}", async function () {
  const actual = await getText(this.page, "h2");
  const expected = "Логан";
  return expect(actual).toContains(expected);
});
