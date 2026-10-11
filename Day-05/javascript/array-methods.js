
console.log("DAY 5 - ARRAY METHODS");

// Employee data
const employees = [
    { id: 1, name: "Rahul", department: "IT", salary: 30000 },
    { id: 2, name: "Priya", department: "HR", salary: 40000 },
    { id: 3, name: "Amit", department: "IT", salary: 25000 },
    { id: 4, name: "Sneha", department: "Finance", salary: 45000 },
    { id: 5, name: "Neha", department: "HR", salary: 35000 }
];

// 1. map() - Get employee names
const names = employees.map(emp => emp.name);
console.log("Employee Names:", names);

// 2. filter() - Find IT employees
const itEmployees = employees.filter(
    emp => emp.department === "IT"
);
console.log("IT Employees:", itEmployees);

// 3. reduce() - Calculate total salary
const totalSalary = employees.reduce(
    (total, emp) => total + emp.salary,
    0
);
console.log("Total Salary:", totalSalary);

// 4. find() - Find employee with ID 3
const employee = employees.find(emp => emp.id === 3);
console.log("Employee with ID 3:", employee);

// 5. some() - Check whether anyone earns above 40000
const hasHighSalary = employees.some(emp => emp.salary > 40000);
console.log("Anyone earning above 40000:", hasHighSalary);

// 6. every() - Check whether everyone earns at least 25000
const everyoneEarnsEnough = employees.every(
    emp => emp.salary >= 25000
);
console.log("Everyone earns at least 25000:", everyoneEarnsEnough);

// 7. sort() - Sort salary from lowest to highest
const sortedEmployees = [...employees].sort(
    (a, b) => a.salary - b.salary
);
console.log("Employees sorted by salary:", sortedEmployees);

// 8. Bonus - Calculate average salary
const averageSalary = totalSalary / employees.length;
console.log("Average Salary:", averageSalary);
