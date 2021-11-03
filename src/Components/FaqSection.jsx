import React from 'react'
import { Button } from './Button'
import '../Styles/faqSectionStyling.css'
import '../Styles/faq.css'
import '../App.css'

function FaqSection() {
   return (
      <div className="faq2-container">
         <div className="viewJob__header">
            <video src="./videos/gradient.mp4" autoPlay loop muted />

            <h1>FAQ</h1>
            <h2>Here are some answers to some commonly asked questions</h2>
         </div>

         <div className="faqSection">
            <details open>
               <summary>How do I sign up?</summary>
               <div className="answer">
                  Click on the 'Sign Up' button in the top right corner and fill
                  in the required information to sign up on our platform.
               </div>
            </details>
            <details>
               <summary>How can I login?</summary>
               <div className="answer">
                  After you have signed up, click on the 'Login' button in the
                  top right corner and enter your account's details to login and
                  start using the platform.
               </div>
            </details>
            <details>
               <summary>How can I edit my username?</summary>
               <div className="answer">
                  If you would like to change you username, you can do so on
                  your profile page. Simply enter your desired new username and
                  click 'Update username'.
               </div>
            </details>
            <details>
               <summary>How do I change my password?</summary>
               <div className="answer">
                  If your logged in, you can change your password by navigating
                  to your profile, entering a new password and clicking 'Update
                  Password'.
               </div>
            </details>
            <details>
               <summary>Where do I go to find jobs?</summary>
               <div className="answer">
                  Head over to the 'How to Find Jobs' section under the 'How it
                  Works' page. Here you will find all the necessary steps to
                  find a job on our platform.
               </div>
            </details>
            <details>
               <summary>How do I post a job?</summary>
               <div className="answer">
                  Head over to the 'How to Submit Jobs' section under the 'How
                  it Works' page. Here you will find all the necessary steps to
                  post a job on our platform.
               </div>
            </details>
            <details>
               <summary>
                  How should I select the number of partitions for my job?
               </summary>
               <div className="answer">
                  Increasing the number of partitions will reduce the amount of
                  work required by each labeller to complete the job. Adding
                  more partitions can allow a larger variety of people to label
                  the job.
               </div>
            </details>
            <details>
               <summary>
                  How are the number of labellers required to label each image
                  in a partition calculated?
               </summary>
               <div className="answer">
                  The number of labellers is equal to the smallest odd integer
                  greater than the number of labels.
               </div>
            </details>
            <details>
               <summary>
                  How is the final label for each image in the dataset
                  calculated?
               </summary>
               <div className="answer">
                  The final label assigned to an image is the mode of all the
                  labels provided by labellers.
               </div>
            </details>
            <details>
               <summary>How does the job labelling process work?</summary>
               <div className="answer">
                  <div className="faq__steps">
                     <b>Step 1:</b> Create a job and upload your images and
                     labels. Select the number of partitions you would like to
                     split the job into.
                  </div>
                  <div className="faq__image">
                     <img src="./images/Infographics/step1.jpg" alt="" />
                  </div>
               </div>
               <div className="answer">
                  <div className="faq__steps">
                     <b>Step 2:</b> The job's images will be split into the
                     desired number of partitions.
                  </div>
                  <div className="faq__image">
                     <img src="./images/Infographics/step2.png" alt="" />
                  </div>
               </div>
               <div className="answer">
                  <div className="faq__steps">
                     <b>Step 3:</b> The number of labellers required to label
                     each image in a partition is calculated.
                  </div>
                  <div className="faq__image">
                     <img src="./images/Infographics/step3.jpg" alt="" />
                  </div>
               </div>
               <div className="answer">
                  <div className="faq__steps">
                     <b>Step 4:</b> The final label for each image in the
                     dataset is calculated.
                  </div>
                  <div className="faq__image">
                     <img src="./images/Infographics/step4.jpg" alt="" />
                  </div>
               </div>
               <div className="answer">
                  <div className="faq__steps">
                     <b>Step 5:</b> After the labelling process has been
                     completed, you are able to find the results on the 'Job
                     Results' page.
                  </div>
                  <div className="faq__image">
                     <img src="./images/Infographics/step5.png" alt="" />
                  </div>
               </div>
               <div className="answer">
                  <div className="faq__steps">
                     <b>Step 6:</b> The results of the labelling process are
                     available for download on the 'Job Results' page.
                  </div>
                  <div className="faq__image">
                     <img src="./images/Infographics/step6.jpg" alt="" />
                  </div>
               </div>
            </details>
         </div>
      </div>
   )
}

export default FaqSection
