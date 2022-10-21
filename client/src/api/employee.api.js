import axios from "axios";

export const getEmployeesRequest = async () => {
  return await axios.get("http://localhost:3000/api/employees")
}

export const getEmployeeRequest = async (id) => {
  return await axios.get(`http://localhost:3000/api/employees/${id}`)
}

export const createEmployeeRequest = async (employee) => {
  return await axios.post("http://localhost:3000/api/employees", employee)
}


export const updateEmployeeRequest = async (id, newFields) => {
  return axios.patch(`http://localhost:3000/api/employees/${id}`, newFields)
}


export const deleteEmployeeRequest = async (id) => {
  return await axios.delete(`http://localhost:3000/api/employees/${id}`)
}