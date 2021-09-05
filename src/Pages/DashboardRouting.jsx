import React from 'react'
import DashboardSidebar from '../Components/DashboardSidebar'
import {
   BrowserRouter as Router,
   Switch,
   Route,
   useLocation
} from 'react-router-dom'
import Home from './Home'
import Profile from './Dashboard/Profile'
import CreatedJobs from './Dashboard/CreatedJobs'
import AcceptedJobs from './Dashboard/AcceptedJobs'
import AboutUs from './Dashboard/AboutUs'
import Support from './Dashboard/Support'
import NavbarOther from '../Components/NavbarOther'
//import AcceptedJobs from './Dashboard/AcceptedJobs'

const DashboardRouting = () => {
   const location = useLocation()
   const isOnDashboard = location.pathname.includes('/dashboard')
   return (
      <Router>
         <NavbarOther />
         {isOnDashboard ? <DashboardSidebar /> : <div></div>}
         <Switch>
            <Route path="/" exact component={Home} />
            <Route
               path="/dashboard/created-jobs"
               exact
               component={CreatedJobs}
            />
            <Route path="/dashboard/profile" exact component={Profile} />
            <Route
               path="/dashboard/accepted-jobs"
               exact
               component={AcceptedJobs}
            />
            <Route path="/dashboard/about-us" exact component={AboutUs} />
            <Route path="/dashboard/support" exact component={Support} />
         </Switch>
      </Router>
   )
}

export default DashboardRouting
