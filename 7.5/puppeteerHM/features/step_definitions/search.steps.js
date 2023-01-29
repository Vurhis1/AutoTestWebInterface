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

Given("user is on page {string}", { timeout: 10000 }, async function (string) {
  return await this.page.goto(`${string}`);
});

When("buyer go to tickets", { timeout: 10000 }, async function () {
  return await clickElement(
    this.page,
    "body > main > section:nth-child(1) > div.movie-seances__hall > ul > li > a"
  );
});

Then("user sees text {string}", { timeout: 10000 }, async function (string) {
  const actual = await getText(this.page, "p.buying__info-start");
  const expected = await string;
  expect(actual).contains(expected);
});
