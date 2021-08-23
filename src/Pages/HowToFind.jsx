import React from 'react'
import '../App.css'
import HowToFindSection from '../Components/HowToFindSection'
import Footer from '../Components/Footer'
import FindJobCards from '../Components/FindJobCards'
import NavbarOther from '../Components/NavbarOther'
import HowTotabs from '../Components/HowToTabs'

function HowToFind() {
   return (
      <div>
         <NavbarOther />
         <HowTotabs />
         <HowToFindSection />
         <FindJobCards />
         <Footer />
      </div>
   )
}

export default HowToFind
