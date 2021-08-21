import React from 'react'
import RegisterForm from '../Components/RegisterForm'
import Footer from '../Components/Footer'
import NavbarOther from '../Components/NavbarOther'

const Register = () => {
   return (
      <div>
         <NavbarOther />
         <h1>Register Page</h1>

         <RegisterForm />
         <Footer />
      </div>
   )
}

export default Register
