import axios from "axios";

export const getEmployeesRequest = async () => {
  return await axios.get("http://localhost:3000/api/employees")
}

export const createEmployeeRequest = async (task) => {
  return await axios.post("http://localhost:3000/api/employees", task)
}