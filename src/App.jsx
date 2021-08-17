import './App.css'
import Nav from './Components/Nav'
import CreateJob from './Pages/CreateJob'
import Dashboard from './Pages/Dashboard'
import Home from './Pages/Home'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/create-job" exact component={CreateJob} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
