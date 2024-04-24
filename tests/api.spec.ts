/* eslint-disable playwright/expect-expect */
/* eslint-disable playwright/no-page-pause */
import { test } from '@playwright/test';
//import HomePage from '../pages/home.page';



test.describe('API', () => {

test('1 - api - login', async ({ page, request }) => {

  const response = await request.post('https://bluechip.io/api/signin', {
    data: {
        brandId: 'bluechip',
        device: 'desktop',
        login: 'inr.acc@mychip.io',
        password: 'pas2057aaqa',
        timeZone: 'GMT+01:00',
        type: 'email'
    }
  });

  const responseBody = await response.json();
  const token = responseBody.auth.token;
  const uuid = responseBody.auth.uuid;

  console.log(token);

  console.log(uuid);

  await page.goto('https://bluechip.io');

  await page.pause();



});




})



