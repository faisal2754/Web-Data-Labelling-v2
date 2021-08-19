import React from 'react'
import '../Styles/Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
   const navStyle = {
      color: 'white'
   }

   return (
      <div>
         <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
               <Link style={navStyle} to="/dashboard">
                  <li> Dashboard </li>
               </Link>
               <Link style={navStyle} to="/create-job">
                  <li> Create Job </li>
               </Link>
               <Link style={navStyle} to="/register">
                  <li> Sign Up </li>
               </Link>
            </ul>
         </nav>
      </div>
   )
}

export default Nav
