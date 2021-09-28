import React, { useState } from 'react'
import DashboardSidebar from '../../Components/DashboardSidebar'
import { GET_ACCEPTED_JOBS } from '../../graphql/queries'
import { useQuery } from '@apollo/client'
import Modal from '../../Components/Modal'
import CardItem from '../../Components/CardItem'
import '../../Styles/AcceptedJobs.css'
import ReactLoading from 'react-loading'
import NavbarOther from '../../Components/NavbarOther'

function AcceptedJobs() {
   // const { loading, error, data } = useQuery(GET_ME)
   const { loading, error, data } = useQuery(GET_ACCEPTED_JOBS)
   const [showModal, setShowModal] = useState(false)

   let jobs = []
   if (data) {
      jobs = data.acceptedJobs
   }
   if (error) {
      console.log(error)
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
         <div className="acceptJobs__Modal">
            {jobs.map((job) => {
               return (
                  <div className="acceptJobs__modal">
                     <Modal
                        id={job.job_id}
                        src={job.preview_images[0]}
                        // src="../images/purple_gradient.jpg"
                        text={job.description}
                        credits={job.credits}
                        uploader={job.job_owner.username}
                        title={job.title}
                        showModal={showModal}
                        buttonLabel="Label Job"
                        setShowModal={setShowModal}
                        destination={{
                           pathname: '/label-job',
                           currentID: job.job_id
                        }}
                     />
                  </div>
               )
            })}
         </div>

         {/* <DashboardSidebar /> */}
         <div className="acceptedJobs__header">
            <video src="../videos/header-hero.mp4" autoPlay loop muted />
            <h1>View your Accepted Jobs</h1>
         </div>
         <div className="acceptedJobs__Loading">
            <h1>Pick A Job To Start Labeling</h1>
         </div>
         <div className="acceptJob__Section">
            {loading ? (
               <ReactLoading
                  type={'spin'}
                  color={'black'}
                  height={'10%'}
                  color={'#ffffff'}
                  width={'10%'}
                  className="acceptedJob__loadingSpin"
               />
            ) : (
               <div className="acceptJob__row">
                  {jobs.map((job) => {
                     return (
                        <div
                           className="acceptJob__cardItem"
                           onClick={(e) => openModal(job.job_id)}
                        >
                           <CardItem
                              // id={job.job_id.concat('card')}
                              src={job.preview_images[0]}
                              // src="../images/purple_gradient.jpg"
                              text={job.description}
                              credits={job.credits}
                           />
                        </div>
                     )
                  })}
               </div>
            )}
         </div>
      </div>
   )
}

export default AcceptedJobs
