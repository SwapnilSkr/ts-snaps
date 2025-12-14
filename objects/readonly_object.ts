type Person = {
    readonly id:  number;
    name: string;
    age: number;
}

const person1: Person = { id: 1, name: "John", age: 30 };

// Error: Cannot assign to 'id' because it is a read-only property.
//person1.id = 2; 