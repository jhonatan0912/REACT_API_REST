import React from 'react'
import { Form, Formik } from "formik";
import { createEmployeeRequest } from "./../api/employee.api.js";


function EmployeeForm() {
  return (
    <div>
      <h1>Register Employee</h1>
      <Formik
        initialValues={{
          name: "",
          salary: "",
        }}
        onSubmit={async (values, actions) => {
          console.log(values);
          try {
            const response = await createEmployeeRequest(values)
            console.log(response);
            actions.resetForm()
          } catch (error) {

          }
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