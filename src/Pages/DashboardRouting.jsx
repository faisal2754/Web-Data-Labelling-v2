import React from 'react'
import DashboardSidebar from '../Components/DashboardSidebar'
import {
   HashRouter as Router,
   Switch,
   Route,
   useLocation
} from 'react-router-dom'
import Home from './Home'
import Profile from './Dashboard/Profile'
import Settings from './Dashboard/Settings'
import MyJobs from './Dashboard/MyJobs'
import DashboardHome from './Dashboard/DashboardHome'

const DashboardRouting = () => {
   const location = useLocation()
   const isOnDashboard = location.pathname.includes('/dashboard')
   console.log(isOnDashboard)
   return (
         <Router>
            {isOnDashboard ? <DashboardSidebar /> : <div></div>}
            <Switch>
               <Route path="/" exact component={Home}/>
               <Route path="/dashboard/home" exact component={DashboardHome} />
               <Route path="/dashboard/settings" exact component={Settings} />
               <Route path="/dashboard/profile" exact component={Profile} />
               <Route path="/dashboard/my-jobs" exact component={MyJobs} />
            </Switch>
         </Router>
   )
}

export default DashboardRouting
