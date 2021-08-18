import React from 'react'
import '../Styles/Login.css'

const Login = () => {
   return (
      <div className="login">
         <img
            className="login_logo"
            src="https://logos-download.com/wp-content/uploads/2016/03/Amazon_Logo_2000.png"
         />

         <div className="login_container">
            <h1>Login</h1>
            <form>
               <h5>Email</h5>
               <input type="text" />

               <h5>Password</h5>
               <input type="password" />

               <button>Login</button>
            </form>

            <p></p>
         </div>
      </div>
   )
}

export default Login
