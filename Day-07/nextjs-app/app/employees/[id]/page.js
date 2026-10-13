
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function EmployeeDetailsPage() {
  const { id } = useParams();

  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchEmployee() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/employees/${id}`
        );

        if (!response.ok) {
          throw new Error("Employee not found");
        }

        const data = await response.json();
        setEmployee(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchEmployee();
    }
  }, [id]);

  if (loading) return <p>Loading employee details...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <main style={{ padding: "30px" }}>
      <h1>Employee Details</h1>

      <p><strong>ID:</strong> {employee.id}</p>
      <p><strong>Name:</strong> {employee.name}</p>
      <p><strong>Email:</strong> {employee.email}</p>
      <p><strong>Department:</strong> {employee.department}</p>
      <p><strong>Salary:</strong> ₹{employee.salary}</p>
    </main>
  );
}
