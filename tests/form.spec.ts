import { test, Page, Browser, expect } from '@playwright/test'
import { BasePage } from '../pages/basePage';
import { ElementsPage } from '../pages/ElementsPage';
import { URLs } from '../urls/demoqa';
import { FormPage } from '../pages/FormPage';
import dataFormDemo from '../data/dataFormDemo.json';

(async () => {

    test.describe('Complete the form', () => {

        test('Valid data', async ({ page }) => {
            const form = new FormPage(page)
            const base = new BasePage(page)

                await test.step('I navigate to the Form element page', async () => {
                    await base.loadUrl(URLs.formAutomation)

                })
            
                await test.step('Complete the form with valid information', async () => {
                    await form.fillFirstNameField(dataFormDemo.validData.firstNameField);
                    await form.fillLastNameField(dataFormDemo.validData.lastNameField);
                    await form.fillEmailField(dataFormDemo.validData.emailField);
                    await form.selectRadioButtonGender();
                    await form.fillMobileNumberField(dataFormDemo.validData.mobileNumberField);
                    await form.fillDateBithdayField(dataFormDemo.validData.bithdayDateField);
                    await form.pressEnter(page)
                    await form.fillSubjectField(dataFormDemo.validData.subjectField);
                    await form.expectVisibleSubject();
                    await form.pressEnter(page)
                    await form.selectCheckboxHobbies();
                    await form.uploadImageForm();
                    await form.fillCurrentAddressField(dataFormDemo.validData.addressField);
                    await form.clickStateField();
                    await form.clickSelectionStateOption();
                    await form.clickCityField();
                    await form.clickSelectionCityOption();
                    await form.clickSubmitButton();
                    //Expects
                    const valoresColumna = await form.verificationTable();
                    expect(valoresColumna).toEqual(dataFormDemo.tableData)
                })
                




    })


    })


})();