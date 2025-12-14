type MapFunction = <T>(arr: T[], predicate: (param: T) => T) => T[];

const mapFunction: MapFunction = (arr, predicate) => {
  let resultsArray: typeof arr = [];
  for (const item of resultsArray) {
    resultsArray.push(predicate(item));
  }
  return resultsArray;
};

const numbersArray: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];
const stringsArray: Array<string> = ["cat", "dog", "human"];

const multiplyNumbersByTen = (item: number): number => {
  return item * 10;
};

const capitalizeString = (item: string): string => {
  return item.toLocaleUpperCase();
};

const multipliedNumbers = mapFunction(numbersArray, multiplyNumbersByTen);
const capitalizedStrings = mapFunction(stringsArray, capitalizeString);

console.log("multiplied numbers", multipliedNumbers);
console.log("capitalized strings", capitalizedStrings);

const map = <T, U>(array: T[], func: (item: T) => U): (U | T)[] => {
  if (array.length === 0) {
    return array;
  }

  let result: U[] = [];

  for (const item of array) {
    result.push(func(item));
  }
  return result;
};

let numbers = [4, 5, 6, 7, 8, 9];
const converted = map(numbers, (num) => num.toString());
console.log(converted);
