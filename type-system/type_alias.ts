type CustomString  = string;
type CustomNumber = number;
type CustomBoolean = boolean;

type ID = CustomString | CustomNumber;

interface Person {
  id: ID;
  name: CustomString;
  isActive: CustomBoolean;
}

let person1: Person = {
  id: "abc123",
  name: "John Doe",
  isActive: true,
};

let person2: Person = {
  id: 456789,
  name: "Jane Smith",
  isActive: false,
};

export function logPersons() {
  console.log(person1);
  console.log(person2);
}