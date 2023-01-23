let page;
let timeout = 20000;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe(
  "Github page tests",
  () => {
    beforeEach(async () => {
      await page.goto("https://github.com/team");
    });

    test(
      "The h1 header content'",
      async () => {
        const firstLink = await page.$("header div div a");
        await firstLink.click();
        await page.waitForSelector("h1");
        const title2 = await page.title();
        return expect(title2).toEqual(
          "GitHub for teams · Build like the best teams on the planet · GitHub"
        );
      },
      timeout
    );

    test(
      "The first link attribute",
      async () => {
        const actual = await page.$eval("a", (link) =>
          link.getAttribute("href")
        );
        return expect(actual).toEqual("#start-of-content");
      },
      timeout
    );

    test("The page contains Sign in button", async () => {
      const btnSelector = ".btn-large-mktg.btn-mktg";
      await page.waitForSelector(btnSelector, {
        visible: true,
      });
      const actual = await page.$eval(btnSelector, (link) => link.textContent);
      return expect(actual).toContain("Get started with Team");
    });
  },
  timeout
);

describe("Github page tests 2", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/");
  });

  test(
    "should display 'GitHub' text on page",
    async () => {
      const firstLink = await page.$("header div div a");
      await firstLink.click();
      await page.waitForSelector("h1");
      const title2 = await page.title();
      return expect(title2).toEqual("GitHub: Let’s build from here · GitHub");
    },
    timeout
  );

  test(
    "Go to 'Start a free enterprise trial'",
    async () => {
      const btnSel = await page.$("main div div a");
      await btnSel.click();
      await page.waitForSelector("h1");
      const newTitle = await page.title();
      return expect(newTitle).toEqual("GitHub: Let’s build from here · GitHub");
    },
    timeout
  );

  test(
    "The page contains 'Sign up for GitHub' button",
    async () => {
      const btnSelector = ".btn-signup-mktg.btn-mktg";
      await page.waitForSelector(btnSelector, {
        visible: true,
      });
      const actual = await page.$eval(btnSelector, (link) => link.textContent);
      return expect(actual).toContain("Sign up for GitHub");
    },
    timeout
  );
});
