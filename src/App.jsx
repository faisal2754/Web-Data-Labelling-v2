import './App.css'
import Nav from './Components/Nav'
import Navbar from './Components/Navbar'
import CreateJob from './Pages/CreateJob'
import Dashboard from './Pages/Dashboard'
import Home from './Pages/Home'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/create-job" exact component={CreateJob} />
      </Switch>
    </Router>
  )
}

export default App
