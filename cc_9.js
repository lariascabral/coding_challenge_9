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
    } ; // Function to showcase the profile details of employees

    calculateAnnualSalary() {
        return this.salary * 12 ;
    } ; // Function to calculate annual salary
} ;

//Test Data
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
    } ; // Creating a class extention for managers

    getDetails() {
    return  `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary $${this.salary}, Team Size: ${this.teamSize}`
    } ;

    calculateBonus() {
        return super.calculateAnnualSalary() * 0.10
    } ;

    calculateAnnualSalary() {
        return super.calculateAnnualSalary() + this.calculateBonus()
    } ;
} ;

//Test Data
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5) ;
console.log(mgr1.getDetails()) ;
// Expected output: "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"

console.log(mgr1.calculateBonus()) ; 
// Expected output: 9600