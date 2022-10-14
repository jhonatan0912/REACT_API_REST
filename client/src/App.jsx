import React from 'react'
import { Route, Routes } from "react-router-dom";
import EmployeesPage from "./pages/EmployeesPage.jsx";
import EmployeeForm from "./pages/EmployeeForm.jsx";
import NotFound from "./pages/NotFound.jsx";
import Nabvar from './components/Nabvar.jsx';
import { EmployeeContextProvider } from "./context/EmployeeProvider";

function App() {
  return (
    <div className='w-screen bg-zinc-300'>
      <EmployeeContextProvider>
        <Nabvar />
        <Routes>
          <Route path='/' element={<EmployeesPage />}></Route>
          <Route path='/new' element={<EmployeeForm />}></Route>
          <Route path='/edit/:id' element={<EmployeeForm />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </EmployeeContextProvider>
    </div>
  )
}

export default App