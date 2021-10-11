import React from 'react'
import DashboardSidebar from '../../Components/DashboardSidebar'
import '../../Styles/AboutUs.css'

function AboutUs() {
   return (
      <div>
         <video src="../videos/gradient.mp4" autoPlay loop muted />
         <DashboardSidebar />

         <div className="aboutUs">
            <div className="aboutUs__header">
               <h1>About Us</h1>
               <div className="aboutUs__desc">
                  The problem of unlabelled data is a big issue in the area of
                  Machine Learning. With an increase in the availability of
                  clean data, we are able to train more accurate models for
                  better performance and broaden the variety of Machine Learning
                  problems attempted. There is a lot of data on the Internet
                  that is not labelled and it is a tedious job which most people
                  do not like to do.
               </div>
            </div>
            <div className="aboutUs__body">
               <h1>How Can We Help</h1>
               <div className="aboutUs__bodyDesc">
                  Our website allows clients to upload images that they would
                  like labelled. Potential labellers are able to select which
                  tasks they want to work on, based on the set of images
                  provided and the specified remuneration. The system also
                  includes a rating for each labeller based on the quality of
                  their labelling skills. This ensures that the quality of
                  labelling provided is of a high standard and ensures
                  confidence in data being labelled adequately. Our systems
                  allows for hard working and reliable labellers to also build a
                  good reputation and secure more jobs and credits through the
                  process.
               </div>
            </div>
            <div className="aboutUs__team">
               <h1>This Website Was Brought To You By:</h1>
               <div className="aboutUs__teamDesc">
                  Aharon Cohen<br></br>
                  Faisal Saleem<br></br>
                  Ghulame Arbi<br></br>
                  Ioanni Balassis<br></br>
                  Jonathan Nunes<br></br>
                  Langiwe Mwale<br></br>
                  Sipho Sikakane<br></br>
                  Tristan Bester
               </div>
            </div>
         </div>
      </div>
   )
}

export default AboutUs
