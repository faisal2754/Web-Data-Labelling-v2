import React, { useState } from 'react'
import '../Styles/Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const signIn = (e) => {
      e.preventDefault()
      //some backend functionality
   }

   const register = (e) => {
      e.preventDefault()
      //some backend functionality
   }
   return (
      <div className="login">
         <div className="login_container">
            <Link to="/">
               <img className="login_logo" src="./images/login_logo.png" />
            </Link>

            <h1>Login</h1>
            <form>
               <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  placeholder="Email*"
               />

               <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="pword"
                  placeholder="Password*"
               />

               <button
                  type="submit"
                  onClick={signIn}
                  className="login_signInButton"
               >
                  Login
               </button>
            </form>

            <p>No account? </p>

            <button onClick={register} className="login_registerButton">
               Register
            </button>
         </div>
      </div>
   )
}

export default Login
