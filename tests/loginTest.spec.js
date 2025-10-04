const { expect, test } = require("@playwright/test");
test('verify that user can login ', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    console.log(await page.title());
    await page.locator("input[placeholder = 'Username']").fill('Admin');
    await page.locator("input[placeholder = 'Password']").fill('admin123');
    await page.locator("[type = 'submit']").click();

})