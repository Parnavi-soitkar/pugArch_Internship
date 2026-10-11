
"use strict";

// ========================================
// 1. API URL AND HTML ELEMENTS
// ========================================

const API_URL = "https://dummyjson.com/users?limit=10";

const employeeList = document.getElementById("employeeList");
const searchInput = document.getElementById("search");
const departmentSelect = document.getElementById("department");
const sortSelect = document.getElementById("sort");

const statusMessage = document.getElementById("status");
const countMessage = document.getElementById("count");
const emptyMessage = document.getElementById("emptyMessage");

const totalEmployeesElement = document.getElementById("totalEmployees");
const totalDepartmentsElement = document.getElementById("totalDepartments");
const averageSalaryElement = document.getElementById("averageSalary");

const addButton = document.getElementById("addButton");
const resetButton = document.getElementById("resetButton");

const employeeDialog = document.getElementById("employeeDialog");
const employeeForm = document.getElementById("employeeForm");
const formTitle = document.getElementById("formTitle");
const employeeIdInput = document.getElementById("employeeId");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const employeeDepartmentInput =
    document.getElementById("employeeDepartment");
const salaryInput = document.getElementById("salary");
const formError = document.getElementById("formError");

const detailsDialog = document.getElementById("detailsDialog");
const employeeDetails = document.getElementById("employeeDetails");

// ========================================
// 2. APPLICATION DATA
// ========================================

let employees = [];
let nextId = 1;
let selectedEmployeeId = null;

const STORAGE_KEY = "day05_employees";

const departments = ["IT", "HR", "Finance", "Marketing"];

// Fallback records if the API is unavailable
const sampleEmployees = [
    {
        id: 1,
        name: "Rahul Sharma",
        email: "rahul@example.com",
        department: "IT",
        salary: 30000
    },
    {
        id: 2,
        name: "Priya Patil",
        email: "priya@example.com",
        department: "HR",
        salary: 40000
    },
    {
        id: 3,
        name: "Amit Verma",
        email: "amit@example.com",
        department: "IT",
        salary: 25000
    },
    {
        id: 4,
        name: "Sneha Deshmukh",
        email: "sneha@example.com",
        department: "Finance",
        salary: 45000
    },
    {
        id: 5,
        name: "Neha Joshi",
        email: "neha@example.com",
        department: "Marketing",
        salary: 35000
    }
];

// ========================================
// 3. FETCH API DATA
// ========================================

async function loadEmployees() {
    statusMessage.textContent = "Loading employees...";

    try {
        // Use previously saved records when available
        const savedData = localStorage.getItem(STORAGE_KEY);

        if (savedData !== null) {
            employees = JSON.parse(savedData);

            if (!Array.isArray(employees)) {
                throw new Error("Saved employee data is invalid.");
            }

            statusMessage.textContent =
                "Loaded employees from browser storage.";
        } else {
            // GET request to the API
            const response = await fetch(API_URL);

            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }

            const data = await response.json();

            // Convert API users into employee records
            employees = data.users.map(user => ({
                id: user.id,
                name: `${user.firstName} ${user.lastName}`,
                email: user.email,
                department: departments[(user.id - 1) % departments.length],
                salary: 20000 + user.id * 5000
            }));

            saveEmployees();

            statusMessage.textContent =
                "Employees loaded successfully from the API.";
        }
    } catch (error) {
        console.error("Loading error:", error);

        // Use local sample records if loading fails
        try {
            const savedData = localStorage.getItem(STORAGE_KEY);
            employees = savedData ? JSON.parse(savedData) : [...sampleEmployees];

            if (!Array.isArray(employees)) {
                throw new Error("Invalid saved employee data.");
            }

            statusMessage.textContent =
                "Using local sample data because the API could not be loaded.";
        } catch (storageError) {
            employees = [...sampleEmployees];

            statusMessage.textContent =
                "Using sample data. Browser storage could not be read.";
        }

        saveEmployees();
    }

    nextId = Math.max(0, ...employees.map(emp => emp.id)) + 1;

    renderEmployees();
}

// ========================================
// 4. SAVE EMPLOYEES TO LOCAL STORAGE
// ========================================

function saveEmployees() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
    } catch (error) {
        console.error("Could not save employees:", error);
        statusMessage.textContent =
            "Warning: Changes could not be saved in browser storage.";
    }
}

// ========================================
// 5. FORMAT SALARY
// ========================================

