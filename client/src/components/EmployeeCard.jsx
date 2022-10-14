import React from 'react'
import { deleteEmployeeRequest } from "./../api/employee.api";


function EmployeeCard({ employee }) {

  const handleDelete = async (idEmployee) => {
    try {
      const response = await deleteEmployeeRequest(idEmployee)
      console.log(response);
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div>
      <h2>{employee.name}</h2>
      <p> <span>S/.</span>{employee.salary}</p>
      <button>Update</button>
      <button onClick={() => handleDelete(employee.idEmployee)}>Delete</button>
    </div >
  )
}

export default EmployeeCard