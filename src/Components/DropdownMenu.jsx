import '../Styles/DropdownMenu.css'
import { ReactComponent as ProfileIcon } from './icons/profile_icon2.svg'
import { ReactComponent as AcceptedIcon } from './icons/accepted_icon.svg'
import { ReactComponent as OwnedIcon } from './icons/owned_icon.svg'
import { ReactComponent as LogOutIcon } from './icons/logout_icon.svg'
import { ReactComponent as CompletedIcon } from './icons/completed_icon.svg'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'

import React, { useState, useEffect, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'

function DropdownMenu() {
   const [activeMenu, setActiveMenu] = useState('main')
   const [menuHeight, setMenuHeight] = useState(null)
   const dropdownRef = useRef(null)

   const deleteJWT = () => {
      Cookies.remove('jwt') //deletes the jwt token on signout
      window.location.replace("/")
      // if(window.location.pathname=="/"){
      //    toast.warning("You have logged out")
      //    // setTimeout(window.location.reload(),5000)
      // }
      
   }

   useEffect(() => {
      setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
   }, [])

   function calcHeight(el) {
      const height = el.offsetHeight
      setMenuHeight(height)
   }

   function DropdownItem(props) {
      return (
         <div
            className="menu-item"
            onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
         >
            <span className="icon-button">{props.leftIcon}</span>
            {props.children}
            <span className="icon-right">{props.rightIcon}</span>
         </div>
      )
   }

   return (
      <div
         className="dropdown"
         style={{ height: menuHeight }}
         ref={dropdownRef}
      >
         <CSSTransition
            in={activeMenu === 'main'}
            timeout={500}
            classNames="menu-primary"
            unmountOnExit
            onEnter={calcHeight}
         >
            <div className="menu">
               <a href="#/dashboard/profile">
                  <DropdownItem leftIcon={<ProfileIcon />}>
                     My Profile
                  </DropdownItem>
               </a>
               <a href="#/dashboard/accepted-jobs">
                  <DropdownItem leftIcon={<AcceptedIcon />}>
                     Accepted Jobs
                  </DropdownItem>
               </a>
               <a href="#/dashboard/created-jobs">
                  <DropdownItem leftIcon={<OwnedIcon />}>
                     Created Jobs
                  </DropdownItem>
               </a>
               <a href="#/dashboard/completed-jobs">
                  <DropdownItem leftIcon={<CompletedIcon />}>
                     Job Results
                  </DropdownItem>
               </a>
               <a onClick={deleteJWT}>
                  <DropdownItem leftIcon={<LogOutIcon />}>
                     Sign Out
                  </DropdownItem>
               </a>
            </div>
         </CSSTransition>
      </div>
   )
}

export default DropdownMenu
