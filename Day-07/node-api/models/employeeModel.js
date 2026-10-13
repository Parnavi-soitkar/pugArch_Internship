let employees = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@example.com",
    department: "IT",
    salary: 35000
  },
  {
    id: 2,
    name: "Priya Patil",
    email: "priya@example.com",
    department: "HR",
    salary: 30000
  },
  {
    id: 3,
    name: "Amit Verma",
    email: "amit@example.com",
    department: "Finance",
    salary: 40000
  }
];

let nextId = 4;

function getAllEmployees() {
  return employees;
}

function getEmployeeById(id) {
  return employees.find(employee => employee.id === Number(id));
}

function createEmployee(data) {
  const employee = {
    id: nextId++,
    ...data
  };

  employees.push(employee);
  return employee;
}

function updateEmployee(id, data) {
  const index = employees.findIndex(
    employee => employee.id === Number(id)
  );

  if (index === -1) return null;

  employees[index] = {
    ...employees[index],
    ...data,
    id: Number(id)
  };

  return employees[index];
}

function deleteEmployee(id) {
  const index = employees.findIndex(
    employee => employee.id === Number(id)
  );

  if (index === -1) return false;

  employees.splice(index, 1);
  return true;
}

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee
};