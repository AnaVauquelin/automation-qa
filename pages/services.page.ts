// eslint-disable-next-line @typescript-eslint/no-unused-vars
import{ Page, Locator } from '@playwright/test';


class ServicesPage {
page: Page;



constructor(page: Page){
    this.page = page;
   

   }

   async navigate() {
    await this.page.goto('/services');
   }



}

export default ServicesPage;