function validateEmployee(data) {
  const errors = [];

  if (!data.name || !data.name.trim()) {
    errors.push("Name is required");
  }

  if (
    !data.email ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
  ) {
    errors.push("A valid email is required");
  }

  if (!data.department || !data.department.trim()) {
    errors.push("Department is required");
  }

  if (
    data.salary === undefined ||
    data.salary === null ||
    data.salary === "" ||
    !Number.isFinite(Number(data.salary)) ||
    Number(data.salary) < 0
  ) {
    errors.push("Salary must be a non-negative number");
  }

  return errors;
}

module.exports = { validateEmployee };