
import { useState } from "react";
import type { Employee } from "../types/Employee";

interface EmployeeTableProps {
    employees: Employee[];
    onEdit: (employee: Employee) => void;
    onDelete: (id: number) => void;
    onView: (employee: Employee) => void;
}

function EmployeeTable({
    employees,
    onEdit,
    onDelete,
    onView
}: EmployeeTableProps) {
    const [search, setSearch] = useState("");
    const [department, setDepartment] = useState("All");
    const [sortOrder, setSortOrder] = useState("name");

    const departments = [
        "All",
        ...new Set(employees.map((employee) => employee.department))
    ];

    const filteredEmployees = employees
        .filter((employee) => {
            const searchText = search.toLowerCase();

            return (
                employee.name.toLowerCase().includes(searchText) ||
                employee.email.toLowerCase().includes(searchText)
            );
        })
        .filter(
            (employee) =>
                department === "All" ||
                employee.department === department
        )
        .sort((a, b) => {
            if (sortOrder === "salary") {
                return b.salary - a.salary;
            }

            return a.name.localeCompare(b.name);
        });

    return (
        <section className="employee-section">
            <h2>Employee Management</h2>

            <div className="toolbar">
                <input
                    type="text"
                    placeholder="Search by name or email..."
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />

                <select
                    value={department}
                    onChange={(event) => setDepartment(event.target.value)}
                >
                    {departments.map((item) => (
                        <option key={item} value={item}>
                            {item === "All" ? "All Departments" : item}
                        </option>
                    ))}
                </select>

                <select
                    value={sortOrder}
                    onChange={(event) => setSortOrder(event.target.value)}
                >
                    <option value="name">Sort by Name</option>
                    <option value="salary">Sort by Salary (High to Low)</option>
                </select>
            </div>

            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Department</th>
                            <th>Designation</th>
                            <th>Salary</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredEmployees.map((employee) => (
                            <tr key={employee.id}>
                                <td>{employee.name}</td>
                                <td>{employee.email}</td>
                                <td>{employee.department}</td>
                                <td>{employee.designation}</td>
                                <td>
                                    {employee.salary.toLocaleString("en-IN", {
                                        style: "currency",
                                        currency: "INR",
                                        maximumFractionDigits: 0
                                    })}
                                </td>
                                <td className="actions">
                                    <button onClick={() => onView(employee)}>
                                        View
                                    </button>

                                    <button onClick={() => onEdit(employee)}>
                                        Edit
                                    </button>

                                    <button
                                        onClick={() => {
                                            if (
                                                window.confirm(
                                                    `Delete ${employee.name}?`
                                                )
                                            ) {
                                                onDelete(employee.id);
                                            }
                                        }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}

                        {filteredEmployees.length === 0 && (
                            <tr>
                                <td colSpan={6}>No employees found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default EmployeeTable;
