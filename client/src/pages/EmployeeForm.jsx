import React from 'react'
import { Form, Formik } from "formik";
import { useEmployee } from "./../context/EmployeeProvider.jsx";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';



function EmployeeForm() {

  const { createEmployee, getEmployee, updateEmployee } = useEmployee()
  const [employee, setEmployee] = useState({
    name: "",
    salary: "",
  })
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const loadEmployee = async () => {
      if (params.id) {
        const employee = await getEmployee(params.id)
        setEmployee({
          name: employee.name,
          salary: employee.salary,
        })
      }
    };
    loadEmployee();
  }, [])

  return (
    <div className='custom-height'>
      <h1 className='text-center font-bold text-4xl py-5'>{params.id ? "Edit employee" : "Register employee"}</h1>
      <Formik
        initialValues={employee}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          if (params.id) {
            await updateEmployee(params.id, values)
            navigate("/")
          } else {
            await createEmployee(values)
            navigate("/")
          }
          // actions.resetForm()
          setEmployee({
            name: "",
            salary: "",
          })
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className='flex flex-col justify-center items-center gap-5 border-2 border-black w-3/4 md:w-4/12 lg:w-3/12 p-5 m-auto rounded-lg'
          >
            <label className='flex gap-5' htmlFor="name">
              Name:
              <input className='rounded bg-transparent border-black border-2 text-center' type="text" name="name" placeholder='Write a name' onChange={handleChange} value={values.name} required />
            </label>
            <label className='flex gap-5' htmlFor="salary">
              Salary:
              <input className='rounded bg-transparent border-black border-2 text-center' type="number" name="salary" placeholder='Write a salary' onChange={handleChange} min="1" value={values.salary} required />
            </label>
            <label>
              <button
                className='py-2 px-5 rounded text-white font-bold hover:scale-105 bg-black'
                type='submit' disabled={isSubmitting}>{isSubmitting ? "Sabving..." : "Save"}
              </button>
            </label>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default EmployeeForm