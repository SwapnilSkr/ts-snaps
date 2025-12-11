// Type Casting using the <> syntax
const name = <string>"Mark Hamill";
const email = <string>"markhamill@example.com";

type User = {
    name: typeof name;
    email: typeof email;
}

const user = {
    name: "Swapnil Sarkar",
    email: "swapnil@example.com"
}

export const fetchUser = () => {
    console.log("User fetched: ", user);
    // Type casting using the 'as' syntax
    return user as User;
}