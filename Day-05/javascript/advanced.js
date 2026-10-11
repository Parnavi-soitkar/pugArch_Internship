
console.log("ADVANCED JAVASCRIPT");

// 1. Scope
const department = "IT";

function showDepartment() {
    const employeeName = "Rahul";
    console.log(employeeName, department);
}

showDepartment();

// 2. Hoisting
console.log(greeting());

function greeting() {
    return "Hello from a hoisted function!";
}

// 3. Closure
function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();

console.log("Counter:", counter());
console.log("Counter:", counter());
console.log("Counter:", counter());

// 4. Callback
function processEmployee(name, callback) {
    console.log("Processing employee:", name);
    callback();
}

processEmployee("Priya", () => {
    console.log("Employee processed successfully.");
});

// 5. Promise
const employeePromise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("Employee data loaded successfully.");
    } else {
        reject(new Error("Unable to load employee data."));
    }
});

employeePromise
    .then(message => console.log(message))
    .catch(error => console.error(error.message));

// 6. Event loop
console.log("First");

setTimeout(() => {
    console.log("Third - Timer callback");
}, 0);

Promise.resolve().then(() => {
    console.log("Second - Promise callback");
});

console.log("Fourth");

