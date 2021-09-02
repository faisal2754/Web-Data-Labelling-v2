import React from 'react'
import DashboardSidebar from '../../Components/DashboardSidebar'
import '../../Styles/Support.css'
import Footer from '../../Components/Footer'

function Support() {
   return (
      <div>
         <DashboardSidebar />
         <section class="contact">
            <div class="content">
               <h1>Get in touch!</h1>
               <p>
                  Send us a message and tell us if you have any concerns or
                  questions and we will do our best to help you in the best way
                  we can!
               </p>
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

export default Support
