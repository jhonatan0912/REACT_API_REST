import React from 'react'
import { useEmployee } from "../context/EmployeeProvider.jsx";


function EmployeeCard({ employee }) {

  const { deleteEmployee } = useEmployee()

  return (
    <div>
      <h2>{employee.name}</h2>
      <p> <span>S/.</span>{employee.salary}</p>
      <button>Update</button>
      <button onClick={() => deleteEmployee(employee.idEmployee)}>Delete</button>
    </div >
  )
}

export default EmployeeCard