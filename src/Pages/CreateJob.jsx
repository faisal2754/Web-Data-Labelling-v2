import React from 'react'
import CreateJobForm from '../Components/CreateJobForm'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
const CreateJob = () => {
   return (
      <div>
          <Navbar/>
         <h1>Create Job page</h1>
         <CreateJobForm />
         <Footer/>
      </div>
   )
}

export default CreateJob
