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