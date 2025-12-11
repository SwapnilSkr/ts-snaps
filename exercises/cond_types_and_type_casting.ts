/*
Coding Exercise: Conditional Types and Type Casting
In the index.ts file, complete the following tasks:

Define a conditional type IsStringType that checks if a type is string. If true, it resolves to boolean, otherwise to number.

Using the IsStringType, declare a variable typeCheck and initialize it:

Set typeCheck to true if using the type string.

Otherwise, it should be 0.

Create a variable anyValue of type any and initialize it with the string "example".

Cast anyValue to string using type assertion and store it in a new variable castValue.
  */

const username = <any>"Swapnil"
type CustomStringType = typeof username;

type IsStringType = CustomStringType extends string? boolean : number;

let typeCheck : IsStringType;

typeCheck = typeof username == "string"? true : 0;

let anyValue : any = "example";
const castValue = anyValue as string;

console.log("Type Check:", typeCheck);
console.log("Cast Value:", castValue);