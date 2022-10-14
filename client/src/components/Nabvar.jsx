import React from 'react'
import { Link } from "react-router-dom";


function Nabvar() {
  return (
    <div className='flex p-5 bg-zinc-800 text-white justify-between'>
      <h1 className='text-3xl'>CRUD REACT - EXPRESS - MYSQL</h1>
      <ul className='flex gap-5 text-xl mr-5'>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/new"}>Register employee</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nabvar