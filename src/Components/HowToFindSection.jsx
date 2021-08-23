import React from 'react'
import { Button } from './Button'
import '../Styles/HowToSection.css'
import '../App.css'

function HowToFindSection() {
   return (
      <div className="hero-container">
         <video src="./videos/gradient.mp4" autoPlay loop muted />
         <h1>
            How to <br /> Find and Label a Job! <br />
         </h1>
         <p>
            Here is a step-by-step guide on how to find a job and complete it on
            our Platform!
         </p>
         <div className="hero-btns">
            <Button
               className="btns"
               buttonStyle="btn-hover"
               buttonSize="btn--large"
               to="/view-job"
            >
               Find a Job
            </Button>
         </div>
      </div>
   )
}

export default HowToFindSection
