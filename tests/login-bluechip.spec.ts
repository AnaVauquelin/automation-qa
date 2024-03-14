
import { test, expect } from '@playwright/test';


test.describe.skip('Login once before doing all tests', () => {

    test('Login-positive', async ({ page }) => {

        await page.goto('https://bluechip.io');
        //timeout: 30 * 1000;
        
        await page.locator('text="Login"').click();
        
        await expect(page).toHaveURL('https://bluechip.io/in-en');

    })


    test('Find text in Footer', async ({ page }) => {

        await page.goto('https://bluechip.io');
        //timeout: 30 * 1000;
        
        const footerText = page.locator('[class="FooterPaymentMethods--footerBottomCopyrightText__FWhfJ FooterPaymentMethods--textSuperSmall__F_sa2"]');
        
        await expect (footerText).toBeVisible();

    })
    
    
})

