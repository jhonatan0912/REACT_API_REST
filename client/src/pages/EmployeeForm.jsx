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
    <div>
      <h1>{params.id ? "Edit employee" : "Register employee"}</h1>
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
          >
            <label htmlFor="name">
              <input type="text" name="name" placeholder='Write a name' onChange={handleChange} value={values.name} required />
            </label>
            <label htmlFor="salary">
              <input type="number" name="salary" placeholder='Write a salary' onChange={handleChange} min="1" value={values.salary} required />
            </label>
            <label>
              <button type='submit' disabled={isSubmitting}>{isSubmitting ? "Sabving..." : "Save"}</button>
            </label>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default EmployeeForm