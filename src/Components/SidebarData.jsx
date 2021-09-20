import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const SidebarData = [
   {
      title: 'Home',
      path: '/',
      icon: <AiIcons.AiFillHome />,
      className: 'dash--nav-text'
   },
   {
      title: 'Profile',
      path: '/dashboard/profile',
      icon: <IoIcons.IoMdPerson />,
      className: 'dash--nav-text'
   },
   {
      title: 'Accepted Jobs',
      path: '/dashboard/accepted-jobs',
      icon: <IoIcons.IoIosPaper />,
      className: 'dash--nav-text'
   },
   {
      title: 'Created Jobs',
      path: '/dashboard/created-jobs',
      icon: <FaIcons.FaCartPlus />,
      className: 'dash--nav-text'
   }
]
