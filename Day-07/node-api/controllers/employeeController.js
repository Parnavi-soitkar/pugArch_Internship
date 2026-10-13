const employeeService = require("../services/employeeService");

function getAllEmployees(req, res, next) {
  try {
    res.json(employeeService.getAllEmployees());
  } catch (error) {
    next(error);
  }
}

function getEmployeeById(req, res, next) {
  try {
    const employee = employeeService.getEmployeeById(req.params.id);

    if (!employee) {
      return res.status(404).json({
        message: "Employee not found"
      });
    }

    res.json(employee);
  } catch (error) {
    next(error);
  }
}

function createEmployee(req, res, next) {
  try {
    const employee = employeeService.createEmployee(req.body);
    res.status(201).json(employee);
  } catch (error) {
    next(error);
  }
}

function updateEmployee(req, res, next) {
  try {
    const employee = employeeService.updateEmployee(
      req.params.id,
      req.body
    );

    if (!employee) {
      return res.status(404).json({
        message: "Employee not found"
      });
    }

    res.json(employee);
  } catch (error) {
    next(error);
  }
}

function deleteEmployee(req, res, next) {
  try {
    const deleted = employeeService.deleteEmployee(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        message: "Employee not found"
      });
    }

    res.json({ message: "Employee deleted successfully" });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee
};