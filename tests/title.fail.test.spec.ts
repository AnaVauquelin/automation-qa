import { test, expect } from '@playwright/test';


test.describe('Home', () => {
    test.use({ storageState: 'notLoggedInState.json'});
    test('Title', async ({ page }) => {
    
        await page.goto('https://bluechip.io/');

        await expect(page).toHaveTitle('Fail Test');

    })
    
})