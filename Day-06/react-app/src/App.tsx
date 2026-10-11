
import { useState } from "react";
import type { Employee } from "./types/Employee";

import { useEmployees } from "./hooks/useEmployees";
import DashboardCards from "./components/DashboardCards";
import EmployeeTable from "./components/EmployeeTable";
import EmployeeDetails from "./components/EmployeeDetails";
import EmployeeForm from "./components/EmployeeForm";

import "./App.css";

function App() {
    const {
        employees,
        loading,
        error,
        addNewEmployee,
        editEmployee,
        removeEmployee
    } = useEmployees();

    const [showForm, setShowForm] = useState(false);
    const [employeeToEdit, setEmployeeToEdit] =
        useState<Employee | null>(null);
    const [selectedEmployee, setSelectedEmployee] =
        useState<Employee | null>(null);
    const [actionError, setActionError] = useState("");

    async function handleSave(
        employee: Omit<Employee, "id"> | Employee
    ) {
        setActionError("");

        try {
            if ("id" in employee) {
                await editEmployee(employee);
            } else {
                await addNewEmployee(employee);
            }

            setShowForm(false);
            setEmployeeToEdit(null);
        } catch {
            setActionError("Unable to save employee. Please try again.");
        }
    }

    function handleEdit(employee: Employee) {
        setSelectedEmployee(null);
        setEmployeeToEdit(employee);
        setShowForm(true);
    }

    function handleAdd() {
        setEmployeeToEdit(null);
        setSelectedEmployee(null);
        setShowForm(true);
    }

    function handleCancel() {
        setShowForm(false);
        setEmployeeToEdit(null);
    }

    async function handleDelete(id: number) {
        setActionError("");

        try {
            await removeEmployee(id);
        } catch {
            setActionError("Unable to delete employee. Please try again.");
        }
    }

    return (
        <main className="app-container">
            <header className="app-header">
                <div>
                    <h1>Employee Management Dashboard</h1>
                    <p>Manage employees, departments and salaries.</p>
                </div>

                <button className="add-button" onClick={handleAdd}>
                    + Add Employee
                </button>
            </header>

            {loading && <p>Loading employees...</p>}

            {error && <p className="form-error">{error}</p>}

            {actionError && (
                <p className="form-error">{actionError}</p>
            )}

            {!loading && (
                <>
                    <DashboardCards employees={employees} />

                    {showForm && (
                        <EmployeeForm
                            employeeToEdit={employeeToEdit}
                            onSave={handleSave}
                            onCancel={handleCancel}
                        />
                    )}

                    {selectedEmployee && !showForm && (
                        <EmployeeDetails
                            employee={selectedEmployee}
                            onClose={() => setSelectedEmployee(null)}
                        />
                    )}

                    {!showForm && (
                        <EmployeeTable
                            employees={employees}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                            onView={setSelectedEmployee}
                        />
                    )}
                </>
            )}

            <footer className="app-footer">
                <p>
                    Employee Management System | Built with React and TypeScript
                </p>
            </footer>
        </main>
    );
}

export default App;
