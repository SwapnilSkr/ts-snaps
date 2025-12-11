let id: symbol = Symbol(1234);
let alphabeticId: symbol = Symbol("id");

interface User {
  [id]: string;
  [alphabeticId]: string;
  name: string;
  getId(): string | undefined;
} 

let user: User = {
  [id]: "12344",
  [alphabeticId]: "uniqueId",
  name: "Mark Hamill",
  getId() {
    return this[id];
  },
};

export function userObjectLogs() {
  // Symbols are  private
  console.log(user.name);
  // will throw a typescript error with id not accessible
  // Throws error because the key here is not 'id' but a symbol generated with 1234 who's value is unknown but guaranteed to be unique
  //! console.log(user.id);

  // The id property does exist add the getId method to the object
  console.log(user.getId());
}
