import { BasePage } from "./basePage";
import { Page, Locator, expect } from "@playwright/test";
import { formLocators } from "./locators/locatorsForm";
import { TEST_IMAGE_PATH } from '../utils/filePaths';
import { FormData } from '../src/models/FormData';

export type FormField =
    | "firstName"
    | "lastName"
    | "email"
    | "mobile";

export class FormPage extends BasePage {
    private readonly firstNameField: Locator;
    private readonly lastNameField: Locator;
    private readonly emailField: Locator;
    private readonly radioGenderField: Locator;
    private readonly mobileNumberField: Locator;
    private readonly bithdayDateField: Locator;
    private readonly subjectField: Locator;
    
    private readonly hobbiesCheckField: Locator;
    private readonly uploadImageButton: Locator;
    private readonly addressField: Locator;
    private readonly stateDropdownField: Locator;
    private readonly stateSelectionOption: Locator;
    private readonly cityDropdownField: Locator;
    private readonly citySelectionOption: Locator;
    private readonly submitButton: Locator;
    private readonly submitTable: Locator;


    constructor(page: Page) {
        super(page)
        this.firstNameField = formLocators.firstNameField(page);
        this.lastNameField = formLocators.lastNameField(page);
        this.emailField = formLocators.emailField(page);
        this.radioGenderField = formLocators.radioGenderField(page);
        this.mobileNumberField = formLocators.mobileNumberField(page);
        this.bithdayDateField = formLocators.bithdayDateField(page);
        this.subjectField = formLocators.subjectField(page);
        
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

    async loadUrlForm(url: string) {
        await this.loadUrl(url)
    }

    //Methods for filling in the form fields

    async fillFirstName(value: string) {
        await this.firstNameField.fill(value)
    }

    async fillLastName(value: string) {
        await this.lastNameField.fill(value)
    }

    async fillEmailField(value: string) {
        await this.emailField.fill(value)
    }

    async fillMobilNumberField(value: string) {
        await this.mobileNumberField.fill(value)
    }

    async fillBirthdayField(value: string) {
        await this.bithdayDateField.fill(value)
        await this.pressEnter()
    }

    private subjectOption(value: string): Locator {
  return formLocators.socialSelecctionSubject(this.page, value);
}

    async fillSubjectField(subjects: string[]) {
        for (const subject of subjects) {
    await this.subjectField.fill(subject);

    const option = this.subjectOption(subject);
    await expect(option).toBeVisible();
    await option.click();
  }
    }

    async fillAdressField(value: string) {
        await this.addressField.fill(value)
    }

    async uploadImageField() {
        await this.uploadFile(this.uploadImageButton, TEST_IMAGE_PATH);
    }

    //Form action methods

    async checkRadioButtonGender() {
        await this.radioGenderField.check()
    }

    async checkHobbiesCheckbox() {
        await this.hobbiesCheckField.check()
    }

    async stateSelectionField() {
        await this.stateDropdownField.click()
        await this.stateSelectionOption.click()
    }

    async citySelectionField() {
        await this.cityDropdownField.click()
        await this.citySelectionOption.click()
    }


    async clickSubmitButton() {
        await this.submitButton.click()
    }

    //Assertions

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


    getField(field: FormField): Locator {
        const fields: Record<FormField, Locator> = {
            firstName: this.firstNameField,
            lastName: this.lastNameField,
            email: this.emailField,
            mobile: this.mobileNumberField,
        };

        return fields[field];
    }








}


