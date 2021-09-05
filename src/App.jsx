import './App.css'
import CreateJob from './Pages/CreateJob'
import DashboardSidebar from './Components/DashboardSidebar'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home'
import HowTo from './Pages/HowTo'
import ViewJob from './Pages/ViewJob'
import Profile from './Pages/Dashboard/Profile'
import CreatedJobs from './Pages/Dashboard/CreatedJobs'
import AcceptedJobs from './Pages/Dashboard/AcceptedJobs'
import AboutUs from './Pages/Dashboard/AboutUs'
import Support from './Pages/Dashboard/Support'
import LabelJob from './Pages/LabelJob'
import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HowToFind from './Pages/HowToFind'

const App = () => {
   return (
      <Router>
         <Switch>
            <Route path="/" exact component={Home} />
            <Route
               path="/dashboard"
               exact
               component={() => <DashboardSidebar auhtorized={false} />}
            />
            <Route path="/create-job" exact component={CreateJob} />
            <Route path="/view-job" exact component={ViewJob} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/how-to" exact component={HowTo} />
            <Route path="/how-to-find" exact component={HowToFind} />
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
            <Route path="/label-job" exact component={LabelJob} />
         </Switch>
      </Router>
   )
}

export default App
