const { test, expect } = require('@playwright/test');

test("browser context test", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    page.goto('https://rahulshettyacademy.com/');

})
test.only('first page playwright test', async ({ page }) => {

    await page.goto('https://www.google.com');
    console.log(await page.title());
    await expect(page).toHaveTitle('google')


})
