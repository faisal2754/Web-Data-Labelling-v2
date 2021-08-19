import React from 'react'
import '../Styles/Register.css'

const Register = () => {
   return (
      <div className="login">
         <div className="login_container">
            <img className="login_logo" src="./images/login_logo.png" />

            <h1>Register</h1>
            <form>
               <input type="text" id="email" placeholder="Email*" />

               <input type="text" id="pword" placeholder="Password*" />

               <button className="login_signInButton">Login</button>
            </form>

            <p>No account? </p>

            <button className="login_registerButton">Register</button>
         </div>
      </div>
   )
}

export default Register
