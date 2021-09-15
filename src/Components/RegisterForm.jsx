import React, { useState } from 'react'
import '../Styles/Register.css'
import { Link, Redirect } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { ToastContainer, toast } from 'react-toastify'
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
         }).catch((error) => {
            if (
               error.message ===
               'Unique constraint failed on the fields: (`email`)'
            ) {
               toast.error('This email address already exists')
               return
            }
            toast.error(error.message, {
               position: toast.POSITION.BOTTOM_CENTER
            })
         })
         toast.success('You Have Been Succesfully Registered')
      }
   }

   const history = useHistory()

   if (data) {
      return <Redirect to="/login" />
   }

   return (
      <div className="register_container">
         <div className="forms-container">
            <form className="register-form" onSubmit={submitForm}>
               <Link to="/">
                  <img
                     className="login_logo"
                     alt="LOGO"
                     src="./images/login_logo.png"
                  />
               </Link>
               <h2 className="title">Register</h2>
               <div className="input-field">
                  <i className="fas fa-user icon"></i>
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
               <div className="input-field">
                  <i className="fas fa-envelope icon"></i>
                  <input
                     type="text"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     id="email"
                     placeholder="Email"
                     name="email"
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
                     name="password"
                  />
               </div>
               <div className="input-field">
                  <i className="fas fa-lock icon"></i>
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

               {/* <p className="social-text">Or sign up with</p> */}
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
                  Already a member?{' '}
                  <a id="hover" className="underlineHover" href="/login">
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
