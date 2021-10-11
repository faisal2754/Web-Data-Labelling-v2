import '../Styles/DropdownMenu.css'
import { ReactComponent as ProfileIcon } from './icons/profile_icon2.svg'
import { ReactComponent as AcceptedIcon } from './icons/accepted_icon.svg'
import { ReactComponent as OwnedIcon } from './icons/owned_icon.svg'
import { ReactComponent as LogOutIcon } from './icons/logout_icon.svg'
import { ReactComponent as CompletedIcon } from './icons/completed_icon.svg'
import Cookies from 'js-cookie'

import React, { useState, useEffect, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'

function DropdownMenu() {
   const [activeMenu, setActiveMenu] = useState('main')
   const [menuHeight, setMenuHeight] = useState(null)
   const dropdownRef = useRef(null)

   const deleteJWT = () => {
      Cookies.remove('jwt') //deletes the jwt token on signout
      // window.location.reload()
      // toast.warning("You have logged out")
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
               <DropdownItem leftIcon={<ProfileIcon />}>
                  <a href="#/dashboard/profile">My Profile</a>
               </DropdownItem>
               <DropdownItem leftIcon={<AcceptedIcon />}>
                  <a href="#/dashboard/accepted-jobs">Accepted Jobs</a>
               </DropdownItem>
               <DropdownItem leftIcon={<OwnedIcon />}>
                  <a href="#/dashboard/created-jobs">Created Jobs</a>
               </DropdownItem>
               <DropdownItem leftIcon={<CompletedIcon />}>
                  <a href="#/dashboard/completed-jobs">Job Results</a>
               </DropdownItem>
               <DropdownItem leftIcon={<LogOutIcon />}>
                  <a href="/" onClick={deleteJWT}>
                     Sign Out
                  </a>
               </DropdownItem>
            </div>
         </CSSTransition>

         {/* <CSSTransition
            in={activeMenu === 'settings'}
            timeout={500}
            classNames="menu-secondary"
            unmountOnExit
            onEnter={calcHeight}
         >
            <div className="menu">
               <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
                  <h2>My Tutorial</h2>
               </DropdownItem>
               <DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
               <DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>
               <DropdownItem leftIcon={<BoltIcon />}>JavaScript</DropdownItem>
               <DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
            </div>
         </CSSTransition>

         <CSSTransition
            in={activeMenu === 'animals'}
            timeout={500}
            classNames="menu-secondary"
            unmountOnExit
            onEnter={calcHeight}
         >
            <div className="menu">
               <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
                  <h2>Animals</h2>
               </DropdownItem>
               <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
               <DropdownItem leftIcon="🐸">Frog</DropdownItem>
               <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
               <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
            </div>
         </CSSTransition> */}
      </div>
   )
}

export default DropdownMenu
