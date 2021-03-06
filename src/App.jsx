import './App.css'
import CreateJob from './Pages/CreateJob'
import DashboardSidebar from './Components/DashboardSidebar'
import Login from './Pages/Login'
import Testimonials from './Components/Testimonials'
import Register from './Pages/Register'
import Home from './Pages/Home'
import HowTo from './Pages/HowTo'
import ViewJob from './Pages/ViewJob'
import Profile from './Pages/Dashboard/Profile'
import CreatedJobs from './Pages/Dashboard/CreatedJobs'
import AcceptedJobs from './Pages/Dashboard/AcceptedJobs'
import LabelJob from './Pages/LabelJob'
import React from 'react'
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'
import { updateJWT } from './redux/user'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import HowToFind from './Pages/HowToFind'
import Faqs from './Pages/Faqs'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import CompletedJobs from './Pages/Dashboard/CompletedJobs'

const App = () => {
   const dispatch = useDispatch()

   if (Cookies.get('jwt') != null) {
      dispatch(updateJWT(Cookies.get('jwt')))
   }

   return (
      <Router>
         <ToastContainer limit={3} position="top-left" />
         <Switch>
            <Route path="/" exact component={Home} />
            <Route
               path="/dashboard"
               exact
               component={() => <DashboardSidebar authorized={false} />}
            />
            <Route path="/create-job" exact component={CreateJob} />
            <Route path="/Testimonials" exact component={Testimonials} />
            <Route path="/view-job" exact component={ViewJob} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/how-to" exact component={HowTo} />
            <Route path="/how-to-find" exact component={HowToFind} />
            <Route path="/faqs" exact component={Faqs} />
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
            <Route
               path="/dashboard/completed-jobs"
               exact
               component={CompletedJobs}
            />
            <Route path="/label-job" exact component={LabelJob} />
         </Switch>
      </Router>
   )
}

export default App
