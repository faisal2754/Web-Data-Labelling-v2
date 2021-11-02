import React from 'react'
import { Button } from './Button'
import '../Styles/HowToSection.css'
import '../Styles/faq.css'
import '../App.css'

function FaqSection() {
   return (
      <div className="hero-container">
         <div className="viewJob__header">
            <video src="./videos/gradient.mp4" autoPlay loop muted />

            <h1>FAQ</h1>
            <h2>Here are some answers to some commonly asked questions</h2>
         </div>

         <div className="faqSection">
            <details open>
               <summary>How do I sign up?</summary>
               <div>
                  Click on the 'Sign Up' button in the top right corner and fill
                  in the required information to sign up on our platform.
               </div>
            </details>
            <details>
               <summary>How can I login?</summary>
               <div>
                  After you have signed up, click on the 'Login' button in the
                  top right corner and enter your accounts correct details to
                  login to start using the platform.
               </div>
            </details>
            <details>
               <summary>Where do I edit my username from?</summary>
               <div>
                  If you would like to change you username, you can do so on
                  your profile page. Simple enter your desired new username and
                  click 'Update username'.
               </div>
            </details>
            <details>
               <summary>How do I change my password?</summary>
               <div>
                  After you have logged in and you would like to change your
                  password for security purposes, you can do so by navigating to
                  your profile and entering a new password and clikcing 'Update
                  Password'.
               </div>
            </details>
            <details>
               <summary>Where do I go to find jobs?</summary>
               <div>
                  Head over to the 'How to Find Jobs' section under the 'How it
                  Works' page. Here you wll find all the necessary steps to find
                  a job on our platform.
               </div>
            </details>
            <details>
               <summary>bruh how do I post a job?</summary>
               <div>
                  Head over to the 'How to Submit Jobs' section under the 'How
                  it Works' page. Here you wll find all the necessary steps to
                  post a job on our platform.
               </div>
            </details>
            <details>
               <summary>Put your shit in here @NiggaFaisal</summary>
               <div>Some ass.</div>
            </details>
         </div>
      </div>
   )
}

export default FaqSection
