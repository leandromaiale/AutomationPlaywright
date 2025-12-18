import { type Locator, type Page } from "@playwright/test";

export class Login {
    readonly page: Page;
    readonly usernameField: Locator
    readonly passwordField: Locator
    readonly loginButton: Locator
    readonly loginSuccesful: Locator
    readonly wrongUsernameLogin: Locator
    readonly wrongPasswordLogin: Locator



    constructor(page: Page){
        this.page = page
        this.usernameField = page.getByRole('textbox', { name: 'Username' })
        this.passwordField = page.getByRole('textbox', { name: 'Password' })
        this.loginButton = page.getByRole('button', { name: ' Login' })
        this.loginSuccesful = page.getByText('You logged into a secure area')
        this.wrongUsernameLogin = page.getByText('Your username is invalid! ×')
        this.wrongPasswordLogin = page.getByText('Your password is invalid! ×')
    }


    
}