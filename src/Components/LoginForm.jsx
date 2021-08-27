import React, { useState } from 'react'
import '../Styles/Login.css'
import { Link, Redirect } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { LOGIN_USER } from '../graphql/mutations'
import { useMutation } from '@apollo/client'
import { EmailOutlined } from '@material-ui/icons'
import Cookies from 'js-cookie'

const Login = () => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [login, { data, loading, error }] = useMutation(LOGIN_USER)

   const history = useHistory()
   if (data && !error) {
      Cookies.set('jwt', data.login.jwt, { expires: 1 })
      return <Redirect to="/dashboard" />
   }

   return (
      <div class="login_container">
         <div class="forms-container">
            <form
               onSubmit={async (e) => {
                  e.preventDefault()
                  await login({
                     variables: {
                        email: email,
                        password: password
                     }
                  })
               }}
               class="sign-in-form"
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
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
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

               <p class="forgot-pass">Forgot Password?</p>

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
