import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
   Card,
   Typography,
   InputAdornment,
   Icon,
   CardContent,
   CardMedia,
   CardActionArea,
   CardActions,
   Button,
   Grid,
   TextField
} from '@material-ui/core'
import { Save, Email, People } from '@material-ui/icons'
import Navbar from '../Components/Navbar'
import '../Styles/Dashboard.css'
import Footer from '../Components/Footer'
import UserDetails from '../Components/UserDetails'
import UserProfile from '../Components/UserProfile'

const useStyles = makeStyles({
   profileCard: {
      maxWidth: 345,
      marginTop: 20,
      marginLeft: 200
   },
   media: {
      height: 140
   },

   form: {
      maxWidth: '90%',
      marginTop: 20,
      height: '150%'
   }
})

export const Dashboard = (props) => {
   const classNameNamees = useStyles()

   return (
      <div>
         <Navbar />
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
                     <div className="col-xl-8 order-xl-1">
                        <div className="card bg-secondary shadow">
                           <div className="card-header bg-white border-0">
                              <div className="row align-items-center">
                                 <div className="col-8">
                                    <h3 className="mb-0">My account</h3>
                                 </div>
                                 <div className="col-4 text-right">
                                    <a
                                       href="#!"
                                       className="btn btn-sm btn-primary"
                                    >
                                       Settings
                                    </a>
                                 </div>
                              </div>
                           </div>
                           <UserDetails />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <Footer />
         </div>
      </div>
   )
}

export default Dashboard
