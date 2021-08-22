import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const SidebarData  = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        className: 'dash--nav-text'
    },
    {
        title: 'My Jobs',
        path: '/dashboard/my-jobs',
        icon: <IoIcons.IoIosPaper/>,
        className: 'dash--nav-text'
    },
    {
        title: 'Settings',
        path: '/dashboard/settings',
        icon: <FaIcons.FaCartPlus/>,
        className: 'dash--nav-text'
    },
    {
        title: 'Team',
        path: '/dashboard/team',
        icon: <IoIcons.IoMdPeople/>,
        className: 'dash--nav-text'
    },
    {
        title: 'Messages',
        path: '/dashboard/messages',
        icon: <FaIcons.FaEnvelopeOpenText/>,
        className: 'dash--nav-text'
    },
    {
        title: 'Support',
        path: '/dashboard/support',
        icon: <IoIcons.IoMdHelpCircle/>,
        className: 'dash--nav-text'
    }
]