import React, { useState, useEffect } from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import '../Styles/Navbar_other.css'

function NavbarOther() {
   const [click, setClick] = useState(false)
   const [button, setButton] = useState(true)

   const handleClick = () => setClick(!click)
   const closeMobileMenu = () => setClick(false)

   const showButton = () => {
      if (window.innerWidth <= 960) {
         setButton(false)
      } else {
         setButton(true)
      }
   }

   useEffect(() => {
      showButton()
   }, [])

   window.addEventListener('resize', showButton)

   return (
      <nav className="navbar-other">
         <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
               <img src="./images/logo(white).png" alt="bug" height={120} />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
               <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
               <li className="nav-item">
                  <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                     Home
                  </Link>
               </li>
               <li className="nav-item">
                  <Link
                     to="/dashboard"
                     className="nav-links"
                     onClick={closeMobileMenu}
                  >
                     Dashboard
                  </Link>
               </li>

               <li className="nav-item">
                  <Link
                     to="/how-to"
                     className="nav-links"
                     onClick={closeMobileMenu}
                  >
                     How it Works
                  </Link>
               </li>

               <li className="nav-item">
                  <Link
                     to="/create-job"
                     className="nav-links"
                     onClick={closeMobileMenu}
                  >
                     Create Job
                  </Link>
               </li>

               <li className="nav-item">
                  <Link
                     to="/view-job"
                     className="nav-links"
                     onClick={closeMobileMenu}
                  >
                     Find A Job
                  </Link>
               </li>

               <li>
                  <Link
                     to="/login"
                     className="nav-links-mobile"
                     onClick={closeMobileMenu}
                  >
                     Login
                  </Link>
               </li>

               <li>
                  <Link
                     to="/register"
                     className="nav-links-mobile"
                     onClick={closeMobileMenu}
                  >
                     Sign Up
                  </Link>
               </li>
            </ul>
            {button && (
               <Button buttonStyle="btn--outline" to="/login">
                  Login
               </Button>
            )}
            {button && (
               <Button
                  buttonStyle="btn--primary"
                  buttonSize="btn--small"
                  to="/register"
               >
                  Sign Up
               </Button>
            )}
         </div>
      </nav>
   )
}

export default NavbarOther