import React from 'react'
import '../App.css'
import FaqSection from '../Components/FaqSection'
import Footer from '../Components/Footer'
import PostJobCards from '../Components/PostJobCards'
import NavbarOther from '../Components/NavbarOther'
import HowTotabs from '../Components/HowToTabs'

function Faqs() {
   return (
      <div>
         <NavbarOther />
         <HowTotabs />
         <FaqSection />
         <Footer />
      </div>
   )
}

export default Faqs
