let page;

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/team");
  });

  test("The h1 header content'", async () => {
    await page.waitForTimeout(4000);
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual(
      "GitHub for teams · Build like the best teams on the planet · GitHub"
    );
  });

  test("The first link attribute", async () => {
    await page.waitForTimeout(4000);
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content");
  });

  test("The page contains Sign in button", async () => {
    await page.waitForTimeout(4000);
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toContain("Get started with Team");
  });
});

describe("Github page tests 2", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/");
  });

  test("should display 'GitHub' text on page", async () => {
    await page.waitForTimeout(4000);
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual("GitHub: Let’s build from here · GitHub");
  });

  test("Go to 'Start a free enterprise trial'", async () => {
    await page.waitForTimeout(4000);
    const btnSel = await page.$("main div div a");
    await btnSel.click();
    await page.waitForSelector("h1");
    const newTitle = await page.title();
    expect(newTitle).toEqual("GitHub: Let’s build from here · GitHub");
  });

  test("The page contains 'Sign up for GitHub' button", async () => {
    await page.waitForTimeout(4000);
    const btnSelector = ".btn-signup-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toContain("Sign up for GitHub");
  });
});
