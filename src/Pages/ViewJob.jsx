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
import styled from 'styled-components'

const jobs = [
   {
<<<<<<< HEAD
=======
      id: 1,
      image: './images/purple_gradient.jpg',
      name: 'Job Name',
      credits: 100,
      description: 'This is the description',
      uploader: 'Email of Uploader'
   },
   {
      id: 2,
>>>>>>> 7b9c0d6611120f5808afca9440d443e944b2ea4a
      image: './images/purple_gradient.jpg',
      name: 'Job Name',
      credits: 100,
      description: 'This is the description',
      uploader: 'Email of Uploader'
   }
<<<<<<< HEAD
   // , {
   //    image: "./images/purple_gradient.jpg",
   //    name: "Job Name",
   //    credits: 100,
   //    description: "This is the description",
   //    uploader: "Email of Uploader"
   // }
   // ,{
=======
   // ,{
   //    id: 3,
>>>>>>> 7b9c0d6611120f5808afca9440d443e944b2ea4a
   //    image: "./images/purple_gradient.jpg",
   //    name: "Job Name",
   //    credits: 100,
   //    description: "This is the description",
   //    uploader: "Email of Uploader"
   // },{
<<<<<<< HEAD
=======
   //    id: 4,
>>>>>>> 7b9c0d6611120f5808afca9440d443e944b2ea4a
   //    image: "./images/purple_gradient.jpg",
   //    name: "Job Name",
   //    credits: 100,
   //    description: "This is the description",
   //    uploader: "Email of Uploader"
   // },{
<<<<<<< HEAD
=======
   //    id: 5,
>>>>>>> 7b9c0d6611120f5808afca9440d443e944b2ea4a
   //    image: "./images/purple_gradient.jpg",
   //    name: "Job Name",
   //    credits: 100,
   //    description: "This is the description",
   //    uploader: "Email of Uploader"
   // },{
<<<<<<< HEAD
=======
   //    id: 6,
>>>>>>> 7b9c0d6611120f5808afca9440d443e944b2ea4a
   //    image: "./images/purple_gradient.jpg",
   //    name: "Job Name",
   //    credits: 100,
   //    description: "This is the description",
   //    uploader: "Email of Uploader"
   // },{
<<<<<<< HEAD
=======
   //    id: 7,
>>>>>>> 7b9c0d6611120f5808afca9440d443e944b2ea4a
   //    image: "./images/purple_gradient.jpg",
   //    name: "Job Name",
   //    credits: 100,
   //    description: "This is the description",
   //    uploader: "Email of Uploader"
   // }
]

function ViewJob() {
   const [modalOpen, setModalOpen] = useState(false)

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
                     <div
                        className="viewJob__cardItem"
                        onClick={() => {
                           setModalOpen(true)
                        }}
                     >
                        <CardItem
                           src={job.image}
                           text={job.description}
                           credits={job.credits}
                        />
<<<<<<< HEAD
                        {modalOpen && (
                           <Modal
                              setOpenModal={setModalOpen}
                              closeModal={setModalOpen}
                              src={job.image}
                              description={job.description}
                              credits={job.credits}
                              name={job.name}
                              uploader={job.uploader}
                           />
                        )}
                     </div>
                  )
               })}
=======
                     </div>
                  )
               })}
               {modalOpen && <Modal setOpenModal={setModalOpen}
                />}
>>>>>>> 7b9c0d6611120f5808afca9440d443e944b2ea4a
            </div>
         </div>
         <Footer />
      </div>
   )
}

export default ViewJob
