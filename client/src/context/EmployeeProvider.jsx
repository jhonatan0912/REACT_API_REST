import { useContext, useState } from "react";
import { getEmployeesRequest, deleteEmployeeRequest } from "../api/employee.api";
import { EmployeeContext } from "./../context/EmployeeContext.jsx";



export const useEmployee = () => {
  const context = useContext(EmployeeContext)
  if (context === undefined) {
    throw new Error("useEmployee must be used within a EmployeeContextProvider")
  }
  return context
}


export const EmployeeContextProvider = ({ children }) => {

  const [employees, setEmployees] = useState([])

  async function loadEmployees() {
    const response = await getEmployeesRequest()
    setEmployees(response.data);
  }

  const deleteEmployee = async (idEmployee) => {
    try {
      const response = await deleteEmployeeRequest(idEmployee)
      setEmployees(employees.filter(employee => employee.idEmployee !== idEmployee))
    } catch (error) {
      console.log(error);
    }

  }

  return <EmployeeContext.Provider value={{ employees, loadEmployees, deleteEmployee }}> {children} </EmployeeContext.Provider>
}