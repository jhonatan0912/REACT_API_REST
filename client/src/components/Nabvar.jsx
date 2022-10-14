import React from 'react'
import { Link } from "react-router-dom";


function Nabvar() {
  return (
    <div>
      <h1>CRUD REACT - EXPRESS - MYSQL</h1>

      <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/new"}>Register employee</Link></li>
      </ul>
    </div>
  )
}

export default Nabvar