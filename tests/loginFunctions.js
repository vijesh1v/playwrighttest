class LoginPage {
    constructor(page) {
        this.page = page;
        this.HomeLoginButton = page.locator('#login2');
        this.MainLoginButton = page.locator('button:has-text("Log in")');
        this.LogoutButton = page.locator('#logout2');
    }
   
 t
    async navigateToLoginPage() {
        await this.page.goto('https://demoblaze.com/index.html');
    }

    async fillLoginForm(username, password) {
      //  await this.page.click('#login2'); // Click "Log in" to open modal
        await this.HomeLoginButton.click();
        await this.page.waitForSelector('#loginusername', { state: 'visible', timeout: 5000 });
        await this.page.fill('#loginusername', username);
        await this.page.fill('#loginpassword', password);
        await this.page.waitForSelector('button:has-text("Log in")');
        //await this.page.click("//button[contains(text(),'Log in')]");
        await this.MainLoginButton.click();
        await this.page.waitForSelector('#nameofuser', { state: 'visible' ,timeout: 5000});
    }
 
    async SuccessfulLogout() {
       // await this.page.waitForSelector('#logout2', { state: 'visible' });
       // await this.page.click('#logout2');
        await this.LogoutButton.click();

        }

    async validatelastpage() {
        await expect(this.HomeLoginButton).toBeVisible();
        //await this.page.waitForSelector('#login2', { state: 'visible'});
        await this.page.waitForTimeout(5000); // Pauses for 5 seconds
    }
}
import { expect } from '@playwright/test'; // Import expect for assertions

//module.exports = LoginPage;

export default LoginPage;
