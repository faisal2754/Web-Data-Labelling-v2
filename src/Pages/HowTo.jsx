import React from 'react'
import '../App.css'
import Cards from '../Components/Cards'
import HowToSection from '../Components/HowToSection'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import PostJobCards from '../Components/PostJobCards'
import NavbarOther from '../Components/NavbarOther'

function HowTo() {
   return (
      <div>
         <NavbarOther />
         <HowToSection />
         <PostJobCards />
         <Footer />
      </div>
   )
}

export default HowTo
