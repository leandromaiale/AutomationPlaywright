import { FormData } from './FormData'

export interface InvalidCase {
  description: string;
  email?: string;
  mobile?: string;
}

export interface FormTestData {
  validForm: FormData;
  invalidForm: FormData;
  invalidEmails: InvalidCase[];
  mobileBoundaries: InvalidCase[];
}