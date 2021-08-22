import './App.css'
import Navbar from './Components/Navbar'
import CreateJob from './Pages/CreateJob'
import DashboardSidebar from './Components/DashboardSidebar'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home'
import HowTo from './Pages/HowTo'
import ViewJob from './Pages/ViewJob'
import Profile from './Pages/Dashboard/Profile'
import Settings from './Pages/Dashboard/Settings'
import MyJobs from './Pages/Dashboard/MyJobs'
import React from 'react'

import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom'


const App = () => {
   return (
      <Router>
         <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/dashboard" exact component={DashboardSidebar} />
            <Route path="/create-job" exact component={CreateJob} />
            <Route path="/view-job" exact component={ViewJob} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/how-to" exact component={HowTo} />
            <Route path="/dashboard/settings" exact component={Settings} />
            <Route path="/dashboard/profile" exact component={Profile} />
            <Route path="/dashboard/my-jobs" exact component={MyJobs} />
         </Switch>
      </Router>
   )
}

export default App
