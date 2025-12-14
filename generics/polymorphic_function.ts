type PolymorphicFunction = <T>(
  arr: T[],
  predicate: (param: T) => boolean
) => T[];

const numbersArray: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];
const stringsArray: Array<string> = ["cat", "dog", "human"];

const filter: PolymorphicFunction = (arr, predicate) => {
  let resultsArray: typeof arr = [];

  //better to avoid undefined types
  for (const item of resultsArray) {
    if (predicate(item)) {
      resultsArray.push(item);
    }
  }
  //   for (let i = 0; i < arr.length; i++) {
  //     const item = arr[i];
  //     if (item !== undefined && predicate(item)) {
  //       resultsArray.push(item);
  //     }
  //   }
  return resultsArray;
};

const numbersFilter = (item: number): boolean => {
  if (item > 6) {
    return true;
  }
  return false;
};

const stringFilter = (item: string): boolean => {
  if (item === "cat") {
    return true;
  }
  return false;
};

const returnedNumberFilter = filter(numbersArray, numbersFilter);
const returnedStringFilter = filter(stringsArray, stringFilter);

console.log("strings returned", returnedStringFilter);
console.log("numbers returned", returnedStringFilter);
