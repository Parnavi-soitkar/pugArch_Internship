class Employee {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    displayDetails() {
        console.log(this.id, this.name, this.salary);
    }
}
const employee = new Employee(1, "Rahul", 30000);
employee.displayDetails();
export {};
