import React, { useState, useEffect } from 'react'
import '../Styles/Register.css'
import { Link, Redirect } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { REGISTER_USER } from '../graphql/mutations'
import Cookies from 'js-cookie'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

// const schema = yup.object().shape({
//    username: yup.string().required(),
//    email: yup.string().email().required(),
//    password: yup.string().min(5).required(),
//    checked: yup.string().oneOf([yup.ref('password'), null])
// })

const Register = () => {
   const [username, setUsername] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [confirmPass, setConfirmPass] = useState('')
   const [errorMsg, setErrorMsg] = useState('')

   const [registerMutation, { data, loading, error }] =
      useMutation(REGISTER_USER)

   const submitForm = (e) => {
      let isValid = true
      e.preventDefault()
      if (!username) {
         isValid = false
         setErrorMsg('Please enter username')
      } else if (!email) {
         isValid = false
         setErrorMsg('Please enter email')
      } else if (!/\S+@\S+\.\S+/.test(email)) {
         isValid = false
         setErrorMsg('Please enter valid email')
      } else if (!password) {
         isValid = false
         setErrorMsg('Please enter password')
      } else if (password.length < 5) {
         isValid = false
         setErrorMsg('Password must be at least 5 characters')
      } else if (password != confirmPass) {
         isValid = false
         setErrorMsg('Passwords do not match!')
      }
      if (isValid) {
         registerMutation({
            variables: {
               username: username,
               email: email,
               password: password
            }
         })
      }

      //   console.log(data)
   }

   const history = useHistory()

   if (data) {
      return <Redirect to="/login" />
   }

   return (
      <div className="register_container">
         <div class="forms-container">
            <form
               class="register-form"
               //    onSubmit={handleSubmit(submitForm)}
               onSubmit={submitForm}
            >
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
                        console.log(e)
                     }}
                     id="username"
                     placeholder="Username"
                     name="username"
                     //  {...register('username')}
                     //  ref={register}
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
                     //  ref={register}
                     name="email"
                     //  {...register('email')}
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
                     //  ref={register}
                     name="password"
                     //  {...register('password')}
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
                     //ref={register}
                     name="checked"
                     //  {...register('checked')}
                  />
               </div>
               {errorMsg && <p>{errorMsg}</p>}
               <button
                  type="submit"
                  // onClick={() => {
                  //    history.push('/')
                  // }}
                  className="register_registerButton"
               >
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
