import { test, expect } from '@playwright/test'
import { PetService } from '../../api/PetService'
import { PetBuilder } from '../../builders/api/PetBuilder'
import petsData from '../../data/pets.json'

test.describe('Pet API - CRUD', () => {
    
    for (const petData of petsData.validPets) {

        test(`TC-001 - Create Pet: ${petData.name}`, async ({ request }) => {
            
            const petService = new PetService(request)

            const pet = PetBuilder
                .aPet()
                .withName(petData.name)
                .withStatus(petData.status)
                .build();

            const response = await petService.createPet(pet);
            const body = await response.json();
            
            expect(body.name).toBe(pet.name);
            expect(body.status).toBe(pet.status)

            //Cleanup

            await petService.deletePetById(body.id)
        })        
    }

        test('TC-002 - Get Pet by ID', async ({ request }) => {
            const petService = new PetService(request)

            const pet = PetBuilder
                .aPet()
                .withName('DogById')
                .withStatus('sold')
                .build();

            const response = await petService.createPet(pet);
            const body = await response.json();

            const getResponse = await petService.getPetById(body.id);
            const retrievedPet = await getResponse.json();

            expect(retrievedPet.id).toBe(body.id);
            expect(retrievedPet.name).toBe(body.name);
            expect(retrievedPet.status).toBe(body.status);

            await petService.deletePetById(body.id);

        })
    


})
