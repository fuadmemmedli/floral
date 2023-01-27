import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.scss'
const Navbar = () => {
  return (
    <nav>
        <div className="nav__logo">
            <h1><b>Floral Studio</b></h1>
        </div>



        <div className="nav__btns">
        <button><Link to='/'>Home</Link></button>
        <button>About us</button>
        <button>Portfolio</button>
        <button>Pricing</button>
        <button><Link to='/add'>Add</Link></button>
        </div>
    </nav>
  )
}

export default Navbar