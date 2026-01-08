import { test, Page, Browser, expect } from '@playwright/test'
import { URLs } from '../urls/demoqa';
import { FormPage } from '../pages/FormPage';
import dataFormDemo from '../data/dataFormDemo.json';
import { FormTestData } from '../src/models/TestData';
import { FormBuilder } from '../builders/FormBuilder';
import { FormValidator } from "../validators/FormValidator";


test.describe('Complete the form', () => {

    test.beforeEach(async ({ page }) => {
        const form = new FormPage(page);

        await form.loadUrl(URLs.formAutomation);
    });



    test('TC-001 - Should submit form successfully with valid data', async ({ page }) => {
        const form = new FormPage(page)

        await test.step('I navigate to the Form element page', async () => {
            await form.loadUrl(URLs.formAutomation)

        })

        await test.step('Complete the form with valid information', async () => {

            const result = await FormBuilder
                .using(form)
                .withData(dataFormDemo.validData)
                .withDefaultSelections()
                .submit();

            expect(result.actualTable).toEqual(result.expectedTable)
        })


    })

    test('TC-002 - Validate warnings for fields with invalid data', async ({ page }) => {
        const form = new FormPage(page)
        const validator = new FormValidator(form);
        await test.step('I navigate to the Form element page', async () => {
            await form.loadUrl(URLs.formAutomation)

        })

        await test.step('Complete the form with invalid information', async () => {
            await FormBuilder
                .using(form)
                .withData(dataFormDemo.invalidData)
                .submit();

        })

        await test.step('I validate that the fields display the expected errors', async () => {


            await validator.expectInvalid([
                "firstName",
                "lastName",
                "email",
                "mobile",
            ]);
        })
    })    

    test('TC-003 - Complete the Email field with incorrect values', async ({ page }) => {
        for (const { description, email } of dataFormDemo.invalidEmails) {
            const form = new FormPage(page)
            const validator = new FormValidator(form);
            await test.step(`Should reject invalid email: ${description}`, async () => {
                await FormBuilder
                        .using(form)
                        .withData({
                                ...dataFormDemo.invalidEmails,
                                email
                        })
                        .attemptSubmit();

                await validator.expectInvalid(['email'])        
            })
            
        }
        
    })
    


    
})


