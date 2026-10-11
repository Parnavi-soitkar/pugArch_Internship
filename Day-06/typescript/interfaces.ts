interface Employee {
    id: number;
    name: string;
    email: string;
    salary: number;
    department: string;
    designation?: string;
}

const employee: Employee = {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@example.com",
    salary: 30000,
    department: "IT"
};

console.log(employee);
export {};