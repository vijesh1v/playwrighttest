//const { test, expect } = require('@playwright/test');
import { test, expect } from '@playwright/test';

test.describe('Login and Logout Tests', () => {
  test('should login and logout successfully', async ({ page }) => {
    // Go to the website
    await page.goto('https://demoblaze.com/index.html');

    // Click on the 'Log in' button to open login modal
    await page.click('#login2');

    // Wait for the modal to appear
    await page.waitForSelector('#logInModal', { state: 'visible' });

    // Fill in login credentials
    await page.fill('#loginusername', 'pavanol');
    await page.fill('#loginpassword', 'test@123');

    // Click the login button
    await page.click('button:has-text("Log in")');

    // Wait for login to be successful and user to be authenticated
    await page.waitForSelector('#nameofuser', { state: 'visible' });

    // Click on the 'Log out' button
    await page.click('#logout2');

    // Verify successful logout
    await page.waitForSelector('#login2', { state: 'visible' });
  });
});

