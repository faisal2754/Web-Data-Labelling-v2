import React from 'react'
import '../Styles/UserProfile.css'
import Footer from '../Components/Footer'
import UserDetails from '../Components/UserDetails'
import UserProfile from '../Components/UserProfileCard'
import NavbarOther from '../Components/NavbarOther'

export const Dashboard = (props) => {
   return (
      <div>
         <NavbarOther />
         <div>
            <link
               href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
               rel="stylesheet"
            />
            <div className="main-content">
               {/* Page content */}
               <div className="container-fluid mt--7">
                  <div className="row">
                     <UserProfile
                        firstName="John"
                        lastName="Doe"
                        age="19"
                        title="Solution Manager - Creative Tim Officer"
                        education="University of Computer Science"
                        about="Ryan — the name taken by Melbourne-raised, Brooklyn-based
                        Nick Murphy — writes, performs and records all of his own
                        music."
                     />
                     <UserDetails />
                  </div>
               </div>
            </div>
            <Footer />
         </div>
      </div>
   )
}

export default Dashboard
