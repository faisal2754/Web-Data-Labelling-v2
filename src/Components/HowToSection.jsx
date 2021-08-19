import React from 'react'
import { Button } from './Button'
import '../Styles/HowToSection.css'
import '../App.css'

function HowToSection() {
   return (
      <div className="hero-container">
         <video src="./videos/gradient.mp4" autoPlay loop muted />
         <h1>
            How to <br /> Submit a Job <br />
            
         </h1>
         <p>Here is a step-by-step guide to submitting a job on our Platform!</p>
         <div className="hero-btns">
            
            <Button
               className="btns"
               buttonStyle="btn-hover"
               buttonSize="btn--large"
               to="/"
            >
               Post a Job
            </Button>
         </div>
      </div>
   )
}

export default HowToSection
