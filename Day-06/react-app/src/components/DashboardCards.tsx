
import type { Employee } from "../types/Employee";

interface DashboardCardsProps {
    employees: Employee[];
}

function DashboardCards({ employees }: DashboardCardsProps) {
    const totalEmployees = employees.length;

    const averageSalary =
        totalEmployees > 0
            ? employees.reduce(
                  (total, employee) => total + employee.salary,
                  0
              ) / totalEmployees
            : 0;

    const departments = new Set(
        employees.map((employee) => employee.department)
    ).size;

    return (
        <div className="dashboard-cards">
            <div className="card">
                <h3>Total Employees</h3>
                <p>{totalEmployees}</p>
            </div>

            <div className="card">
                <h3>Average Salary</h3>
                <p>
                    {averageSalary.toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                        maximumFractionDigits: 0
                    })}
                </p>
            </div>

            <div className="card">
                <h3>Departments</h3>
                <p>{departments}</p>
            </div>
        </div>
    );
}

export default DashboardCards;
