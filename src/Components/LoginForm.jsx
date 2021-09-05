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

const Login = () => {
   const [userEmail, setUserEmail] = useState('')
   const [password, setPassword] = useState('')
   const [login, { data, loading, error }] = useMutation(LOGIN_USER)

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
      return <Redirect to="/dashboard" />
   }

   if (error) {
      toast.error("An error occured", {
         position: toast.POSITION.BOTTOM_CENTER
       })
      toast.clearWaitingQueue(); //Prevents duplicates of the toast from coming up
   }
   

   return (
      <div class="login_container">
         <div class="forms-container">
            <form
               class="sign-in-form"
               // onSubmit={submitForm}
               onSubmit={async (e) => {
                  e.preventDefault()
                  await login({
                     variables: {
                        email: userEmail,
                        password: password
                     }
                  }).catch((error) => console.log(error))
               }}
            >
               <Link to="/">
                  <img
                     className="login_logo"
                     alt="LOGO"
                     src="./images/login_logo.png"
                  />
               </Link>
               <h2 class="title">Sign in</h2>
               <div class="input-field">
                  <i class="fas fa-envelope icon"></i>
                  <input
                     type="text"
                     value={userEmail}
                     onChange={(e) => setUserEmail(e.target.value)}
                     id="email"
                     placeholder="Email"
                  />
               </div>
               <div class="input-field">
                  <i class="fas fa-lock icon"></i>
                  <input
                     type="password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     id="pword"
                     placeholder="Password"
                  />
               </div>

               {/* <p class="forgot-pass">Forgot Password?</p> */}

               <button type="submit" className="login_signInButton">
                  {loading ? 'Loading...' : 'LOGIN'}
               </button>
               <p class="social-text">Or login with</p>
               {/* <div class="social-media">
                  <a href="#" class="social-icon">
                     <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" class="social-icon">
                     <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#" class="social-icon">
                     <i class="fab fa-google"></i>
                  </a>
               </div> */}

               <p class="other-text">
                  Not a member?{' '}
                  <a id="hover" class="underlineHover" href="/register">
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
