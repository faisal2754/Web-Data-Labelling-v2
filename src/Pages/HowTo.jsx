import React from 'react'
import '../App.css'
import HowToSection from '../Components/HowToSection'
import Footer from '../Components/Footer'
import PostJobCards from '../Components/PostJobCards'
import NavbarOther from '../Components/NavbarOther'
import HowTotabs from '../Components/HowToTabs'

function HowTo() {
   return (
      <div>
         <NavbarOther />
         <HowTotabs />
         <HowToSection />
         <PostJobCards />
         <Footer />
      </div>
   )
}

export default HowTo
