type StringOrNumber = string | number;

interface Data {
  id: StringOrNumber;
  value: string;
}

let data1: Data = {
  id: "data123",
  value: "This is a string ID",
};

let data2: Data = {
  id: 456,
  value: "This is a numeric ID",
};

export function logData() {
  console.log(data1);
  console.log(data2);
}