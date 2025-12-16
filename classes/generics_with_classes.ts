class Box<T> {
  private _value: T;

  constructor(value: T) {
    this._value = value;
  }

  get value(): T {
    return this._value;
  }

  set value(newValue: T) {
    this._value = newValue;
  }
}

const numberBox = new Box<number>(123);
console.log(numberBox.value); // Output: 123

const stringBox = new Box<string>("Hello");
console.log(stringBox.value); // Output: Hello

type Identifiable = {
  id: number;
};

// We need to declare a generic class that can hold items which have id's
// It can be a repository of any entity that has an id property associated with it
// The  repository needs to have methods for adding, removing and getting entities
class Repository<T extends Identifiable> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getById(id: number): T | undefined {
    return this.items.find((item) => item.id === id);
  }

  getAll(): T[] {
    return this.items;
  }

  removeById(id: number): void {
    this.items = this.items.filter((item) => item.id !== id);
  }
}

type IdentifiableGen = {
  id: number;
};

// We need to declare a generic class that can hold items which have id's
// It can be a repository of any entity that has an id property associated with it
class RepositoryGen<T extends IdentifiableGen> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getById(id: number): T | undefined {
    return this.items.find((item) => item.id === id);
  }

  getAll(): T[] {
    return this.items;
  }

  removeById(id: number): void {
    this.items = this.items.filter((item) => item.id !== id);
  }
}

// Example usage with a User type
interface User extends IdentifiableGen {
  name: string;
  email: string;
}

const userRepository = new RepositoryGen<User>();

userRepository.add({ id: 1, name: "Alice", email: "alice@example.com" });
userRepository.add({ id: 2, name: "Bob", email: "bob@example.com" });

console.log(userRepository.getById(1));
// Output: { id: 1, name: 'Alice', email: 'alice@example.com' }

console.log(userRepository.getAll());
// Output: [ { id: 1, name: 'Alice', email: 'alice@example.com' }, { id: 2, name: 'Bob', email: 'bob@example.com' } ]

userRepository.removeById(1);
console.log(userRepository.getAll());
// Output: [ { id: 2, name: 'Bob', email: 'bob@example.com' } ]
