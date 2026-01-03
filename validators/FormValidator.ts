import { expect } from "@playwright/test";
import { FormPage, FormField } from "../pages/FormPage";

export class FormValidator {
  constructor(private form: FormPage) {}

  async expectInvalid(fields: FormField[]) {
  for (const field of fields) {
    const locator = this.form.getField(field);

    const isValid = await locator.evaluate(
      (el: HTMLInputElement) => el.checkValidity()
    );

    expect(isValid).toBe(false);
  }
}
}