import { APIRequestContext, expect } from '@playwright/test'


export class PetService {
    private request: APIRequestContext;
    private baseUrl =  'https://petstore.swagger.io/v2';   

    constructor(request: APIRequestContext) {
        this.request = request;
    }


    async createPet(pet: any){
        const response = await this.request.post(`${this.baseUrl}/pet`, {
        data: pet,
    });

    expect(response.status()).toBe(200);
    return response;

    }

    async getPetById(id: number){
        return this.request.get(`${this.baseUrl}/pet/${id}`)
    }

    async deletePetById(id: number){
        return this.request.delete(`${this.baseUrl}/pet/${id}`)
    }



}