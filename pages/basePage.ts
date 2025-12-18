import { Page, expect, Locator } from "@playwright/test"

export class BasePage {

    protected readonly page: Page

    constructor(page: Page){

        this.page = page;

    }


    async loadUrl(url: string){
        await this.page.goto(url)
    }

    async clickOn(locator: Locator){
        await locator.click();

    }

    async checkElement(locator: Locator){
        await locator.check();

    }

    async clickToggle(locator: Locator) {
        await locator.click();

    }

    async fillField(locator: Locator, value: string){
        await locator.fill(value);

    }

    async expectVisible(locator: Locator){
        await expect(locator).toBeVisible();

    }

    async expectChecked(locator: Locator){
        await expect(locator).toBeChecked();

    }

    async pressEnter(page: Page){
        await page.keyboard.press('Enter');
    }

    async uploadFile(locator: Locator, filePath: string) {
        await locator.setInputFiles(filePath);
    }

    async selectOptionDropdown(locator: Locator, value: string){
        await locator.selectOption(value);
    }

    async allTextContentsTable(locator: Locator){
        await locator.allTextContents();
    }


}