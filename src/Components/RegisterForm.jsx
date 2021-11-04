import React, { useState } from 'react'
import '../Styles/Register.css'
import { Link, Redirect } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { toast } from 'react-toastify'
import { REGISTER_USER } from '../graphql/mutations'

const Register = () => {
   const [username, setUsername] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [confirmPass, setConfirmPass] = useState('')
   // eslint-disable-next-line no-unused-vars
   const [errorMsg, setErrorMsg] = useState('')

   // eslint-disable-next-line no-unused-vars
   const [registerMutation, { data, loading, error }] =
      useMutation(REGISTER_USER)

   const submitForm = async (e) => {
      let isValid = true
      e.preventDefault()
      if (!username) {
         isValid = false
         toast.error('Please enter a username', {
            toastId: "invalusername"
          })
      } else if (username.length > 12) {
         isValid = false
         toast.error('Username must not be more than 12 characters', {
            toastId: "invaluserlength"
          })
      } else if (!email) {
         isValid = false
         toast.error('Please enter an email address', {
            toastId: "invalemailaddy"
          })
      } else if (!/\S+@\S+\.\S+/.test(email)) {
         isValid = false
         toast.error('Please enter a valid email', {
            toastId: "invalemailaddy2"
          })
      } else if (!password) {
         isValid = false
         toast.error('Please enter a password', {
            toastId: "invalpass"
          })
      } else if (password.length < 5) {
         isValid = false
         toast.error('Password must be at least 5 characters', {
            toastId: "invalpasslength"
          })
      } else if (password !== confirmPass) {
         isValid = false
         toast.error('Passwords do not match', {
            toastId: "invalpasswordmatch"
          })
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
               toast.error('This email address already exists', {
                  toastId: "invalemailexists"
                })
               return
            }
            toast.error(error.message, {
               position: toast.POSITION.BOTTOM_CENTER
            })
         })
         toast.success('You Have Been Succesfully Registered')
      }
   }

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

               <p className="other-text">
                  Already a member?{' '}
                  <a id="hover" className="underlineHover" href="#/login">
                     Login now
                  </a>
               </p>

            </form>
         </div>
      </div>
   )
}

export default Register
