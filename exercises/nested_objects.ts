/**
 * Coding Exercise: Nested Objects
In the index.ts file, you are tasked with defining and initializing a strictly typed nested object using a type alias in TypeScript:

Define a type alias User for a user object with the following detailed specifications:

id: a read-only number that uniquely identifies a user. Initialize this with 1.

name: a string representing the user's name. Initialize this with "John Doe".

age: an optional number representing the user's age. Do not initialize this in the user object to demonstrate the optional nature.

contact: an object containing:

email: a required string for the user's email. Initialize this with "john@example.com".

phone: an optional string for the user's phone number. Do not initialize this to demonstrate the optional nature.

preferences: an object with properties:

theme: a union type property which can be either 'light' or 'dark'. Initialize this with 'dark'.

language: a union type property which can be either 'English' or 'Spanish'. Initialize this with 'English'.

Include an index signature [key: string]: any to allow for any additional properties not explicitly defined. Demonstrate this by adding a property additionalInfo initialized with "This is an example of an index signature property".

Create a user object of type User with appropriate initializations as specified above.

Ensure your object adheres strictly to the type definitions provided, making use of optional properties, read-only properties, union types, and index signatures effectively. This setup will help you understand the versatility and control TypeScript provides over object structures.
 */

type Contact = {
    email: string,
    phone?:string
}

type Preferences = {
    theme: "light" | "dark",
    language: "English" | "Spanish" 
}

type User = {
    readonly id : number,
    name: string,
    age?: number,
    contact: Contact,
    preferences: Preferences,
    [key:string] : any
}

const user : User = {
    id: 1,
    name: "John Doe",
    contact: {
        email: "john@example.com"
    },
    preferences: {
        theme: "dark",
        language: "English"
    },
    additionalInfo : "This is an example of an index signature property"
}

console.log(user);