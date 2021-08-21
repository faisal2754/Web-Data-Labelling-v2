import React from 'react'
import CreateJobForm from '../Components/CreateJobForm'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import NavbarOther from '../Components/NavbarOther'
const CreateJob = () => {
   return (
      <div>
         <NavbarOther />
         <h1>Create Job page</h1>

         <CreateJobForm />
         <Footer />
      </div>
   )
}

export default CreateJob
