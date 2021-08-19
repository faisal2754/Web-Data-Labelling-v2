import React from 'react'
import { Button } from './Button'
import '../Styles/HeroSection.css'
import '../App.css'

function HeroSection() {
   return (
      <div className="hero-container">
         <video src="./videos/PurpleBG.mp4" autoPlay loop muted />
         <h1>
            Crowd Sourced <br /> Data Labelling <br />
            Market Place for ML
         </h1>
         <p>Sign up now to start your labelling journey</p>
         <div className="hero-btns">
            <Button
               className="btns"
               buttonStyle="btn--outline"
               buttonSize="btn--large"
               to="/register"
            >
               Sign Up
            </Button>
            <Button
               className="btns"
               buttonStyle="btn-hover"
               buttonSize="btn--large"
               to="/"
            >
               Find Job
            </Button>
         </div>
      </div>
   )
}

export default HeroSection
