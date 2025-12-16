//using boilerplate code for normal class definition and initialization
class User {
  //Not needed, use the shorthand instead
  //   protected id: number;
  //   public firstName: string;
  //   public lastName?: string;
  //   public readonly email: string;
  //   protected salary: number;

  //   constructor(
  //     id: number,
  //     firstName: string,
  //     email: string,
  //     salary: number,
  //     lastName: string
  //   ) {
  //     this.id = id;
  //     this.firstName = firstName;
  //     this.lastName = lastName;
  //     this.email = email;
  //     this.salary = salary;
  //   }

  constructor(
    protected id: number,
    public firstName: string,
    public readonly email: string,
    protected salary: number,
    public lastName: string
  ) {}

  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  //getters
  public get getSalaryDetails(): number {
    return this.salary;
  }

  //setters
  public set setSalary(salary: number) {
    if (salary > 0) this.salary = salary;
    else throw new Error("This is not a valid salary you fucking doughnut");
  }
}

class Admin extends User {
  constructor(
    id: number,
    firstName: string,
    email: string,
    salary: number,
    lastName: string,
    public isActive: boolean
  ) {
    super(id, firstName, email, salary, lastName);
  }
}

const user1 = new User(1, "Swapnil", "swapnilmkab@gmail.com", 70000, "Sarkar");
user1.setSalary = 120000;

const admin1 = new Admin(2, "Aadil", "aadil@hamza.com", 400000, "Rashid", true);

//Not possible
//user1.email = "some value"

const fullName = user1.getFullName();
const salaryOfUser = user1.getSalaryDetails;

export function logUserDetails() {
  console.log("user 1: ", user1);
  console.log("Full Name: ", fullName);
  console.log("Salary Details: ", salaryOfUser);
  console.log("*********************************");
  console.log("admin 1: ", admin1);
  //Property 'id' is protected and only accessible within class 'User' and its subclasses.
  //console.log(user1.id)
  //console.log(admin1.id)
}
