import React from 'react'
import { useEffect, useState } from "react";
import { getEmployeesRequest } from "./../api/employee.api";
import EmployeeCard from "./../components/EmployeeCard.jsx";

function EmployeesPage() {

  const [employees, setEmployee] = useState([])

  useEffect(() => {
    console.log("Employees Page");
    async function loadEmployees() {
      const response = await getEmployeesRequest()
      setEmployee(response.data);
    }
    loadEmployees()
  }, [])
  return (
    <>
      <h1>Employees</h1>

      {
        employees.map(employee => (
          <EmployeeCard employee={employee} key={employee.idEmployee} />
        ))
      }
    </>
  )
}

export default EmployeesPage