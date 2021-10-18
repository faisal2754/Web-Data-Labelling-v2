import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/tab.css'

function HowToTabs() {
   const [click, setClick] = useState(false)
   // eslint-disable-next-line no-unused-vars
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
      <tabs className="tabs-other">
         <div className="tabs-container">
            <div className="menu-icon" onClick={handleClick}>
               <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'tabs-menu active' : 'tabs-menu'}>
               <li className="tabs-item">
                  <Link
                     to="/how-to"
                     className="tabs-links"
                     onClick={closeMobileMenu}
                  >
                     How to Submit Jobs
                  </Link>
               </li>
               <li className="tabs-item">
                  <Link
                     to="/how-to-find"
                     className="tabs-links"
                     onClick={closeMobileMenu}
                  >
                     How to Find Jobs
                  </Link>
               </li>
               <li className="tabs-item">
                  <Link
                     to="/faqs"
                     className="tabs-links"
                     onClick={closeMobileMenu}
                  >
                     FAQs
                  </Link>
               </li>
            </ul>
         </div>
      </tabs>
   )
}

export default HowToTabs
