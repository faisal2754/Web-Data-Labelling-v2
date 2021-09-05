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
import AboutUs from './Pages/Dashboard/AboutUs'
import Support from './Pages/Dashboard/Support'
import LabelJob from './Pages/LabelJob'
import React from 'react'
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'
import { updateJWT } from './redux/user'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HowToFind from './Pages/HowToFind'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

   const dispatch = useDispatch();

   if(Cookies.get('jwt') != null){
      dispatch(updateJWT(Cookies.get('jwt')))
   }

   return (
      <Router>
      <ToastContainer limit={1}/>
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
            <Route path="/dashboard/settings" exact component={Settings} />
            <Route path="/dashboard/profile" exact component={Profile} />
            <Route path="/dashboard/my-jobs" exact component={MyJobs} />
            <Route path="/dashboard/about-us" exact component={AboutUs} />
            <Route path="/dashboard/support" exact component={Support} />
            <Route path="/label-job" exact component={LabelJob} />
         </Switch>
      </Router>
   )
}

export default App
