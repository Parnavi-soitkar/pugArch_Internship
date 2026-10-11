
import { useState, useEffect } from "react";
import type { Employee } from "../types/Employee";

interface EmployeeFormProps {
    employeeToEdit: Employee | null;
    onSave: (employee: Omit<Employee, "id"> | Employee) => void;
    onCancel: () => void;
}

function EmployeeForm({
    employeeToEdit,
    onSave,
    onCancel
}: EmployeeFormProps) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [department, setDepartment] = useState("IT");
    const [designation, setDesignation] = useState("");
    const [salary, setSalary] = useState("");

    const [error, setError] = useState("");

    useEffect(() => {
        if (employeeToEdit) {
            setName(employeeToEdit.name);
            setEmail(employeeToEdit.email);
            setDepartment(employeeToEdit.department);
            setDesignation(employeeToEdit.designation);
            setSalary(String(employeeToEdit.salary));
        } else {
            setName("");
            setEmail("");
            setDepartment("IT");
            setDesignation("");
            setSalary("");
        }

        setError("");
    }, [employeeToEdit]);

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!name.trim() || !email.trim() || !designation.trim() || !salary) {
            setError("Please fill in all fields.");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        const salaryNumber = Number(salary);

        if (!Number.isFinite(salaryNumber) || salaryNumber <= 0) {
            setError("Salary must be greater than zero.");
            return;
        }

        const employeeData = {
            name: name.trim(),
            email: email.trim(),
            department,
            designation: designation.trim(),
            salary: salaryNumber
        };

        if (employeeToEdit) {
            onSave({
                ...employeeData,
                id: employeeToEdit.id
            });
        } else {
            onSave(employeeData);
        }
    }

    return (
        <section className="form-section">
            <h2>{employeeToEdit ? "Edit Employee" : "Add New Employee"}</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    Full Name
                    <input
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Enter employee name"
                    />
                </label>

                <label>
                    Email
                    <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Enter email address"
                    />
                </label>

                <label>
                    Department
                    <select
                        value={department}
                        onChange={(event) => setDepartment(event.target.value)}
                    >
                        <option value="IT">IT</option>
                        <option value="HR">HR</option>
                        <option value="Finance">Finance</option>
                        <option value="Sales">Sales</option>
                        <option value="Marketing">Marketing</option>
                    </select>
                </label>

                <label>
                    Designation
                    <input
                        type="text"
                        value={designation}
                        onChange={(event) => setDesignation(event.target.value)}
                        placeholder="e.g. Software Developer"
                    />
                </label>

                <label>
                    Salary (₹)
                    <input
                        type="number"
                        min="1"
                        value={salary}
                        onChange={(event) => setSalary(event.target.value)}
                        placeholder="Enter monthly salary"
                    />
                </label>

                {error && <p className="form-error">{error}</p>}

                <div className="form-buttons">
                    <button type="submit">
                        {employeeToEdit ? "Update Employee" : "Add Employee"}
                    </button>
                    <button type="button" onClick={onCancel}>
                        Cancel
                    </button>
                </div>
            </form>
        </section>
    );
}

export default EmployeeForm;
