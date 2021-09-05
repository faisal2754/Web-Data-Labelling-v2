import React from 'react'
import DashboardSidebar from '../../Components/DashboardSidebar'
import '../../Styles/Support.css'
import Footer from '../../Components/Footer'

function AboutUs() {
   return (
      <div>
         <DashboardSidebar />
         <div class="section">
            <div class="aboutUs">
               <div class="title">
                  <h1>
                     About Us <div class="border"></div>
                  </h1>
               </div>
               <div class="content">
                  <div class="article">
                     <h3>
                        The problem of unlabelled data is a big issue in the
                        area of Machine Learning. With an increase in the
                        availability of clean data, we are able to train more
                        accurate models for better performance and broaden the
                        variety of Machine Learning problems attempted. There is
                        a lot of data on the Internet that is not labelled and
                        it is a tedious job which most people do not like to do.
                     </h3>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default AboutUs
