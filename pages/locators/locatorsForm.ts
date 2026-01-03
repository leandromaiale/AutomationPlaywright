import { Page, Locator } from "@playwright/test";

export const formLocators = {
        firstNameField: (page: Page) => page.getByRole('textbox', { name: 'First Name' }),
        lastNameField: (page: Page) => page.getByRole('textbox', { name: 'Last Name' }),
        emailField: (page: Page) => page.getByRole('textbox', { name: 'name@example.com' }),
        radioGenderField: (page: Page) => page.getByText('Male', { exact: true }),
        mobileNumberField: (page: Page) => page.getByRole('textbox', { name: 'Mobile Number' }),
        bithdayDateField: (page: Page) => page.locator('#dateOfBirthInput'),
        subjectField: (page: Page) => page.locator('#subjectsInput'),
        subjectSelecctionField: (page: Page) => page.getByText('Social Studies', { exact: true }),
        socialSelecctionSubject: (page: Page, value: string): Locator =>  page.locator('[id^="react-select"][id$="-option-0"]',{ hasText: value }),
        hobbiesCheckField: (page: Page) => page.getByText('Music'),
        uploadImageButton: (page: Page) => page.getByRole('button', { name: 'Select picture' }),
        addressField: (page: Page) => page.getByRole('textbox', { name: 'Current Address' }),
        stateDropdownField: (page: Page) => page.getByText('Select State'),
        stateSelectionOption: (page: Page) => page.getByText('Haryana', { exact: true }),
        cityDropdownField: (page: Page) => page.getByText('Select City'),
        citySelectionOption: (page: Page) => page.getByText('Panipat', { exact: true }),
        submitButton: (page: Page) => page.getByRole('button', { name: 'Submit' }),
        submitTable: (page: Page) => page.locator('.table-responsive tbody tr')

}


