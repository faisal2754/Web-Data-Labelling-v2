import React, { useState } from 'react'
import DashboardSidebar from '../../Components/DashboardSidebar'
import { GET_ME, GET_ACCEPTED_JOBS } from '../../graphql/queries'
import { useQuery } from '@apollo/client'
import Modal from '../../Components/Modal'
import CardItem from '../../Components/CardItem'

function MyJobs() {
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
      // for (let i = 0; i < jobs.length; i++) {
      //    if (jobs[i].job_id !== currentId) {
      //       document.getElementById(jobs[i].job_id).style.display = 'none'
      //    } else {
      //       document.getElementById(jobs[i].job_id).style.display = 'block'
      //    }
      // }
   }
   // if(error_jobs) console.log(error_jobs)
   return (
      <div>
         <DashboardSidebar />

         <div className="myJobs">
            <h1>Here are my Jobs</h1>
            {jobs.map((job) => {
               return (
                  <div className="viewJob__modal">
                     <Modal
                        id={job.job_id}
                        // src={job.preview_images[0]}
                        text={job.description}
                        credits={job.credits}
                        uploader={job.job_owner.username}
                        title={job.title}
                        showModal={showModal}
                        setShowModal={setShowModal}
                     />
                  </div>
               )
            })}
            <div className="viewJob__row">
               {jobs.map((job) => {
                  return (
                     <div
                        className="viewJob__cardItem"
                        onClick={(e) => openModal(job.job_id)}
                     >
                        <CardItem
                           // id={job.job_id.concat('card')}
                           // src={job.preview_images[0]}
                           // src={job.preview_images}
                           text={job.description}
                           credits={job.credits}
                        />
                     </div>
                  )
               })}
            </div>
         </div>
      </div>
   )
}

export default MyJobs
