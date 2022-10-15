import React from 'react'
import { useEmployee } from "../context/EmployeeProvider.jsx";
import { useNavigate } from "react-router-dom";

function EmployeeCard({ employee }) {

  const { deleteEmployee } = useEmployee()
  const navigate = useNavigate()

  return (
    <div className='card relative  border-2 rounded-lg border-black w-5/5  h-64 flex justify-center items-center flex-col gap-5'>
      <div className='flex absolute top-0 left-5 font-black text-3xl hover:scale-110 cursor-pointer'>
        <div>.</div>
        <div>.</div>
        <div>.</div>
      </div>
      <h2 className='font-semibold'>Employee name: <span className='font-normal text-lg'>{employee.name}</span></h2>
      <p className='font-bold'>Salary: <span className='text-green-700'>S/.{employee.salary}</span></p>
      <div className='flex justify-center gap-4'>
        <button
          className='py-2 px-4 bg-blue-700 rounded-lg text-white font-bold'
          onClick={() => navigate(`/edit/${employee.idEmployee}`)}>
          Update
        </button>

        <button
          className='py-2 px-4 bg-red-700 rounded-lg text-white font-bold'
          onClick={() => deleteEmployee(employee.idEmployee)}
        >
          Delete
        </button>
      </div>
    </div >
  )
}

export default EmployeeCard