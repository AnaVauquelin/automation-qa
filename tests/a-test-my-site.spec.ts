/* eslint-disable playwright/no-page-pause */
import { test, expect } from '@playwright/test';
//import HomePage from '../pages/home.page';



test.describe.skip('My test website', () => {

test('1 - has title', async ({ page }) => {

  await page.goto('https://48b48b05.justa.page');
  await expect(page).toHaveTitle(' Heading for my tests · Test Page for Ana ');

});


// eslint-disable-next-line playwright/expect-expect
test('2 - buttons are visible', async ({ page }) => {

    await page.goto('https://48b48b05.justa.page/');
    await page.locator('text=" Details "').isVisible();
    await page.locator('text="Click here "').isVisible();

})

test('3 - heading is visible', async ({ page }) => {

   await page.goto('https://48b48b05.justa.page/');
   const pageTitle = page.locator('text=" Heading for my tests"');

   await expect(pageTitle).toBeVisible();

})

test('4 - details link is enabled', async ({ page }) => {

   await page.goto('https://48b48b05.justa.page/');
   const detailsButton = page.locator('[class="main__buttons"] >> text=" Details "');

   await expect(detailsButton).toBeEnabled();

})

test('5 - logo - xpath selector - is visible', async ({ page }) => {

    await page.goto('https://48b48b05.justa.page/');
    const logo = page.locator('//*[@class="header header--timer"] //*[@class="header__logo"]');
 
    await expect(logo).toBeVisible();
 
 })


 test('6 - BlueChip - buttons - multiple elements', async ({ page }) => {

    const expectedLinks = [
        "Sport",
        "Live Betting",
        "Live Casino",
        "Games",
        "Promotions",
        "VIP"
    ];

    await page.goto('https://bluechip.io/');
    const navLinks = page.locator('[class="footer-legal-information"] li[class*=link]').nth(3);
 
    // expect (await navLinks.allTextContents()).toEqual(expectedLinks);
     await expect (navLinks).toHaveText(expectedLinks[3]);

 
 })


 test('7 - BlueChip - footer - Legal info', async ({ page }) => {

    const expectedLinks = [
        "General Terms & Conditions",
        "Responsible Gaming Policy",
        "Sports Betting Rules",
        "Privacy and Cookies Policy",
        "Payment Methods",
        "Casino Bonus Terms & Conditions",
        "Limits"
    ];

    await page.goto('https://bluechip.io/');
    const footerLegalLinks = page.locator('[data-testid="footer-legal-information"] [class*=LinksGroup]');
    // expect (await navLinks.allTextContents()).toEqual(expectedLinks);
    

    //  //loop through the list and assert char length > 5
    //  for (const el of await footerLegalLinks.elementHandles()) {
    //     expect(await el.textContent()).toBeGreaterThan(5)
    //  } - not working here =(((

    expect (await footerLegalLinks.allTextContents()).toEqual(expectedLinks);
    //expect (await footerLegalLinks.allTextContents()).toHaveLength()
    
    expect (await footerLegalLinks.count()).toEqual(7);


 })


 test('8 - BlueChip - Login', async ({ page }) => {

    await page.goto('https://bluechip.io/');
    await page.locator('[data-testid="sign_button"]').click();
    await page.locator('[class="BaseFormField Input-Container Input-Container_email"] [name="email"]').fill('inr.acc@mychip.io');
    await page.locator('[class="BaseFormField Input-Container"] [data-testid="password-input"]').fill('pas2057aaqa');

    await page.locator('[data-testid="signIn-submit-btn"]').click();

    await expect(page.locator('[class="HeaderUser--avatar__ORsYw"]')).toBeVisible();

 })



 test('9 - BlueChip - Login - Soft Assertion', async ({ page }) => {

   await page.goto('https://bluechip.io/');
   await page.locator('[data-testid="sign_button"]').click();
   await page.locator('[class="BaseFormField Input-Container Input-Container_email"] [name="email"]').fill('inr.acc@mychip.io');
   await page.locator('[class="BaseFormField Input-Container"] [data-testid="password-input"]').fill('pas2057aaqa');

   await page.locator('[data-testid="signIn-submit-btn"]').click();

   await expect.soft(page.locator('[class="HeaderUser--avatar__ORsYw"]')).toBeFocused();


   await expect(page.locator('[class="HeaderUser--avatar__ORsYw"]')).toBeVisible();

   expect(test.info().errors.length).toBeLessThan(1);

})


// test('10 - BlueChip - Chat Test', async ({ page }) => {

//    await page.goto('https://bluechip.io/');
//    //await page.locator('[aria-label="Open LiveChat chat widget"]').click(); // not working
//    await page.locator('[data-testid="burger-menu-icon"]').click();
//    await page.locator('[data-testid="burgerMenu-support-btn"]').click();



//    await page.locator('[id="name"]').fill('Ana'); //chat is not working in tests
//    await page.locator('[id="email"]').fill('ana@gmail.com');
//    await page.locator('[type="submit"]').click();


//    await page.locator('[aria-label="Add an attachment"]').click();

//    await page.locator('[class="lc-1hoos7k ezmrzej0"]').click();

  
// })

// test('11 - BlueChip - Profile - Upload file', async ({ page }) => {

//    await page.goto('https://bluechip.io/');
//    await page.locator('[data-testid="sign_button"]').click();
//    await page.locator('[data-testid="email-tab"]').click();

//    await page.locator('[class="BaseFormField Input-Container Input-Container_email"] [name="email"]').fill('inr.acc@mychip.io');
//    await page.locator('[class="BaseFormField Input-Container"] [data-testid="password-input"]').fill('pas2057aaqa');

//    await page.locator('[data-testid="signIn-submit-btn"]').click();

//    await page.locator('[class="HeaderUser--avatar__ORsYw"]').click();
//    await page.locator('[data-testid="3-profile-link"]').click();
//    await page.locator('[data-testid="verification-tab"]').click();
// eslint-disable-next-line no-irregular-whitespace
//    await page.locator('text=" Passport "').click(); // not working
//    await page.locator('[type="file"]').click();

//    const filePath = path.join(__dirname, '..data/passport.jpg');
//    await page.setInputFiles('input#upfile_1', filePath);


//    //const errorPopup =  await page.locator('class="popup"');
//    await expect(page.locator('class="popup"')).toContainText('The uploaded documents do not match the country or document type selected. Please upload documents consistent with your selections or choose the country and type of document you intend to upload.');


// })


// eslint-disable-next-line playwright/expect-expect
test('10 - Hardcoded sleep - Wait for page to load', async ({ page }) => {

   await page.goto('https://bluechip.io/');

   // eslint-disable-next-line playwright/no-wait-for-timeout
   await page.waitForTimeout(5000); // not the best way to wait =)

   await page.locator('[data-testid="sign_button"]').click();

})

// eslint-disable-next-line playwright/expect-expect
test('11 - Conditional wait - Wait for page to load', async ({ page }) => {

   await page.goto('https://bluechip.io/');

   await page.locator('[data-testid="sign_button"]').waitFor({ state: 'visible', timeout: 10000});

   await page.locator('[data-testid="sign_button"]').click();

})

test('12 - Assertion wait - Wait for page to load', async ({ page }) => {

   await page.goto('https://bluechip.io/ioo');

   await page.pause();

   // await page.locator('[data-testid="sign_button"]').waitFor({ state: 'visible', timeout: 10000});

   // await page.locator('[data-testid="sign_button"]').click();

   await expect(page.locator('[data-testid="sign_button"]')).toContainText('Login', {timeout: 10000});

})

// eslint-disable-next-line playwright/expect-expect
test('13 - Recorder test', async ({ page }) => {

   await page.goto('https://qatestlab.com');

   //await page.pause();

  await page.getByRole('button', { name: 'Accept All' }).click();
  await page.getByRole('link', { name: 'Services', exact: true }).click();
  await page.getByRole('link', { name: 'Solutions', exact: true }).click();
  await page.locator('#menu-main-menu span').filter({ hasText: 'Industries' }).first().click();
  await page.getByRole('link', { name: 'Get in Touch', exact: true }).click();
  await page.getByPlaceholder('Name*').click();
  await page.getByPlaceholder('Name*').fill('Ana');
  await page.getByPlaceholder('Email*').click();
  await page.getByPlaceholder('Email*').fill('rr@gmail.com');
  await page.getByPlaceholder('Company*').click();
  await page.getByPlaceholder('Company*').fill('Test QA');
  await page.getByPlaceholder('Enter any details you').click();
  await page.getByPlaceholder('Enter any details you').fill('Test QA');
  await page.getByText('I hereby give consent to the').click();
  await page.getByRole('button', { name: 'Send' }).click();
  await page.getByRole('heading', { name: 'Thank you!' }).click();


})





})



