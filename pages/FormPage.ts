import {BasePage} from "./basePage";
import { ElementsLocators } from "./locators/locatorsElements";
import { Page, Locator } from "@playwright/test";
import { formLocators } from "./locators/locatorsForm";
import { TEST_IMAGE_PATH } from '../utils/filepaths';

export class FormPage extends BasePage {
    private readonly firstNameField: Locator;
    private readonly lastNameField: Locator;
    private readonly emailField: Locator;
    private readonly radioGenderField: Locator;
    private readonly mobileNumberField: Locator;
    private readonly bithdayDateField: Locator;
    private readonly subjectField: Locator;
    private readonly socialSelecctionSubject: Locator;
    private readonly hobbiesCheckField: Locator;
    private readonly uploadImageButton: Locator;
    private readonly addressField: Locator;
    private readonly stateDropdownField: Locator;
    private readonly stateSelectionOption: Locator;
    private readonly cityDropdownField: Locator;
    private readonly citySelectionOption: Locator;
    private readonly submitButton: Locator;
    private readonly submitTable: Locator;
    

    constructor(page: Page){
        super(page)
        this.firstNameField = formLocators.firstNameField(page);
        this.lastNameField = formLocators.lastNameField(page);
        this.emailField = formLocators.emailField(page);
        this.radioGenderField = formLocators.radioGenderField(page);
        this.mobileNumberField = formLocators.mobileNumberField(page);
        this.bithdayDateField = formLocators.bithdayDateField(page);
        this.subjectField = formLocators.subjectField(page);
        this.socialSelecctionSubject = formLocators.socialSelecctionSubject(page);
        this.hobbiesCheckField = formLocators.hobbiesCheckField(page);
        this.uploadImageButton = formLocators.uploadImageButton(page);
        this.addressField = formLocators.addressField(page);
        this.stateDropdownField = formLocators.stateDropdownField(page);
        this.stateSelectionOption = formLocators.stateSelectionOption(page);
        this.cityDropdownField = formLocators.cityDropdownField(page);
        this.citySelectionOption = formLocators.citySelectionOption(page);
        this.submitButton = formLocators.submitButton(page);    
        this.submitTable = formLocators.submitTable(page)

    }

    async fillFirstNameField(value: string){
        await this.fillField(this.firstNameField, value);
    }

    async fillLastNameField(value: string){
        await this.fillField(this.lastNameField, value);
    }

    async fillEmailField(value: string){
        await this.fillField(this.emailField, value)
    }

    async selectRadioButtonGender(){
        await this.checkElement(this.radioGenderField)
    }

    async fillMobileNumberField(value: string){
        await this.fillField(this.mobileNumberField, value)
    }

    async fillDateBithdayField(value: string){
        await this.fillField(this.bithdayDateField, value)
    }

    async fillSubjectField(value: string){
        await this.fillField(this.subjectField, value)
    }

    async selectCheckboxHobbies(){
        await this.checkElement(this.hobbiesCheckField)
    }

    async uploadImageForm(){
        await this.uploadFile(this.uploadImageButton, TEST_IMAGE_PATH);
    }

    async fillCurrentAddressField(value: string){
        await this.fillField(this.addressField, value)
    }

    async clickStateField(){
        await this.clickOn(this.stateDropdownField)
    }

    async clickSelectionStateOption(){
        await this.clickOn(this.stateSelectionOption)
    }

    async clickCityField(){
        await this.clickOn(this.cityDropdownField)
    }

    async clickSelectionCityOption(){
        await this.clickOn(this.citySelectionOption)
    }

    async clickSubmitButton(){
        await this.clickOn(this.submitButton)
    }

    // async verificationTable(): Promise<string[]> {
    //     const values = await this.submitTable.allTextContents();
    //     return values;
    // }

    //Expects

    async expectVisibleSubject(){
        await this.expectVisible(this.socialSelecctionSubject)
    }


    async verificationTable(): Promise<Record<string, string>> {
        const data: Record<string, string> = {};
        const rowsCount = await this.submitTable.count();


        for (let i = 0; i < rowsCount; i++) {
            const row = this.submitTable.nth(i);
            const label = await row.locator('td').nth(0).textContent();
            const value = await row.locator('td').nth(1).textContent();


            if (label && value) {
                data[label.trim()] = value.trim();
            }
        }


        return data;
    }
    


 
    
}




// await page.getByText('Select State').click();
// await page.getByText('Haryana', { exact: true }).click();
// await page.getByText('Select City').click();
// await page.getByText('Panipat', { exact: true }).click();

