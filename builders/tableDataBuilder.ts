import { FormData } from "../src/models/FormData"

export interface TableData {
    [key: string]: string;
}

export interface TableDataOptions {
  gender?: string;
  picture?: string;
  stateAndCity?: string;
}

export class TableDataBuilder {
    static fromFormData(
        data: FormData,
        options?: TableDataOptions

    
    ): TableData {
        
        
        return {
            "Student Name": `${data.firstName} ${data.lastName}`,
            "Student Email": data.email,
            "Gender": options?.gender ?? "Male",
            "Hobbies": data.hobbies?.join(", ") ?? "",
            "Mobile": data.mobile,
            "Date of Birth": data.birthday,
            "Subjects": data.subjects?.join(", ") ?? "",
            "Picture": options?.picture ?? "1144476.png",
            "Address": data.address,
            "State and City": options?.stateAndCity ?? "Haryana Panipat",
        };
    }

    

    
}