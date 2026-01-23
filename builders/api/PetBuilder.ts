export class PetBuilder {
    private pet: any = {
        id: Date.now(),
        name: 'Default Pet',
        status: 'available'
    }

    static aPet() {
        return new PetBuilder();
    }

    withName(name: string) {
        this.pet.name = name;
        return this;
    }

    withStatus(status: string) {
        this.pet.status = status;
        return this;
    }

    withId(id: number) {
        this.pet.id = id;
        return this;
    }

    build() {
        return this.pet
    }
}