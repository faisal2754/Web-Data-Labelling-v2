import React, { useState, useRef } from 'react'
import CardItem from './CardItem'
import '../Styles/Cards.css'
import { useQuery } from '@apollo/client'
import { GET_JOBS } from '../graphql/queries'
import Modal from '../Components/Modal'
import ReactLoading from 'react-loading'
import { toast } from 'react-toastify'

function Cards() {
   let jobs = []
   const { loading, error, data } = useQuery(GET_JOBS, {
      fetchPolicy: 'cache-and-network'
   })
   if (data) {
      jobs = data.viewJobs.slice(data.viewJobs.length - 3, data.viewJobs.length)
   }
   if (error) {
      toast.error('There was an error fetching the jobs')
   }

   const [showModal, setShowModal] = useState(false)
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
      <div className="cards">
         {/* {jobs.map((job) => {
            return (
               <div className="cards__modal">
                  <Modal
                     id={job.job_id}
                     src={job.preview_images[0]}
                     text={job.description}
                     credits={job.credits}
                     uploader={job.job_owner.username}
                     title={job.title}
                     showModal={showModal}
                     setShowModal={setShowModal}
                     buttonLabel={'Accept Job'}
                     destination="/dashboard/accepted-jobs"
                     acceptable={true}
                  />
               </div>
            )
         })} */}
         <h2>Check Out Some of our Labelling Jobs</h2>

         {loading ? (
            <ReactLoading
               type={'spin'}
               height={'10%'}
               color={'#000000'}
               width={'10%'}
               className="acceptedJob__loadingSpin"
            />
         ) : (
            <div className="cards__items">
               {jobs.map((job) => {
                  return (
                     <div className="cards__cardItems">
                        <CardItem
                           src={job.preview_images[0]}
                           text={job.title}
                           credits={job.credits}
                           path={'/view-job'}
                        />
                     </div>
                  )
               })}
            </div>
         )}
      </div>
   )
}

export default Cards