function formatSalary(salary) {
    return "₹" + Number(salary).toLocaleString("en-IN", {
        maximumFractionDigits: 2
    });
}

// ========================================
// 6. CREATE TABLE CELL SAFELY
// ========================================

function createCell(value) {
    const cell = document.createElement("td");
    cell.textContent = String(value);
    return cell;
}

// ========================================
// 7. CREATE ACTION BUTTONS
// ========================================

function createActionButton(label, className, callback) {
    const button = document.createElement("button");

    button.type = "button";
    button.textContent = label;
    button.className = className;
    button.addEventListener("click", callback);

    return button;
}

// ========================================
// 8. SEARCH, FILTER, SORT AND DISPLAY
// ========================================

function renderEmployees() {
    const searchText = searchInput.value.trim().toLowerCase();
    const selectedDepartment = departmentSelect.value;
    const sortOption = sortSelect.value;

    // Search and filter
    let filteredEmployees = employees.filter(employee => {
        const matchesSearch =
            employee.name.toLowerCase().includes(searchText) ||
            employee.email.toLowerCase().includes(searchText);

        const matchesDepartment =
            selectedDepartment === "All" ||
            employee.department === selectedDepartment;

        return matchesSearch && matchesDepartment;
    });

    // Sort employees
    filteredEmployees.sort((a, b) => {
        switch (sortOption) {
            case "name-desc":
                return b.name.localeCompare(a.name);

            case "salary-asc":
                return a.salary - b.salary;

            case "salary-desc":
                return b.salary - a.salary;

            default:
                return a.name.localeCompare(b.name);
        }
    });

    // Clear the previous table
    employeeList.replaceChildren();

    // Display filtered employees
    filteredEmployees.forEach(employee => {
        const row = document.createElement("tr");

        row.appendChild(createCell(employee.id));
        row.appendChild(createCell(employee.name));
        row.appendChild(createCell(employee.email));
        row.appendChild(createCell(employee.department));
        row.appendChild(createCell(formatSalary(employee.salary)));

        const actionsCell = document.createElement("td");
        actionsCell.className = "actions";

        const viewButton = createActionButton(
            "View",
            "view-button",
            () => viewEmployee(employee.id)
        );

        const editButton = createActionButton(
            "Edit",
            "edit-button",
            () => editEmployee(employee.id)
        );

        const deleteButton = createActionButton(
            "Delete",
            "delete-button",
            () => deleteEmployee(employee.id)
        );

        actionsCell.append(viewButton, editButton, deleteButton);
        row.appendChild(actionsCell);

        employeeList.appendChild(row);
    });

    // Update table messages
    countMessage.textContent =
        `${filteredEmployees.length} of ${employees.length} employees`;

    emptyMessage.hidden = filteredEmployees.length !== 0;

    updateStatistics();
}

// ========================================
// 9. UPDATE DASHBOARD STATISTICS
// ========================================

function updateStatistics() {
    totalEmployeesElement.textContent = employees.length;

    const uniqueDepartments = new Set(
        employees.map(employee => employee.department)
    );

    totalDepartmentsElement.textContent = uniqueDepartments.size;

    const totalSalary = employees.reduce(
        (total, employee) => total + Number(employee.salary),
        0
    );

    const averageSalary = employees.length
        ? totalSalary / employees.length
        : 0;

    averageSalaryElement.textContent = formatSalary(averageSalary);
}

// ========================================
// 10. VIEW EMPLOYEE DETAILS
// ========================================

function viewEmployee(id) {
    const employee = employees.find(emp => emp.id === id);

    if (!employee) {
        statusMessage.textContent = "Employee not found.";
        return;
    }

    selectedEmployeeId = id;
    employeeDetails.replaceChildren();

    const details = [
        ["Employee ID", employee.id],
        ["Full Name", employee.name],
        ["Email", employee.email],
        ["Department", employee.department],
        ["Monthly Salary", formatSalary(employee.salary)]
    ];

    details.forEach(([label, value]) => {
        const item = document.createElement("div");
        item.className = "detail-item";

        const labelElement = document.createElement("span");
        labelElement.className = "detail-label";
        labelElement.textContent = label;

        const valueElement = document.createElement("span");
        valueElement.className = "detail-value";
        valueElement.textContent = value;

        item.append(labelElement, valueElement);
        employeeDetails.appendChild(item);
    });

    detailsDialog.showModal();
}

// ========================================
// 11. OPEN ADD EMPLOYEE FORM
// ========================================

