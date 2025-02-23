// Task 1 - Created Employee Class 

class Employee {
    constructor(name, id, department, salary) {
        this.name = name; 
        this.id = id ;
        this.department = department ;
        this.salary = salary ;
    } ; // Creation of class for employees

    getDetails() {
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary $${this.salary}`
    } ; // Method to showcase the profile details of employees as listed

    calculateAnnualSalary() {
        return this.salary * 12 ;
    } ; // Method to calculate annual salary by multiplying by 12 months
} ;

// Test Data
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000) ;
console.log(emp1.getDetails()); 
// Expected output: "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"

console.log(emp1.calculateAnnualSalary()); 
// Expected output: 60000


// Task 2 - Created Manager Class with Inheritance

class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary)
        this.teamSize = teamSize ;
    } ; // Creating a class extention for managers adding teamSize attribute

    getDetails() {
    return  `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary $${this.salary}, Team Size: ${this.teamSize}`
    } ;

    calculateBonus() {
        return super.calculateAnnualSalary() * 0.10
    } ;

    calculateAnnualSalary() {
        return super.calculateAnnualSalary() + this.calculateBonus()   // Task 4 requirement: Updating salary calculation with a method specifically for managers
    } ;
} ;

// Test Data
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5) ;
console.log(mgr1.getDetails()) ;
// Expected output: "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"

console.log(mgr1.calculateBonus()) ; 
// Expected output: 9600


// Task 3 - Created Company Class

class Company {
    constructor(name) {
        this.name = name ;
        this.employees = [] ;                                           // Initiating the employees' array
    } ;

    addEmployee(employee) {
        this.employees.push(employee) ;                                 // Method that adds each neew employee to the array
    } ;

    listEmployees() {
        this.employees.forEach(emp => console.log(emp.getDetails()))    // Listing method of  all employees in the console separately
    } ;


// Task 4 - Implemented Payroll System

    calculateTotalPayroll() {
        return this.employees.reduce((total, emp) => total + emp.calculateAnnualSalary(), 0)
} ;


// Task 5 - Implemented Promotion System

    promoteToManager(employee, teamSize) {
        const index = this.employees.indexOf(employee) ;                // Checking the existence of the employee in the company by its index
        if (index !== -1) {                                             // If existing (index not equal to -1), then can replace position for manager
            this.employees[index] = new Manager (
                employee.name,
                employee.id,
                employee.department, 
                employee.salary,
                teamSize)                                               // Creating the new manager using existing details + adding teamSize as attribute
        } ;
    } ;

} ;

// Test Data --- Task 3
const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();
// Expected output:
// "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
// "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"

// Test Data --- Task 4
console.log(company.calculateTotalPayroll()); 
// Expected output: 165600 (assuming emp1 and mgr1 salaries)

// Test Data --- Task 5
company.promoteToManager(emp1, 3);
company.listEmployees();
// Expected output: "Manager: Alice Johnson, ID: 101, Department: Sales, Salary: $5000, Team Size: 3"
// It will also output John Smith's profile, since we are listing the employees of the company with the other method