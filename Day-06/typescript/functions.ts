function calculateSalary(salary: number, bonus: number): number {
    return salary + bonus;
}

function displayEmployee(value: string | number): void {
    console.log(value);
}

console.log(calculateSalary(30000, 5000));

displayEmployee("Rahul");
displayEmployee(101);
export {};