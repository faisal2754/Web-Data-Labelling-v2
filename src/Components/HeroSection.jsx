import React from 'react'
import { Button } from './Button'
import '../Styles/HeroSection.css'
import '../App.css'
import { useSelector } from 'react-redux'

function HeroSection() {
   const jwt = useSelector((state) => state.user.jwt)
   let isJwt = false;
   if(jwt != ''){
      isJwt = true;
   }

   return (
      <div className="hero-container">
         <video src="./videos/header-hero.mp4" autoPlay loop muted />
         <h1>
            Crowd Sourced <br /> Data Labelling <br />
            Market Place for ML
         </h1>
         <p>Sign up now to start your labelling journey</p>
         {isJwt ? <div></div> :
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
               to="/view-job"
            >
               Find Job
            </Button>
         </div> 
         }
      </div>
   )
}

export default HeroSection
