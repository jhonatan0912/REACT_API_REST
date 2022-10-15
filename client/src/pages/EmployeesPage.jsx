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
    if (employees.length === 0) return <h1 className='text-red-700 font-black text-4xl'>No employees yet</h1>

    return employees.map(employee => (
      <EmployeeCard employee={employee} key={employee.idEmployee} />
    ))
  }
  return (
    <div className='min-h-screen max-w-screen overflow-x-hidden'>
      <h1 className='text-3xl text-center py-5 font-bold underline'>Employees</h1>
      <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-3/5 m-auto'>
        {
          renderMain()
        }
      </div>
    </div>
  )
}

export default EmployeesPage