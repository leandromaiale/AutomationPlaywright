import { FormPage } from '../pages/FormPage'
import { FormData } from '../src/models/FormData'
import { TableDataBuilder, TableData } from './TableDataBuilder';


export class FormBuilder {

  private form: FormPage;
  private data?: Partial<FormData>;
  private selectDefaults = false;

  private selections = {
    gender: 'Male',
    picture: '1144476.png',
    stateAndCity: 'Haryana Panipat',
  };

  private constructor(form: FormPage) {
    this.form = form;
  }

  static using(form: FormPage) {
    return new FormBuilder(form);
  }

  withData(data: Partial<FormData>) {
    this.data = data;
    return this;
  }

  withDefaultSelections() {
    this.selectDefaults = true;
    return this;
  }

  async submit(): Promise<{
    actualTable?: TableData;
    expectedTable?: TableData;
  }> {
    if (!this.data) {
      throw new Error('FormBuilder: data is required');
    }

    const d = this.data;

    // Fill form
    if (d.firstName !== undefined)
      await this.form.fillFirstName(d.firstName);

    if (d.lastName !== undefined)
      await this.form.fillLastName(d.lastName);

    if (d.email !== undefined)
      await this.form.fillEmailField(d.email);

    if (d.mobile !== undefined)
      await this.form.fillMobilNumberField(d.mobile);

    if (d.birthday !== undefined)
      await this.form.fillBirthdayField(d.birthday);

    if (d.subjects?.length) {
      await this.form.fillSubjectField(d.subjects);
    }

    if (d.address !== undefined)
      await this.form.fillAdressField(d.address);

    // Selections
    await this.form.checkRadioButtonGender();
    await this.form.checkHobbiesCheckbox();
    await this.form.stateSelectionField();
    await this.form.citySelectionField();
    await this.form.uploadImageField();

    await this.form.clickSubmitButton();

    // 🔹 construir expected dinámico
    const expectedTable = TableDataBuilder.fromFormData(
      d as FormData,
      this.selections
    );

    // 🔹 leer actual
    const actualTable = await this.form.verificationTable();

    return { actualTable, expectedTable };
  }

  async attemptSubmit() {
    if (!this.data) return;

    const d = this.data;

    if (d.firstName !== undefined)
      await this.form.fillFirstName(d.firstName);

    if (d.lastName !== undefined)
      await this.form.fillLastName(d.lastName);

    if (d.email !== undefined)
      await this.form.fillEmailField(d.email);

    if (d.mobile !== undefined)
      await this.form.fillMobilNumberField(d.mobile);

    await this.form.clickSubmitButton();
  }

}





