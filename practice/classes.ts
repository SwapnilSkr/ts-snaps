/**
 * ! You are developing a simple employee management system for a company. Implement the following requirements using TypeScript:
 *
 * TODO: 1. Class Definition: Create a class Employee with the following properties:
 ** -  name (string, public)
 ** -  age (number, public)
 ** -  salary (number, private)
 ** -  id (number, protected)
 *
 * TODO: 2. Use shorthand syntax in the constructor to initialize the properties name and age.
 *
 * TODO: 3. Implement getter and setter methods for the salary property. The setter should ensure the salary is a positive number.
 *
 * TODO: 4. Add a static property companyName (string, public) and a static method getCompanyName that returns the company name.
 *
 * TODO: 5. Create a subclass Manager that extends the Employee class. Add an additional property department (string, public).
 *
 * TODO: 6. Override a method getDetails in the Manager class to include the department information along with the employee details.
 */

//implementation

class Employee {
  static companyName: string = "Tech Solutions Inc."; // Static member

  constructor(
    public name: string, // Public member using shorthand for constructor
    public age: number, // Public member using shorthand for constructor
    private _salary: number, // Private member
    protected id: number // Protected member
  ) {}

  // Getter for salary
  get salary(): number {
    return this._salary;
  }

  // Setter for salary
  set salary(newSalary: number) {
    if (newSalary > 0) {
      this._salary = newSalary;
    } else {
      throw new Error("Salary must be a positive number");
    }
  }

  // Static method to get company name
  static getCompanyName(): string {
    return Employee.companyName;
  }

  // Method to get employee details
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    age: number,
    salary: number,
    id: number,
    public department: string // Public member using shorthand for constructor
  ) {
    super(name, age, salary, id);
  }

  // Overriding getDetails method to include department information
  getDetails(): string {
    return `${super.getDetails()}, Department: ${this.department}`;
  }
}

// Example usage
const emp1 = new Employee("Alice", 30, 50000, 1);
const manager1 = new Manager("Bob", 40, 70000, 2, "Engineering");

export function employeeLogger(): void {
  console.log(emp1.getDetails()); // Output: Name: Alice, Age: 30, Salary: 50000
  console.log(manager1.getDetails()); // Output: Name: Bob, Age: 40, Salary: 70000, Department: Engineering
  console.log(Employee.getCompanyName()); // Output: Tech Solutions Inc.
}
