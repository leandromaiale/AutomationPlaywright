import { Page, expect, Locator } from "@playwright/test"

export class BasePage {

    protected readonly page: Page

    constructor(page: Page){

        this.page = page;

    }


    async loadUrl(url: string){
        await this.page.goto(url)
    }

    async expectVisible(locator: Locator){
        await expect(locator).toBeVisible();

    }
    async uploadFile(locator: Locator, filePath: string) {
        await locator.setInputFiles(filePath);
    }

    async pressEnter(){
        await this.page.keyboard.press('Enter')
    }

    

   


}