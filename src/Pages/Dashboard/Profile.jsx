import React from 'react'
import '../../Styles/UserProfile.css'
import UserDetails from '../../Components/UserDetails'
import UserProfile from '../../Components/UserProfileCard'
import DashboardSidebar from '../../Components/DashboardSidebar'
import { useQuery } from '@apollo/client'
import { GET_ME } from '../../graphql/queries'

export const Dashboard = (props) => {
   const { loading, error, data } = useQuery(GET_ME)

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
                  <div className="row">
                     {loading ? (
                        <div>loading...</div>
                     ) : (
                        <UserProfile
                           firstName={data.me.username}
                           lastName="Doe"
                           age="19"
                           title="Solution Manager - Creative Tim Officer"
                           education="University of Computer Science"
                           about="Ryan — the name taken by Melbourne-raised, Brooklyn-based
                        Nick Murphy — writes, performs and records all of his own
                        music."
                        />
                     )}
                     {loading ? (
                        <div>loading...</div>
                     ) : (
                        <UserDetails
                           username={data.me.username}
                           email={data.me.email}
                        />
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
