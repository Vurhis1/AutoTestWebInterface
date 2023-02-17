const { test, expect } = require("@playwright/test");
import { userEmail, userPass } from "../user";

test.beforeEach(async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");
});

test("Success authorization netology", async ({ page }) => {
  await page.locator('[placeholder = "Email"]').fill(userEmail);
  await page.locator('[placeholder = "Пароль"]').fill(userPass);
  await page.locator('[data-testid="login-submit-btn"]').click();
  const header = await page.locator("h2");
  await expect(header).toHaveText("Мои курсы и профессии");

  await page.screenshot({
    path: "image/screenshot_" + ".png",
  });
});

test("Failed authorization netology", async ({ page }) => {
  await page.locator('[placeholder = "Email"]').fill("exemple@gmail.com");
  await page.locator('[placeholder = "Пароль"]').fill(userPass);
  await page.locator('[data-testid = "login-submit-btn"]').click();

  const errorText = page.locator('[data-testid="login-error-hint"]');
  await expect(errorText).toHaveText("Вы ввели неправильно логин или пароль");

  await page.screenshot({
    path: "image/screenshot_" + Date.now() + ".png",
  });
});
