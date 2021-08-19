import React from 'react'
import '../Styles/Register.css'

const Register = () => {
   return (
      <div className="register">
         <div className="registter_container">
            <h1>Register</h1>
            <form>
               <input type="text" id="username" placeholder="Username*" />

               <input type="text" id="email" placeholder="Email*" />

               <input type="text" id="pword" placeholder="Password*" />

               <input
                  type="text"
                  id="conf_pword"
                  placeholder=" Confirm Password*"
               />

               <button className="register_registerButton">Register</button>
            </form>

            <p>Already have an account? </p>

            <button className="register_loginButton">Login</button>
         </div>
      </div>
   )
}

export default Register
