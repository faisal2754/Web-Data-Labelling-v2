import React from 'react'
import { Button } from './Button'
import '../Styles/HowToSection.css'
import '../Styles/faq.css'
import '../App.css'
import Faq from 'react-faq-component'
import $ from 'jquery'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import CardItem from './CardItem'
import '../Styles/FaqCards.css'

function FaqSection() {
   return (
      <div className="faq">
         <div className="viewJob__header">
            <video src="./videos/gradient.mp4" autoPlay loop muted />

            <h1>FAQ</h1>
            <h2>Here are some answers to some commonly asked questions</h2>
         </div>

         <div className="cards">
            <div className="cards__container">
               <div className="cards__wrapper">
                  <ul className="cards__items">
                     <CardItem
                        src="./images/faq/q1.gif"
                        text="Click on the 'Sign Up' button in the top right corner and fill in the required information to sign up on our platform."
                        credits="How do I sign up?"
                        path="/faqs"
                     />
                     <CardItem
                        src="./images/faq/q2.gif"
                        text="After you have signed up, click on the 'Login' button in the top right corner and enter your accounts correct details to login to start using the platform."
                        credits="How can I login?"
                        path="/faqs"
                     />
                     <CardItem
                        src="./images/faq/q3.gif"
                        text="If you would like to change you username, you can do so on your profile page. Simple enter your desired new username and click 'Update username'."
                        credits="Where do I edit my username from?"
                        path="/faqs"
                     />
                  </ul>
               </div>
            </div>

            <div className="cards__container">
               <div className="cards__wrapper">
                  <ul className="cards__items">
                     <CardItem
                        src="./images/faq/q4.gif"
                        text="After you have logged in and you would like to change your password for security purposes, you can do so by navigating to your profile and entering a new password and clikcing 'Update Password'."
                        credits="How do I change my password?"
                        path="/faqs"
                     />
                     <CardItem
                        src="./images/faq/q5.gif"
                        text="Head over to the 'How to Find Jobs' section under the 'How it Works' page. Here you wll find all the necessary steps to find a job on our platform."
                        credits="Where do I go to find jobs?"
                        path="/faqs"
                     />
                     <CardItem
                        src="./images/faq/q6.gif"
                        text="Head over to the 'How to Submit Jobs' section under the 'How it Works' page. Here you wll find all the necessary steps to post a job on our platform."
                        credits="Bruh how do I post a job?"
                        path="/faqs"
                     />
                  </ul>
               </div>
            </div>
         </div>
      </div>
   )
}

export default FaqSection
