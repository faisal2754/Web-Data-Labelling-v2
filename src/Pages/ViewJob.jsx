import React, { useState } from 'react'
import '../Styles/ViewJob.css'
import { Button } from '../Components/Button'
import CardItem from '../Components/CardItem'
import '../Styles/Cards.css'
import NavbarOther from '../Components/NavbarOther'
import { Menu, MenuItem } from '@material-ui/core'
import '../App.css'
import Footer from '../Components/Footer'
import Modal from '../Components/Modal'
import '../Styles/ViewJob.css'
import { GET_JOBS } from '../graphql/queries'
import { useQuery } from '@apollo/client'

// const jobs = [
//    {
//       job_id: 1,
//       image: './images/purple_gradient.jpg',
//       name: 'Job Name',
//       credits: 100,
//       description: 'This is the description',
//       uploader: 'Email of Uploader'
//    },
//    {
//       job_id: 2,
//       image: './images/img-9.jpg',
//       name: 'Job Name',
//       credits: 100,
//       description: 'This is the description',
//       uploader: 'Email of Uploader'
//    },
//    {
//       job_id: 3,
//       image: './images/purple_gradient.jpg',
//       name: 'Job Name',
//       credits: 100,
//       description: 'This is the description',
//       uploader: 'Email of Uploader'
//    },
//    {
//       job_id: 4,
//       image: './images/purple_gradient.jpg',
//       name: 'Job Name',
//       credits: 100,
//       description: 'This is the description',
//       uploader: 'Email of Uploader'
//    },
//    {
//       job_id: 5,
//       image: './images/purple_gradient.jpg',
//       name: 'Job Name',
//       credits: 100,
//       description: 'This is the description',
//       uploader: 'Email of Uploader'
//    },
//    {
//       job_id: 6,
//       image: './images/purple_gradient.jpg',
//       name: 'Job Name',
//       credits: 100,
//       description: 'This is the description',
//       uploader: 'Email of Uploader'
//    },
//    {
//       job_id: 7,
//       image: './images/purple_gradient.jpg',
//       name: 'Job Name',
//       credits: 100,
//       description: 'This is the description',
//       uploader: 'Email of Uploader'
//    }
// ]

function ViewJob() {
   let jobs = []
   const { data } = useQuery(GET_JOBS)

   if (data) {
      console.log(data)
      jobs = data.viewJobs
      console.log(jobs)
   }

   const [showModal, setShowModal] = useState(false)

   const openModal = () => {
      setShowModal((prev) => !prev)
   }

   const [anchorElement, setAnchorElement] = useState(null)
   const handleOpenMenu = (e) => {
      setAnchorElement(e.currentTarget)
   }
   const handleCloseMenu = (e) => {
      setAnchorElement(null)
   }

   return (
      <div className="viewJob">
         <NavbarOther />

         {jobs.map((job) => {
            return (
               <div className="viewJob__modal" onClick={openModal}>
                  <Modal
                     id={job.job_id}
                     src={job.preview_images[0]}
                     // src={job.image}
                     showModal={showModal}
                     setShowModal={setShowModal}
                  />
               </div>
            )
         })}
         <div className="viewJob__header">
            <video src="./videos/gradient.mp4" autoPlay loop muted />

            <h1>Find A Job That Interests You</h1>
         </div>

         <div className="viewJob__filters">
            <h1>
               <b>Filter Your Jobs By: </b>
            </h1>
            <Button onClick={handleOpenMenu} aria-controls="filter__menu">
               Filters
            </Button>

            <Menu
               id="filter__menu"
               anchorElement={anchorElement}
               open={Boolean(anchorElement)}
               onClose={handleCloseMenu}
            >
               <MenuItem>Latest</MenuItem>
               <MenuItem>Name ASC</MenuItem>
               <MenuItem>Name DESC</MenuItem>
               <MenuItem>Credits ASC</MenuItem>
               <MenuItem>Credits DESC</MenuItem>
               <MenuItem># Photos ASC</MenuItem>
               <MenuItem># Photos DESC</MenuItem>
            </Menu>
         </div>

         <div className="viewJob__container">
            <div className="viewJob__row">
               {jobs.map((job) => {
                  return (
                     <div className="viewJob__cardItem" onClick={openModal}>
                        <CardItem
                           id={job.job_id}
                           src={job.preview_images[0]}
                           // src={job.image}
                           text={job.description}
                           credits={job.credits}
                        />
                     </div>
                  )
               })}
            </div>
         </div>
         <Footer />
      </div>
   )
}

export default ViewJob
