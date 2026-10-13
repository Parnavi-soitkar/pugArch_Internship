const employeeModel = require("../models/employeeModel");
const { validateEmployee } = require("../utils/validators");

function getAllEmployees() {
  return employeeModel.getAllEmployees();
}

function getEmployeeById(id) {
  return employeeModel.getEmployeeById(id);
}

function createEmployee(data) {
  const errors = validateEmployee(data);

  if (errors.length) {
    const error = new Error(errors.join(", "));
    error.statusCode = 400;
    throw error;
  }

  const employeeData = {
    name: data.name.trim(),
    email: data.email.trim(),
    department: data.department.trim(),
    salary: Number(data.salary)
  };

  return employeeModel.createEmployee(employeeData);
}

function updateEmployee(id, data) {
  const errors = validateEmployee(data);

  if (errors.length) {
    const error = new Error(errors.join(", "));
    error.statusCode = 400;
    throw error;
  }

  const employeeData = {
    name: data.name.trim(),
    email: data.email.trim(),
    department: data.department.trim(),
    salary: Number(data.salary)
  };

  return employeeModel.updateEmployee(id, employeeData);
}

function deleteEmployee(id) {
  return employeeModel.deleteEmployee(id);
}

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee
};