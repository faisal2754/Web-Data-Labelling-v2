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

export const Dashboard = (props) => {
   const { loading, error, data } = useQuery(GET_ME)

   if (Cookies.get('jwt') == null) {
      return <Redirect to="/login" />
   }

   if (data) console.log(data)
   if (error) console.log(error)

   return (
      <div>
         <DashboardSidebar />
         <div>
            <link
               href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
               rel="stylesheet"
            />
            <div className="main-content">
               {/* Page content */}
               <div className="container-fluid mt--7">
                  <div>
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
                        <span style={{ display: 'flex' }}>
                           <UserProfile
                              firstName={data.me.username}
                              avatarImage={data.me.avatar}
                           />

                           <UserDetails
                              style={{ width: '100%' }}
                              username={data.me.username}
                              email={data.me.email}
                           />
                        </span>
                     )}
                  </div>
               </div>
            </div>
            {/* <Footer /> */}
         </div>
      </div>
   )
}

export default Dashboard
