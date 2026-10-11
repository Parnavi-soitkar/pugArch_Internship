
console.log("Welcome to Day 5 - JavaScript!");

// 1. Variables
const employeeName = "Rahul";
let salary = 30000;

// 2. Data types
const age = 25;                 // Number
const isActive = true;          // Boolean
const department = "IT";        // String

console.log("Employee Name:", employeeName);
console.log("Salary:", salary);
console.log("Age:", age);
console.log("Active:", isActive);
console.log("Department:", department);

// 3. Normal function
function greet(name) {
    return "Hello, " + name;
}

console.log(greet(employeeName));

// 4. Arrow function
const calculateBonus = (salary) => salary * 0.10;

console.log("Bonus:", calculateBonus(salary));

// 5. Array
const skills = ["HTML", "CSS", "JavaScript"];

console.log("Skills:", skills);

// 6. Object
const employee = {
    id: 1,
    name: "Rahul",
    salary: 30000,
    department: "IT"
};

console.log("Employee:", employee);

// 7. Destructuring
const { name, id } = employee;

console.log("Name:", name);
console.log("ID:", id);

// 8. Spread operator
const updatedEmployee = {
    ...employee,
    salary: 35000
};

console.log("Updated Employee:", updatedEmployee);

// 9. Rest parameter
function totalSalary(...salaries) {
    return salaries.reduce((total, value) => total + value, 0);
}

console.log("Total Salary:", totalSalary(20000, 30000, 40000));
