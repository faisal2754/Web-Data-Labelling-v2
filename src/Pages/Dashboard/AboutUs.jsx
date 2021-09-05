import React from 'react'
import DashboardSidebar from '../../Components/DashboardSidebar'
import '../../Styles/Support.css'
import Footer from '../../Components/Footer'

function AboutUs() {
   return (
      <div>
         <DashboardSidebar />
         <section class="contact">
            <div class="content">
               <h1>
                  About Us <div class="border"></div>
               </h1>
               {/* <h2>Our Company & Ethos</h2> */}
               <p class="text">
                  The problem of unlabelled data is a big issue in the area of
                  Machine Learning. With an increase in the availability of
                  clean data, we are able to train more accurate models for
                  better performance and broaden the variety of Machine Learning
                  problems attempted. There is a lot of data on the Internet
                  that is not labelled and it is a tedious job which most people
                  do not like to do.
               </p>
               <button>Read More</button>
            </div>
            <div class="container">
               <div class="contactInfo">
                  <div class="box">
                     <div class="icon">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                     </div>
                     <div class="text">
                        <h3>Address</h3>
                        <p>
                           192 Data Labelling Place, Johannesburg, South Africa,
                           2192
                        </p>
                     </div>
                  </div>
                  <div class="box">
                     <div class="icon">
                        <i class="fa fa-phone" aria-hidden="true"></i>
                     </div>
                     <div class="text">
                        <h3>Phone</h3>
                        <p>082-756-8979</p>
                     </div>
                  </div>
                  <div class="box">
                     <div class="icon">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                     </div>
                     <div class="text">
                        <h3>Email</h3>
                        <p>data@labelling.com</p>
                     </div>
                  </div>
               </div>
               {/* <div className="contactForm"> */}
               <form className="contactForm">
                  <h2>Send us a Message</h2>
                  <div class="inputBox">
                     <input
                        type="text"
                        placeholder="Full Name"
                        name="fullname"
                        required="required"
                     />
                  </div>
                  <div class="inputBox">
                     <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        required="required"
                     />
                  </div>
                  <div class="inputBox">
                     <input
                        type="text"
                        placeholder="Type your Message..."
                        name="message"
                        required="required"
                     />
                  </div>
                  <div class="inputBox">
                     <button type="submit" className="sendButton">
                        Send
                     </button>
                  </div>
               </form>
               {/* /</div> */}
            </div>
            {/* <Footer /> */}
         </section>
      </div>
   )
}

export default AboutUs
