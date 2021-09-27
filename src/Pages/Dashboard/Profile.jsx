import React, { useEffect } from 'react'
import '../../Styles/UserProfile.css'
import UserDetails from '../../Components/UserDetails'
import UserProfile from '../../Components/UserProfileCard'
import DashboardSidebar from '../../Components/DashboardSidebar'
import { useQuery } from '@apollo/client'
import {
   GET_DELETED_JOBS,
   GET_ME,
   GET_ME_AND_DELETED_JOBS
} from '../../graphql/queries'
import Cookies from 'js-cookie'
import { Redirect } from 'react-router'
import ReactLoading from 'react-loading'
import NavbarOther from '../../Components/NavbarOther'
import { useSelector } from 'react-redux'

export const Dashboard = (props) => {
   const { loading, error, data } = useQuery(GET_ME)

   const username = useSelector((state) => state.user.username)
   const email = useSelector((state) => state.user.email)
   // useEffect(() => {
   //    console.log(data)
   // }, [data])

   // if (Cookies.get('jwt') == null) {
   //    return <Redirect to="/login" />
   // }

   console.log(data)
   if (error) console.log(error)

   return (
      <div className="profile">
         {/* <DashboardSidebar /> */}
         <NavbarOther />
         <div className="profile__body">
            {/* <link
               href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
               rel="stylesheet"
            /> */}

            {/* Page content */}

            {loading ? (
               <ReactLoading
                  type={'spin'}
                  // color={'black'}
                  height={'10%'}
                  color={'#000000'}
                  width={'10%'}
                  className="acceptedJob__loadingSpin"
               />
            ) : (
               <span>
                  {/* <UserProfile
                              firstName={data.me.username}
                              avatarImage={data.me.avatar}
                           /> */}

                  {data && <UserDetails username={username} email={email} />}
               </span>
            )}

            {/* <Footer /> */}
         </div>
      </div>
   )
}

export default Dashboard
