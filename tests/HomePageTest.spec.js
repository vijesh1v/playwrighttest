const {test, expect} = require('@playwright/test');
test ('Verify Home Page Title and URL', async ({page}) => {
    await page.goto('https://demoblaze.com/index.html');
    const pageTitle = await page.title();
    console.log("page title: " + pageTitle);
    await expect(page).toHaveTitle('STORE');
    
    await expect(page).toHaveURL('https://demoblaze.com/index.html');
    const pageURL = page.url();
    console.log("Current URL: " + pageURL);
    page.close();
})