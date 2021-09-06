import React from 'react'
import DashboardSidebar from '../../Components/DashboardSidebar'
//import '../../Styles/Support.css'
//import '../../Styles/AboutUs.css'
import Footer from '../../Components/Footer'
//import image from '../images/HowTo/about.jpg'

function AboutUs() {
   return (
      <div>
         <DashboardSidebar />
         <div class="section1">
            <div class="aboutUs">
               <div class="title1">
                  <h1>
                     About Us <div class="border1"></div>
                  </h1>
               </div>
               <div class="content1">
                  <div class="article1">
                     <h3>
                        The problem of unlabelled data is a big issue in the
                        area of Machine Learning. With an increase in the
                        availability of clean data, we are able to train more
                        accurate models for better performance and broaden the
                        variety of Machine Learning problems attempted. There is
                        a lot of data on the Internet that is not labelled and
                        it is a tedious job which most people do not like to do.
                     </h3>
                     <h2>How we can help</h2>
                     <p>
                        Our website allows clients to upload images that they
                        would like labelled. Potential labellers are able to
                        select which tasks they want to work on, based on the
                        set of images provided and the specified remuneration.
                        The system also includes a rating for each labeller
                        based on the quality of their labelling skills. This
                        ensures that the quality of labelling provided is of a
                        high standard and ensures confidence in data being
                        labelled adequately. Our systems allows for hard working
                        and reliable labellers to also build a good reputation
                        and secure more jobs and credits through the process.
                     </p>
                  </div>
               </div>
               {/* <div class="about-img">
                  <img
                     src="../images/HowTo/about.jpg">
               </div> */}
            </div>
         </div>
      </div>
   )
}

export default AboutUs
