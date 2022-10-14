import React from 'react'
import { useEffect } from "react";
import EmployeeCard from "./../components/EmployeeCard.jsx";
import { useEmployee } from "./../context/EmployeeProvider.jsx";

function EmployeesPage() {

  const { employees, loadEmployees } = useEmployee()

  useEffect(() => {
    // console.log("Employees Page");

    loadEmployees()
  }, []);

  function renderMain() {
    if (employees.length === 0) return <h1>No employees yet</h1>

    return employees.map(employee => (
      <EmployeeCard employee={employee} key={employee.idEmployee} />
    ))
  }
  return (
    <>
      <h1>Employees</h1>

      {
        renderMain()
      }
    </>
  )
}

export default EmployeesPage