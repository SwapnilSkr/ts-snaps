type Reservation = {
  departureDate: Date;
  returnDate?: Date;
  departureFrom: string;
  destination: string;
};

type Reserve = {
  (
    departureDate: Date,
    returnDate: Date,
    departureFrom: string,
    destination: string
  ): Reservation | never;
  (departureDate: Date, departureFrom: string, destination: string):
    | Reservation
    | never;
};

const reserve: Reserve = (
  departureDate,
  returnDateOrDepartureFrom,
  departureFromOrDestination,
  //need to type it otherwise TS will complain that destination is unknown
  destination?: string
) => {
  if (returnDateOrDepartureFrom instanceof Date && destination) {
    // return a reservation with return date
    return {
      departureDate,
      returnDate: returnDateOrDepartureFrom,
      departureFrom: departureFromOrDestination,
      destination,
    };
  } else if (typeof returnDateOrDepartureFrom == "string" && !destination) {
    // return a reservation without return date
    return {
      departureDate,
      departureFrom: returnDateOrDepartureFrom,
      destination: departureFromOrDestination,
    };
  }
  throw new Error("Invalid arguments");
};

console.log(reserve(new Date(), new Date(), "New York", "Washington"));
console.log(reserve(new Date(), "New York", "Washington"));

const namedReserve: Reserve = function namedReserve(
  departureDate,
  returnDateOrDepartureFrom,
  departureFromOrDestination,
  // need to type it otherwise TS will complain that destination is unknown
  destination?: string
) {
  if (returnDateOrDepartureFrom instanceof Date && destination) {
    return {
      departureDate,
      returnDate: returnDateOrDepartureFrom,
      departureFrom: departureFromOrDestination,
      destination,
    };
  } else if (typeof returnDateOrDepartureFrom === "string" && !destination) {
    return {
      departureDate,
      departureFrom: returnDateOrDepartureFrom,
      destination: departureFromOrDestination,
    };
  }
  throw new Error("Invalid arguments");
};

console.log(namedReserve(new Date(), new Date(), "New York", "Washington"));
console.log(namedReserve(new Date(), "New York", "Washington"));
