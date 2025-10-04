import { test, expect } from '@playwright/test';
test('first test', async ({ page }) => {
    await page.goto('https://www.google.com');
    console.log(await page.title());
    await expect(page).toHaveTitle('Google')
})
test('second test', async ({ page }) => {
    await page.goto('https://www.bing.com');
    console.log(await page.title());
    await expect(page).toHaveTitle('Bing')
});