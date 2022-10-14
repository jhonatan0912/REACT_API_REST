import React from 'react'
import { Route, Routes } from "react-router-dom";
import EmployeesPage from "./pages/EmployeesPage.jsx";
import EmployeeForm from "./pages/EmployeeForm.jsx";
import NotFound from "./pages/NotFound.jsx";
import Nabvar from './components/Nabvar.jsx';

function App() {
  return (
    <>

      <Nabvar />
      <Routes>
        <Route path='/' element={<EmployeesPage />}></Route>
        <Route path='/new' element={<EmployeeForm />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>
  )
}

export default App