import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from './SidebarData'
import '../Styles/DashboardNav.css'
import { IconContext } from 'react-icons'
import { useSelector } from 'react-redux'

const DashboardSidebar = () => {
   const jwt = useSelector((state) => state.user.jwt)
   const [sidebar, setSidebar] = useState(false)

   const showSidebar = () => setSidebar(!sidebar)

   // if (jwt == ""){
   //     return <Redirect to="/login"/>
   // }

   return (
      <div>
         <IconContext.Provider value={{ color: '#fff' }}>
            <div className="dash--navbar">
               <Link to="#" className="dash--menu-bars">
                  <FaIcons.FaBars onClick={showSidebar} />
               </Link>
            </div>
            <nav
               className={sidebar ? 'dash--nav-menu active' : 'dash--nav-menu'}
            >
               <ul className="dash--nav-menu-items" onClick={showSidebar}>
                  <li className="dash--navbar-toggle">
                     <Link to="#" className="dash--menu-bars">
                        <AiIcons.AiOutlineClose />
                     </Link>
                  </li>
                  {SidebarData.map((item, index) => {
                     return (
                        <li key={index} className={item.className}>
                           <Link to={item.path}>
                              {item.icon}
                              <span>{item.title}</span>
                           </Link>
                        </li>
                     )
                  })}
               </ul>
            </nav>
         </IconContext.Provider>
      </div>
   )
}

export default DashboardSidebar
