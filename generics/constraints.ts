type HasLength = {
    length: number
}

function testingLengthParam<T extends HasLength>(param: T) : void {
    console.log(param.length);
}

const numbersArray: Array<number> = [1, 2, 3];
const stringsArray: Array<string> = ["a", "b", "c"];
const stringValue: string = "Hello, World!";

testingLengthParam(numbersArray);
testingLengthParam(stringsArray);
testingLengthParam(stringValue);

const objWithLength = { value: "Test" };
// Showing error due to no length property in the object
//testingLengthParam(objWithLength);