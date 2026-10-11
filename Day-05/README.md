# Day 5 — JavaScript Employee Dashboard

## Objective
Learn modern JavaScript, asynchronous programming, JSON, Fetch API, REST APIs, and CRUD operations by building an Employee Dashboard.

## Technologies Used
- HTML5
- CSS3
- JavaScript ES6+
- Node.js
- Fetch API
- JSON
- REST APIs
- Browser Local Storage

## Project Structure
- `javascript/fundamentals.js` — variables, functions, arrays, objects and modern JavaScript.
- `javascript/array-methods.js` — map, filter, reduce, find, some, every and sort.
- `javascript/advanced.js` — scope, hoisting, closures, callbacks, Promises and event loop.
- `javascript/async-api.js` — HTTP GET, POST, PUT and DELETE, JSON and error handling.
- `javascript/math.js` — reusable functions exported as a module.
- `javascript/modules-demo.js` — imports and uses reusable functions.
- `javascript/package.json` — configures JavaScript ES modules for Node.js.
- `employee-dashboard/index.html` — dashboard structure.
- `employee-dashboard/style.css` — dashboard styling.
- `employee-dashboard/script.js` — employee listing, search, filtering, sorting and CRUD operations.

## Features
- Display employee records.
- Search employees by name or email.
- Filter by department.
- Sort by name or salary.
- View employee details.
- Add, edit and delete employees.
- Retrieve sample data from an API.
- Store dashboard changes in browser Local Storage.
- Handle asynchronous requests and errors.

## Setup and Execution

### JavaScript Practice
Install Node.js and run the following commands from the repository root:

`node "Day-05/javascript/fundamentals.js"`

`node "Day-05/javascript/array-methods.js"`

`node "Day-05/javascript/advanced.js"`

`node "Day-05/javascript/async-api.js"`

`node "Day-05/javascript/modules-demo.js"`

An internet connection is required for API examples.

### Employee Dashboard
1. Open `Day-05/employee-dashboard/index.html` using VS Code Live Server.
2. Ensure you have an internet connection for the initial API request.
3. Test search, filtering, sorting and employee CRUD operations.

## API and Data Storage
The dashboard retrieves sample users from DummyJSON. Dashboard changes are saved locally in browser Local Storage. The separate API practice file demonstrates GET, POST, PUT and DELETE using JSONPlaceholder. These sample services do not provide permanent server-side changes for this project.

## Learning Outcomes
Practised modern JavaScript syntax, reusable functions, array methods, asynchronous programming, Promises, async/await, event-loop behaviour, modules, JSON, Fetch API, HTTP methods, error handling and CRUD operations.