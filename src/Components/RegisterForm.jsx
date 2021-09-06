import React, { useState } from 'react'
import '../Styles/Register.css'
import { Link, Redirect } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { toast } from 'react-toastify'
import { REGISTER_USER } from '../graphql/mutations'

const Register = () => {
   const [username, setUsername] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [confirmPass, setConfirmPass] = useState('')
   const [errorMsg, setErrorMsg] = useState('')

   const [registerMutation, { data, loading, error }] =
      useMutation(REGISTER_USER)

   const submitForm = async (e) => {
      let isValid = true
      e.preventDefault()
      if (!username) {
         isValid = false
         toast.error('Please enter a username')
      } else if (!email) {
         isValid = false
         toast.error('Please enter an email address')
      } else if (!/\S+@\S+\.\S+/.test(email)) {
         isValid = false
         toast.error('Please enter a valid email')
      } else if (!password) {
         isValid = false
         toast.error('Please enter a password')

      } else if (password.length < 5) {
         isValid = false
         toast.error('Password must be at least 5 characters')
      } else if (password != confirmPass) {
         isValid = false
         toast.error('Passwords do not match')
      }
      if (isValid) {
         await registerMutation({
            variables: {
               username: username,
               email: email,
               password: password
            }
         }).catch(()=>showError())
      }
   }
const showError=()=>{
   toast.error("Some error occured")

}

   const history = useHistory()

   if (data) {
      return <Redirect to="/login" />
   }
   if(error){
      showError()
   }

   return (
      <div className="register_container">
         <div class="forms-container">
            <form class="register-form" onSubmit={submitForm}>
               <Link to="/">
                  <img
                     className="login_logo"
                     alt="LOGO"
                     src="./images/login_logo.png"
                  />
               </Link>
               <h2 class="title">Register</h2>
               <div class="input-field">
                  <i class="fas fa-user icon"></i>
                  <input
                     type="text"
                     value={username}
                     onChange={(e) => {
                        setUsername(e.target.value)
                     }}
                     id="username"
                     placeholder="Username"
                     name="username"
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
                     name="email"
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
                     name="password"
                  />
               </div>
               <div class="input-field">
                  <i class="fas fa-lock icon"></i>
                  <input
                     type="password"
                     value={confirmPass}
                     onChange={(e) => setConfirmPass(e.target.value)}
                     id="conf_pword"
                     placeholder="Confirm Password"
                     name="checked"
                  />
               </div>
               {errorMsg && <p>{errorMsg}</p>}
               <button type="submit" className="register_registerButton">
                  {loading ? 'registering...' : 'Sign Up'}
               </button>

               {/* <p class="social-text">Or sign up with</p> */}
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
