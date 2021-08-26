import React from 'react'
import LoginForm from '../Components/LoginForm'
import Footer from '../Components/Footer'
import NavbarOther from '../Components/NavbarOther'

const FormSuccess = () => {
   return (
      <div className="form-success">
         Successfully registered!
         <NavbarOther />
         <LoginForm />
         <Footer />
      </div>
   )
}

export default FormSuccess
