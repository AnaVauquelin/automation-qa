/* eslint-disable playwright/no-page-pause */
/* eslint-disable playwright/expect-expect */
import { test, expect, Page } from '@playwright/test';
import HomePage from '../pages/home.page';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { faker } from '@faker-js/faker';

//import path from 'path';


test.describe.serial('My test website', () => {
    let page: Page;
    let homePage: HomePage;

    test.beforeAll(async ({ browser }) => {
      page = await browser.newPage();
      homePage = new HomePage(page);
      await homePage.navigate();
    });
    

    test('1 - Has Title', async () => {
        await expect(page).toHaveTitle('Independent software testing and QA provider – QATestLab');
      });



      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      test('2 - Contact Us Form - Faker JS', async () => {

        await homePage.acceptTermsBtn.click();
        await homePage.getInTouchBtn.click();
        await homePage.nameField.click();
        await homePage.nameField.fill(faker.person.fullName());
        await homePage.emailField.click();
        await homePage.emailField.fill(faker.internet.email());
        await homePage.companyField.click();
        await homePage.companyField.fill(faker.lorem.word());
        await homePage.detailsField.click();
        await homePage.detailsField.fill(faker.lorem.paragraphs(3));
        await homePage.privacyPolicy.click();
        await homePage.sendFormBtc.click();
        await homePage.confirmText.click();
        
      });


  



})