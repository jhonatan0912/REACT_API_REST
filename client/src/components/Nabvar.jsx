import React from 'react'
import { Link } from "react-router-dom";


function Nabvar() {
  return (
    <div className='flex p-5 bg-zinc-800 text-white justify-between'>
      <Link to={"/"} className='font-bold md:text-3xl'>CRUD REACT - EXPRESS - MYSQL</Link>
      <ul className='flex gap-5 md:text-xl md:mr-5'>
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