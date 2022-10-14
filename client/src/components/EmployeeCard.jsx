import React from 'react'
import { useEmployee } from "../context/EmployeeProvider.jsx";
import { useNavigate } from "react-router-dom";

function EmployeeCard({ employee }) {

  const { deleteEmployee } = useEmployee()
  const navigate = useNavigate()

  return (
    <div>
      <h2>{employee.name}</h2>
      <p> <span>S/.</span>{employee.salary}</p>
      <button onClick={() => navigate(`/edit/${employee.idEmployee}`)}>Update</button>
      <button onClick={() => deleteEmployee(employee.idEmployee)}>Delete</button>
    </div >
  )
}

export default EmployeeCard