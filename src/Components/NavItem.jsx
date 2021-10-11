/* eslint-disable jsx-a11y/anchor-is-valid */
import '../Styles/DropdownMenu.css'

import React, { useState } from 'react'

function NavItem(props) {
   const [open, setOpen] = useState(false)

   return (
      <li className="navigation-item">
         <a className="icon-button" onClick={() => setOpen(!open)}>
            {props.icon}
         </a>

         {open && props.children}
      </li>
   )
}

export default NavItem
