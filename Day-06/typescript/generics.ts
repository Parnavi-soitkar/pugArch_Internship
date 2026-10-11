class Employee {
    id: number;
    name: string;
    salary: number;

    constructor(id: number, name: string, salary: number) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    displayDetails(): void {
        console.log(this.id, this.name, this.salary);
    }
}

const employee = new Employee(1, "Rahul", 30000);

employee.displayDetails();
export {};