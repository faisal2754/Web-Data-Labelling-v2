import React, { useState, useEffect } from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../Styles/Navbar_other.css'
import Cookies from 'js-cookie'
import NavItem from './NavItem'
import DropdownMenu from './DropdownMenu'
import { ReactComponent as MenuIcon } from './icons/menu_icon.svg'

function NavbarOther() {
   const [click, setClick] = useState(false)
   const [button, setButton] = useState(true)

   const handleClick = () => setClick(!click)
   const closeMobileMenu = () => setClick(false)

   const jwt = useSelector((state) => state.user.jwt)
   let isJwt = false
   // eslint-disable-next-line eqeqeq
   if (jwt != '') {
      isJwt = true
   }

   const deleteJWT = () => {
      Cookies.remove('jwt') //deletes the jwt token on signout
      window.location.reload()
      // toast.warning("You have logged out")
   }

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
               {/* {!isJwt ? (
                  <li></li>
               ) : (
                  <li className="nav-item">
                     <Link
                        to="/dashboard"
                        className="nav-links"
                        onClick={closeMobileMenu}
                     >
                        Dashboard
                     </Link>
                  </li>
               )} */}
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
               <NavItem icon={<MenuIcon />}>
                  <DropdownMenu></DropdownMenu>
               </NavItem>
            ) : (
               <div></div>
            )}
            {/* {button && isJwt ? (
               <Button buttonStyle="btn--outline" onClick={deleteJWT}>
                  Sign Out
               </Button>
            ) : (
               <div></div>
            )} */}
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

export default NavbarOther
