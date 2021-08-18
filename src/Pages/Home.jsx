import React from 'react'
import '../App.css'
import Cards from '../Components/Cards'
import HeroSection from '../Components/HeroSection'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

function Home() {
   return (
      <div>
         <Navbar />
         <HeroSection />
         <Cards />
         <Footer />
      </div>
   )
}

export default Home
