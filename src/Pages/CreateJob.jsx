import React from 'react'
import CreateJobForm from '../Components/CreateJobForm'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import NavbarOther from '../Components/NavbarOther'
const CreateJob = () => {
   return (
      <div>
         <NavbarOther />
         <CreateJobForm />
         <Footer />
      </div>
   )
}

export default CreateJob
