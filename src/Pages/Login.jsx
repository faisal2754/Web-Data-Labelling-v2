import React from 'react'
import LoginForm from '../Components/LoginForm'
import Footer from '../Components/Footer'
import NavbarOther from '../Components/NavbarOther'

const Login = () => {
   return (
      <div>
         <NavbarOther />
         <h1>Login Page</h1>

         <LoginForm />
         <Footer />
      </div>
   )
}

export default Login
