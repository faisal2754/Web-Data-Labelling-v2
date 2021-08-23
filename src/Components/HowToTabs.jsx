import React, { useState, useEffect } from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import '../Styles/tab.css'

function HowToTabs() {
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
            <div className="menu-icon" onClick={handleClick}>
               <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
               <li className="nav-item">
                  <Link
                     to="/how-to"
                     className="nav-links"
                     onClick={closeMobileMenu}
                  >
                     How to Submit Jobs
                  </Link>
               </li>
               <li className="nav-item">
                  <Link
                     to="/how-to-find"
                     className="nav-links"
                     onClick={closeMobileMenu}
                  >
                     How to Find Jobs
                  </Link>
               </li>
            </ul>
         </div>
      </nav>
   )
}

export default HowToTabs
