interface Dog {
    id?: number;
    name: string;
    age: number;
    description: string;
}

class DogRecord implements Dog {
    id: number;
    name: string;
    age: number;
    description: string;

    constructor({name, age, description, id = 0}: Dog) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.description = description;
    }

    static load(id: number): DogRecord {
        // code to load dog from databaseç
        const dog: DogRecord = {} as DogRecord;
        return dog;
    }

    save() {
        // code to save dog to database
    }
}