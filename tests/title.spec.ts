import { test, expect } from '@playwright/test';


test.describe('Home', () => {
    test.use({ storageState: 'notLoggedInState.json'});
    test('Title', async ({ page }) => {
    

        await page.goto('https://qatestlab.com/');
        // eslint-disable-next-line playwright/no-wait-for-timeout
        //await page.waitForTimeout(5000);

        await expect(page).toHaveTitle('Independent software testing and QA provider – QATestLab');


    })




// test.describe('Aviator', () => {
//     test('Aviator Title', async ({ page }) => {
//         //open URL
//         await page.goto('https://bluechip.io/in-en/game/jetx-4j')

//         //verify title
//         await expect(page).toHaveTitle('BlueChip - JetX: Revolutionizing the Gaming Experience')
//     })
    
})