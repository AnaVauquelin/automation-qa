import{ Page, Locator } from '@playwright/test';


class HomePage {
page: Page;
acceptTermsBtn: Locator;
getInTouchBtn: Locator;
nameField: Locator;
emailField: Locator;
companyField: Locator;
detailsField: Locator;
privacyPolicy: Locator;
sendFormBtc: Locator;
confirmText: Locator;


constructor(page: Page){
    this.page = page;
    this.acceptTermsBtn = page.getByRole('button', { name: 'Accept All' });
    this.getInTouchBtn = page.getByRole('link', { name: 'Get in Touch', exact: true });
    this.nameField = page.getByPlaceholder('Name*');
    this.emailField = page.getByPlaceholder('Email*');
    this.companyField = page.getByPlaceholder('Company*');
    this.detailsField = page.getByPlaceholder('Enter any details you');
    this.privacyPolicy = page.getByText('I hereby give consent to the');
    this.sendFormBtc = page.getByRole('button', { name: 'Send' });
    this.confirmText = page.getByRole('heading', { name: 'Thank you!' });

   }

   async navigate() {
    await this.page.goto('/');
   }


//    getNavLinksText() {
//     retunr this.getNavLinksText.allTextContents()
//    }
}

export default HomePage;