import React from 'react'
import DashboardSidebar from '../../Components/DashboardSidebar'
import '../../Styles/Support.css'

function Support() {
   return (
      <div>
         <DashboardSidebar />
         <section className="contact">
            <div className="content">
               <h1>Get in touch!</h1>
               <p>
                  Send us a message and tell us if you have any concerns or
                  questions and we will do our best to help you in the best way
                  we can!
               </p>
            </div>
            <div className="container">
               <div className="contactInfo">
                  <div className="box">
                     <div className="icon">
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                     </div>
                     <div className="text">
                        <h3>Address</h3>
                        <p>
                           192 Data Labelling Place, Johannesburg, South Africa,
                           2192
                        </p>
                     </div>
                  </div>
                  <div className="box">
                     <div className="icon">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                     </div>
                     <div className="text">
                        <h3>Phone</h3>
                        <p>082-756-8979</p>
                     </div>
                  </div>
                  <div className="box">
                     <div className="icon">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                     </div>
                     <div className="text">
                        <h3>Email</h3>
                        <p>data@labelling.com</p>
                     </div>
                  </div>
               </div>
               {/* <div className="contactForm"> */}
               <form className="contactForm">
                  <h2>Send us a Message</h2>
                  <div className="inputBox">
                     <input
                        type="text"
                        placeholder="Full Name"
                        name="fullname"
                        required="required"
                     />
                  </div>
                  <div className="inputBox">
                     <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        required="required"
                     />
                  </div>
                  <div className="inputBox">
                     <input
                        type="text"
                        placeholder="Type your Message..."
                        name="message"
                        required="required"
                     />
                  </div>
                  <div className="inputBox">
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
