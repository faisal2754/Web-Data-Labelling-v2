import React from 'react'
import '../../Styles/UserProfile.css'
import UserDetails from '../../Components/UserDetails'
import UserProfile from '../../Components/UserProfileCard'
import DashboardSidebar from '../../Components/DashboardSidebar'
import { useQuery } from '@apollo/client'
import { GET_ME } from '../../graphql/queries'
import Cookies from 'js-cookie'
import { Redirect } from 'react-router'
import ReactLoading from 'react-loading'
import NavbarOther from '../../Components/NavbarOther'

export const Dashboard = (props) => {
   const { loading, error, data } = useQuery(GET_ME)

   if (Cookies.get('jwt') == null) {
      return <Redirect to="/login" />
   }

   if (data) console.log(data)
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

                  <UserDetails
                     username={data.me.username}
                     email={data.me.email}
                  />
               </span>
            )}

            {/* <Footer /> */}
         </div>
      </div>
   )
}

export default Dashboard
