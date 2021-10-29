import React from 'react'
import '../../Styles/UserProfile.css'
import UserDetails from '../../Components/UserDetails'
import UserProfile from '../../Components/UserProfileCard'
import { useQuery } from '@apollo/client'
import { GET_ME_AND_DELETED_JOBS } from '../../graphql/queries'
import ReactLoading from 'react-loading'
import NavbarOther from '../../Components/NavbarOther'
import { useSelector } from 'react-redux'
import swal from 'sweetalert'
import Cookies from 'js-cookie'
import {Redirect}  from 'react-router-dom'
export const Dashboard = (props) => {
   const { loading, error, data } = useQuery(GET_ME_AND_DELETED_JOBS)
   const username = useSelector((state) => state.user.username)
   const email = useSelector((state) => state.user.email)

   const cook=Cookies.get('jwt')
   if (cook == null) {
      console.log("boy")
      return <Redirect to="/" />
   }

   if (data) {
      if (data.deletedJobs) {
         if (data.deletedJobs.length !== 0) {
            let jobarray = data.deletedJobs.map(function (job) {
               return JSON.stringify(job.title)
            })
            let jobstring = jobarray.join(',')
            swal({
               title: 'These Jobs deleted while you were away...',
               text: jobstring,
               icon: 'warning',
               buttons: [true, 'OK'],
               dangerMode: true
            })
         }
      }
   }

   if (error) {
      //do nothing
   }
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
                  <UserProfile
                     firstName={data.me.username}
                     balance={data.me.balance}
                     email={data.me.email}
                  />

                  {data && <UserDetails username={username} email={email} />}
               </span>
            )}

            {/* <Footer /> */}
         </div>
      </div>
   )
}

export default Dashboard
