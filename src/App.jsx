import './App.css'
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

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HowToFind from './Pages/HowToFind'
import DashboardHome from './Pages/Dashboard/DashboardHome'

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
            <Route path="/how-to-find" exact component={HowToFind} />
            <Route path="/dashboard/settings" exact component={Settings} />
            <Route path="/dashboard/profile" exact component={Profile} />
            <Route path="/dashboard/my-jobs" exact component={MyJobs} />
            <Route path="/dashboard/home" exact component={DashboardHome} />
         </Switch>
      </Router>
   )
}

export default App