function openAddForm() {
    employeeForm.reset();
    employeeIdInput.value = "";
    formTitle.textContent = "Add Employee";
    formError.textContent = "";

    employeeDepartmentInput.value = "IT";

    employeeDialog.showModal();
    nameInput.focus();
}

// ========================================
// 12. EDIT EMPLOYEE
// ========================================

function editEmployee(id) {
    const employee = employees.find(emp => emp.id === id);

    if (!employee) {
        statusMessage.textContent = "Employee not found.";
        return;
    }

    employeeForm.reset();

    employeeIdInput.value = employee.id;
    nameInput.value = employee.name;
    emailInput.value = employee.email;
    employeeDepartmentInput.value = employee.department;
    salaryInput.value = employee.salary;

    formTitle.textContent = "Edit Employee";
    formError.textContent = "";

    if (detailsDialog.open) {
        detailsDialog.close();
    }

    employeeDialog.showModal();
    nameInput.focus();
}

// ========================================
// 13. ADD OR UPDATE EMPLOYEE
// ========================================

function handleEmployeeSubmit(event) {
    event.preventDefault();

    const idValue = employeeIdInput.value;
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const department = employeeDepartmentInput.value;
    const salary = Number(salaryInput.value);

    // Validate input
    if (!name || !email) {
        formError.textContent = "Name and email are required.";
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        formError.textContent = "Please enter a valid email address.";
        return;
    }

    if (!departments.includes(department)) {
        formError.textContent = "Please select a valid department.";
        return;
    }

    if (
        salaryInput.value.trim() === "" ||
        !Number.isFinite(salary) ||
        salary < 0
    ) {
        formError.textContent = "Please enter a valid non-negative salary.";
        return;
    }

    // Prevent duplicate email addresses
    const duplicateEmail = employees.some(employee =>
        employee.email.toLowerCase() === email.toLowerCase() &&
        String(employee.id) !== idValue
    );

    if (duplicateEmail) {
        formError.textContent =
            "An employee with this email already exists.";
        return;
    }

    if (idValue) {
        // UPDATE an existing employee
        const employee = employees.find(
            emp => String(emp.id) === idValue
        );

        if (!employee) {
            formError.textContent = "Employee not found.";
            return;
        }

        employee.name = name;
        employee.email = email;
        employee.department = department;
        employee.salary = salary;

        statusMessage.textContent = "Employee updated successfully.";
    } else {
        // CREATE a new employee
        employees.push({
            id: nextId++,
            name,
            email,
            department,
            salary
        });

        statusMessage.textContent = "Employee added successfully.";
    }

    saveEmployees();
    renderEmployees();
    employeeDialog.close();
}

// ========================================
// 14. DELETE EMPLOYEE
// ========================================

function deleteEmployee(id) {
    const employee = employees.find(emp => emp.id === id);

    if (!employee) {
        statusMessage.textContent = "Employee not found.";
        return;
    }

    const confirmed = confirm(
        `Are you sure you want to delete ${employee.name}?`
    );

    if (!confirmed) {
        return;
    }

    employees = employees.filter(emp => emp.id !== id);

    saveEmployees();
    renderEmployees();

    statusMessage.textContent = "Employee deleted successfully.";
}

// ========================================
// 15. RESET SEARCH AND FILTERS
// ========================================

function resetFilters() {
    searchInput.value = "";
    departmentSelect.value = "All";
    sortSelect.value = "name-asc";

    renderEmployees();
}

// ========================================
// 16. EVENT LISTENERS
// ========================================

searchInput.addEventListener("input", renderEmployees);

departmentSelect.addEventListener("change", renderEmployees);

sortSelect.addEventListener("change", renderEmployees);

addButton.addEventListener("click", openAddForm);

resetButton.addEventListener("click", resetFilters);

employeeForm.addEventListener("submit", handleEmployeeSubmit);

document.getElementById("closeDialog").addEventListener("click", () => {
    employeeDialog.close();
});

document.getElementById("cancelButton").addEventListener("click", () => {
    employeeDialog.close();
});

document.getElementById("closeDetails").addEventListener("click", () => {
    detailsDialog.close();
});

document.getElementById("detailsCloseButton").addEventListener("click", () => {
    detailsDialog.close();
});

document.getElementById("detailsEditButton").addEventListener("click", () => {
    if (selectedEmployeeId !== null) {
        editEmployee(selectedEmployeeId);
    }
});

// ========================================
// 17. START THE APPLICATION
// ========================================

loadEmployees();
