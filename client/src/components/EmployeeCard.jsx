import React from 'react'

function EmployeeCard({employee}) {
  return (
    <div>
      <h2>{employee.name}</h2>
      <p> <span>S/.</span>{employee.salary}</p>
      <button>Update</button>
      <button>Delete</button>
    </div>
  )
}

export default EmployeeCard