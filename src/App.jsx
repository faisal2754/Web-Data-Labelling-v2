import './App.css'
import Navbar from './Components/Navbar'
import CreateJob from './Pages/CreateJob'
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home'
import HowTo from './Pages/HowTo'
import ViewJob from './Pages/ViewJob'
import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
   return (
      <Router>
         <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/create-job" exact component={CreateJob} />
            <Route path="/view-job" exact component={ViewJob} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/how-to" exact component={HowTo} />
         </Switch>
      </Router>
   )
}

export default App
