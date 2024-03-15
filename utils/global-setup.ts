import { FullConfig, chromium } from "@playwright/test";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function globalSetup(config: FullConfig) {

    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://bluechip.io/');

    //no login
    await page.context().storageState({ path: 'notLoggedInState.json' });

    //login
    await page.locator('[data-testid="sign_button"]').click();
    await page.locator('[class="BaseFormField Input-Container Input-Container_email"] [name="email"]').fill('inr.acc@mychip.io');
    await page.locator('[class="BaseFormField Input-Container"] [data-testid="password-input"]').fill('pas2057aaqa');
    await page.locator('[data-testid="signIn-submit-btn"]').click();

    //save signed-in state to 'loggedInState.json'
    await page.context().storageState({ path: 'loggedInState.json' });
    await browser.close();

}

export default globalSetup;