
import { useState, useEffect, useCallback } from "react";
import type { Employee } from "../types/Employee";

import {
    getEmployees,
    addEmployee,
    updateEmployee,
    deleteEmployee
} from "../services/employeeService";

export function useEmployees() {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    const loadEmployees = useCallback(async () => {
        setLoading(true);
        setError("");

        try {
            const data = await getEmployees();
            setEmployees(data);
        } catch {
            setError("Failed to load employees. Check whether the API is running.");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        void loadEmployees();
    }, [loadEmployees]);

    async function addNewEmployee(
        employee: Omit<Employee, "id">
    ): Promise<void> {
        setError("");

        try {
            const newEmployee = await addEmployee(employee);
            setEmployees((previous) => [...previous, newEmployee]);
        } catch {
            setError("Failed to add employee. Please try again.");
            throw new Error("Failed to add employee.");
        }
    }

    async function editEmployee(employee: Employee): Promise<void> {
        setError("");

        try {
            const updatedEmployee = await updateEmployee(employee);

            setEmployees((previous) =>
                previous.map((item) =>
                    item.id === updatedEmployee.id
                        ? updatedEmployee
                        : item
                )
            );
        } catch {
            setError("Failed to update employee. Please try again.");
            throw new Error("Failed to update employee.");
        }
    }

    async function removeEmployee(id: number): Promise<void> {
        setError("");

        try {
            await deleteEmployee(id);

            setEmployees((previous) =>
                previous.filter((employee) => employee.id !== id)
            );
        } catch {
            setError("Failed to delete employee. Please try again.");
            throw new Error("Failed to delete employee.");
        }
    }

    return {
        employees,
        loading,
        error,
        loadEmployees,
        addNewEmployee,
        editEmployee,
        removeEmployee
    };
}

