//const LoginPage = require('./loginFunctions');
const { test, expect } = require('@playwright/test');
test.describe.configure({ mode: 'parallel' });
import LoginPage from './loginFunctions';


test('Login to website', async ({ browser }) => {
  // Create a new incognito browser context
  const context = await browser.newContext();
  const page = await context.newPage();

  const loginPage = new LoginPage(page);
  const username = 'pavanol';
  const password = 'test@123';

  await loginPage.navigateToLoginPage();
  await loginPage.fillLoginForm(username, password);
  await loginPage.SuccessfulLogout();
  await loginPage.validatelastpage();

  // Close the context after test
  await context.close();
});
