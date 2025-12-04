import {test, Page, Browser, expect} from '@playwright/test'
import { Login } from '../pages/Login'
import dataLogin from '../data/dataLogin.json'

(async () => {
    let page: Page
    let browser: Browser

    test.describe('Login Page Test', () => {

        dataLogin.users.forEach((user) => {

        test('Login with valid credentials', async ({ page }) => {

            await test.step(`I'm navigating to the login page.`, async () => {
                await page.goto('https://the-internet.herokuapp.com/login')
            })

            await test.step('Complete Username field', async () => {
                const login = new Login(page)
                await login.usernameField.fill(`${user.successfulUsername}`);
                await login.passwordField.fill('SuperSecretPassword!');
                await login.loginButton.click();
                await expect (login.loginSuccesful).toBeVisible();
                
            })
            
            
            
        })
        


    })
        
    })
    



})();