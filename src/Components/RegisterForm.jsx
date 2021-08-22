import React, { useState } from 'react'
import '../Styles/Register.css'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import Checkbox from '@material-ui/core/Checkbox'

const Register = () => {
   const [username, setUsername] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [checked, setChecked] = React.useState(true)

   const signIn = (e) => {
      e.preventDefault()
      //some backend functionality
   }

   const register = (e) => {
      e.preventDefault()
      //some backend functionality
   }
   const history = useHistory()

   const handleChange = (event) => {
      setChecked(event.target.checked)
   }

   return (
      <div className="register_container">
         <div class="forms-container">
            <form class="register-form">
               <Link to="/">
                  <img className="login_logo" src="./images/login_logo.png" />
               </Link>
               <h2 class="title">Register</h2>
               <div class="input-field">
                  <i class="fas fa-user icon"></i>
                  <input
                     type="text"
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
                     id="username"
                     placeholder="Username"
                  />
               </div>
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
               <div class="input-field">
                  <i class="fas fa-lock icon"></i>
                  <input
                     type="password"
                     value={checked}
                     onChange={(e) => setChecked(e.target.value)}
                     id="conf_pword"
                     placeholder=" Confirm Password"
                  />
               </div>
               <button
                  type="submit"
                  onClick={() => {
                     history.push('/')
                  }}
                  className="register_registerButton"
               >
                  SIGN UP
               </button>

               <p class="social-text">Or sign up with</p>
               <div class="social-media">
                  <a href="#" class="social-icon">
                     <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" class="social-icon">
                     <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#" class="social-icon">
                     <i class="fab fa-google"></i>
                  </a>
               </div>
               <p class="other-text">
                  Already a member?{' '}
                  <a id="hover" class="underlineHover" href="/login">
                     Login now
                  </a>
               </p>

               <p>By registering, you accept our Terms & Conditions</p>
            </form>
         </div>
      </div>
   )
}

export default Register
