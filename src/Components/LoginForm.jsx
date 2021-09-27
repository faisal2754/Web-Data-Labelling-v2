import React, { useState } from 'react'
import '../Styles/Login.css'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { LOGIN_USER } from '../graphql/mutations'
import { useMutation } from '@apollo/client'
import { EmailOutlined } from '@material-ui/icons'
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'
import { updateEmail, updateJWT, updateUsername } from '../redux/user'
import { toast } from 'react-toastify'
import { GET_DELETED_JOBS } from '../graphql/queries'
import { GET_ME_AND_DELETED_JOBS } from '../graphql/queries'

const Login = () => {
   const [userEmail, setUserEmail] = useState('')
   const [password, setPassword] = useState('')
   const [login, { data, loading, error }] = useMutation(LOGIN_USER)
   // const [login_deleted, { data, loading, error }] = useMutation(GET_ME_AND_DELETED_JOBS)
   // const [deletedjobs, { datadeleted, loadingdeleted, errordeleted }] = useMutation(GET_DELETED_JOBS)
   console.log(data)
   //Example code on how to call the variables in store
   // const email = useSelector((state) => state.user.email)
   const dispatch = useDispatch()

   const history = useHistory()
   if (data && !error) {
      Cookies.set('jwt', data.login.jwt, { expires: 1 })
      //Set our redux variables
      dispatch(updateEmail(data.login.email))
      dispatch(updateUsername(data.login.username))
      dispatch(updateJWT(data.login.jwt))
      console.log(data)
      return <Redirect to="/dashboard/profile" />
   }

   // if (error) {
   //    console.log(error)
   //    toast.error('An error occured', {
   //       position: toast.POSITION.BOTTOM_CENTER
   //    })
   //    toast.clearWaitingQueue() //Prevents duplicates of the toast from coming up
   // }

   return (
      <div className="login_container">
         <div className="forms-container">
            <form
               className="sign-in-form"
               // onSubmit={submitForm}
               onSubmit={ (e) => {
                  e.preventDefault()
                   login({
                     variables: {
                        email: userEmail,
                        password: password
                     }
                  })
                  .catch((error) =>
                     toast.error(error.message, {
                        position: toast.POSITION.BOTTOM_CENTER
                     })
                  )
               }}
            >
               <Link to="/">
                  <img
                     className="login_logo"
                     alt="LOGO"
                     src="./images/login_logo.png"
                  />
               </Link>
               <h2 className="title">Sign in</h2>
               <div className="input-field">
                  <i className="fas fa-envelope icon"></i>
                  <input
                     type="text"
                     value={userEmail}
                     onChange={(e) => setUserEmail(e.target.value)}
                     id="email"
                     placeholder="Email"
                  />
               </div>
               <div className="input-field">
                  <i className="fas fa-lock icon"></i>
                  <input
                     type="password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     id="pword"
                     placeholder="Password"
                  />
               </div>

               {/* <p className="forgot-pass">Forgot Password?</p> */}

               <button type="submit" className="login_signInButton">
                  {loading ? 'Loading...' : 'LOGIN'}
               </button>
               <p className="social-text">Or login with</p>
               {/* <div className="social-media">
                  <a href="#" className="social-icon">
                     <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social-icon">
                     <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-icon">
                     <i className="fab fa-google"></i>
                  </a>
               </div> */}

               <p className="other-text">
                  Not a member?{' '}
                  <a id="hover" className="underlineHover" href="/register">
                     Sign up now
                  </a>
               </p>
            </form>
         </div>
      </div>

      //         {/* <button
      //            onClick={() => {
      //               history.push('/register')
      //            }}
      //            className="login_registerButton"
      //         >
      //            Register
      //         </button> */}
   )
}

export default Login
