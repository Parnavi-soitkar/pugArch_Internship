var Department;
(function (Department) {
    Department["IT"] = "IT";
    Department["HR"] = "HR";
    Department["Finance"] = "Finance";
    Department["Sales"] = "Sales";
})(Department || (Department = {}));
let employeeDepartment = Department.IT;
console.log(employeeDepartment);
export {};
