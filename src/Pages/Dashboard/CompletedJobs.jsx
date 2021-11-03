import React, { useState } from 'react'
import { GET_COMPLETED_JOBS } from '../../graphql/queries'
import { useQuery } from '@apollo/client'
import Modal from '../../Components/Modal'
import CardItem from '../../Components/CardItem'
import Footer from '../../Components/Footer'

import '../../Styles/CompletedJobs.css'
import ReactLoading from 'react-loading'
import NavbarOther from '../../Components/NavbarOther'

function CompletedJobs() {
   // const { loading, error, data } = useQuery(GET_ME)
   const { loading, error, data } = useQuery(GET_COMPLETED_JOBS)
   const [showModal, setShowModal] = useState(false)

   let jobs = []
   if (data) {
      jobs = data.completedJobs
   }
   if (error) {
   }

   const openModal = (currentId) => {
      setShowModal((prev) => !prev)
      for (let i = 0; i < jobs.length; i++) {
         if (jobs[i].job_id !== currentId) {
            document.getElementById(jobs[i].job_id).style.display = 'none'
         } else {
            document.getElementById(jobs[i].job_id).style.display = 'block'
         }
      }
   }
   return (
      <div>
         <NavbarOther />
         <div className="completeJobs__Modal">
            {jobs.map((job) => {
               return (
                  <div className="completeJobs__modal">
                     <Modal
                        id={job.job_id}
                        src={job.preview_images[0]}
                        // src="../images/completed_job.png"
                        text={job.description}
                        credits={job.credits}
                        uploader={job.job_owner.username}
                        title={job.title}
                        showModal={showModal}
                        buttonLabel="Get Results"
                        setShowModal={setShowModal}
                        // destination={{
                        //    pathname: '/',
                        //    currentID: job.job_id
                        // }}
                        completeable={true}
                     />
                  </div>
               )
            })}
         </div>

         {/* <DashboardSidebar /> */}
         <div className="completedJobs__header">
            <video src="../videos/header-hero.mp4" autoPlay loop muted />
            <h1>View your Completed Jobs</h1>
         </div>
         <div className="completedJobs__Loading1">
            <h1>Pick A Job To See Your Results</h1>
         </div>
         <div className="completedJobs__Loading2">
            <p>
               Not Sure How To Proceed From Here?{' '}
               <a id="hover" className="underlineHover" href="#/faqs">
                  Click here to go to FAQs
               </a>
            </p>
         </div>
         <div className="completeJob__Section">
            {loading ? (
               <ReactLoading
                  type={'spin'}
                  height={'10%'}
                  color={'#ffffff'}
                  width={'10%'}
                  className="completedJob__loadingSpin"
               />
            ) : (
               <div className="completeJob__row">
                  {jobs.map((job) => {
                     return (
                        <div
                           className="completeJob__cardItem"
                           onClick={(e) => openModal(job.job_id)}
                        >
                           <CardItem
                              // id={job.job_id.concat('card')}
                              src={job.preview_images[0]}
                              // src="../images/completed_job.png"
                              text={job.title}
                              credits="Done"
                           />
                        </div>
                     )
                  })}
               </div>
            )}
         </div>
         <Footer />
      </div>
   )
}

export default CompletedJobs
