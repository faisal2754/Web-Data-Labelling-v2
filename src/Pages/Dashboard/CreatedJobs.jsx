import React, { useState } from 'react'
import DashboardSidebar from '../../Components/DashboardSidebar'
import { GET_CREATED_JOBS } from '../../graphql/queries'
import { useQuery } from '@apollo/client'
import Modal from '../../Components/Modal'
import CardItem from '../../Components/CardItem'
import '../../Styles/CreatedJobs.css'
import NavbarOther from '../../Components/NavbarOther'
import ReactLoading from 'react-loading'

function CreatedJobs() {
   const { loading, error, data } = useQuery(GET_CREATED_JOBS, {
      fetchPolicy: "no-cache"
   })
   const [showModal, setShowModal] = useState(false)

   let jobs = []
   if (data) {
      jobs = data.ownedJobs
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
         <div className="createdJobs__Modal">
            {jobs.map((job) => {
               return (
                  <div className="createdJobs__modal">
                     <Modal
                        id={job.job_id}
                        src={job.preview_images[0]}
                        // src="../images/purple_gradient.jpg"
                        text={job.description}
                        credits={job.credits}
                        title={job.title}
                        showModal={showModal}
                        buttonLabel="Delete Job"
                        setShowModal={setShowModal}
                        deletable={true}
                     />
                  </div>
               )
            })}
         </div>

         {/* <DashboardSidebar /> */}
         <div className="createdJobs__header">
            <video src="../videos/header-hero.mp4" autoPlay loop muted />
            <h1>View your Created Jobs</h1>
         </div>
         <div className="createdJobs__Loading">
            <h1>
               <b>
                     These Are The Jobs You Currently Own
               </b>
            </h1>
         </div>
         <div>
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
               <div className="createdJobs__row">
                  {jobs.map((job) => {
                     return (
                        <div
                           className="createdJobs__cardItem"
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

export default CreatedJobs
