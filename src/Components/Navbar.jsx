import React, { useState, useEffect } from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'
import { useSelector } from 'react-redux'
import Cookies from 'js-cookie'

function Navbar() {
   const [click, setClick] = useState(false)
   const [button, setButton] = useState(true)
   const [navbar, setNavbar] = useState(false)

   const handleClick = () => setClick(!click)
   const closeMobileMenu = () => setClick(false)
   const jwt = useSelector((state) => state.user.jwt)
   let isJwt = false
   if (jwt !== '') {
      isJwt = true
   }

   const showButton = () => {
      if (window.innerWidth <= 960) {
         setButton(false)
         setNavbar(true)
      } else {
         setButton(true)
         setNavbar(false)
      }
   }

   useEffect(() => {
      showButton()
   }, [])

   window.addEventListener('resize', showButton)

   const changeBackground = () => {
      if (window.scrollY >= 80) {
         setNavbar(true)
      } else {
         setNavbar(false)
      }
   }
   const deleteJWT = () => {
      Cookies.remove('jwt') //deletes the jwt token on signout
      window.location.reload()
      // toast.warning("You have logged out")
   }

   const changeNav = () => {}

   window.addEventListener('scroll', changeBackground)

   window.addEventListener('hashchange', changeNav)

   return (
      <nav className={navbar ? 'navbar active' : 'navbar'}>
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
               {!isJwt ? (
                  <li></li>
               ) : (
                  <li className="nav-item">
                     <Link
                        to="/dashboard/profile"
                        className="nav-links"
                        onClick={closeMobileMenu}
                     >
                        Dashboard
                     </Link>
                  </li>
               )}
               <li className="nav-item">
                  <Link
                     to="/how-to"
                     className="nav-links"
                     onClick={closeMobileMenu}
                  >
                     How it Works
                  </Link>
               </li>
               {!isJwt ? (
                  <li></li>
               ) : (
                  <li className="nav-item">
                     <Link
                        to="/create-job"
                        className="nav-links"
                        onClick={closeMobileMenu}
                     >
                        Create Job
                     </Link>
                  </li>
               )}
               <li className="nav-item">
                  <Link
                     to="/view-job"
                     className="nav-links"
                     onClick={closeMobileMenu}
                  >
                     Find A Job
                  </Link>
               </li>
               {!isJwt ? (
                  <li></li>
               ) : (
                  <li className="nav-item">
                     <Link
                        to="/label-job"
                        className="nav-links"
                        onClick={closeMobileMenu}
                     >
                        Label Job
                     </Link>
                  </li>
               )}
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
            {button && !isJwt ? (
               <Button buttonStyle="btn--outline" to="/login">
                  Login
               </Button>
            ) : (
               <div></div>
            )}
            {button && isJwt ? (
               <Button buttonStyle="btn--outline" onClick={deleteJWT}>
                  Sign Out
               </Button>
            ) : (
               <div></div>
            )}
            {button && !isJwt ? (
               <Button
                  buttonStyle="btn--primary"
                  buttonSize="btn--small"
                  to="/register"
               >
                  Sign Up
               </Button>
            ) : (
               <div></div>
            )}
         </div>
      </nav>
   )
}

export default Navbar
