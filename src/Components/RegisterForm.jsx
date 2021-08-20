import React from 'react'
import '../Styles/Register.css'
import { useHistory } from 'react-router-dom'
import Checkbox from '@material-ui/core/Checkbox'

const Register = () => {
   const history = useHistory()

   const [checked, setChecked] = React.useState(true)

   const handleChange = (event) => {
      setChecked(event.target.checked)
   }

   return (
      <div className="register">
         <div className="register_container">
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
            </form>

            <button
               onClick={() => {
                  history.push('/')
               }}
               className="register_registerButton"
            >
               Register
            </button>

            <p>By registering, you accept our Terms & Conditions</p>

            <button
               onClick={() => {
                  history.push('/login')
               }}
               className="register_loginButton"
            >
               Login
            </button>
            <p>Have an account? Login </p>
         </div>
      </div>
   )
}

export default Register
