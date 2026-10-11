
import type { Employee } from "../types/Employee";

interface EmployeeDetailsProps {
    employee: Employee;
    onClose: () => void;
}

function EmployeeDetails({
    employee,
    onClose
}: EmployeeDetailsProps) {
    return (
        <div className="details-panel">
            <h2>Employee Details</h2>

            <p><strong>ID:</strong> {employee.id}</p>
            <p><strong>Name:</strong> {employee.name}</p>
            <p><strong>Email:</strong> {employee.email}</p>
            <p><strong>Department:</strong> {employee.department}</p>
            <p><strong>Designation:</strong> {employee.designation}</p>
            <p>
                <strong>Salary:</strong>{" "}
                {employee.salary.toLocaleString("en-IN", {
                    style: "currency",
                    currency: "INR",
                    maximumFractionDigits: 0
                })}
            </p>

            <button onClick={onClose}>Close Details</button>
        </div>
    );
}

export default EmployeeDetails;
