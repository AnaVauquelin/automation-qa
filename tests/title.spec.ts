import { test, expect } from '@playwright/test';


test.describe('Home', () => {
    test.use({ storageState: 'notLoggedInState.json'});
    test('Title', async ({ page }) => {
    
        await page.goto('https://bluechip.io/');
        // eslint-disable-next-line playwright/no-wait-for-timeout
        //await page.waitForTimeout(5000);

        await expect(page).toHaveTitle('Bluechip Casino: Play for Real Money | Welcome Bonus Up To 500%');
        //await expect(page.locator('[class="HeaderUser--avatar__ORsYw"]')).toBeVisible();

    })




// test.describe('Aviator', () => {
//     test('Aviator Title', async ({ page }) => {
//         //open URL
//         await page.goto('https://bluechip.io/in-en/game/jetx-4j')

//         //verify title
//         await expect(page).toHaveTitle('BlueChip - JetX: Revolutionizing the Gaming Experience')
//     })
    
})