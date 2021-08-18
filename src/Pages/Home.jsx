import React from 'react'
import '../App.css'
import Cards from '../Components/Cards'
import HeroSection from '../Components/HeroSection'
import Footer from '../Components/Footer'

function Home() {
   return (
      <div>
         <HeroSection />
         <Cards />
         <Footer />
      </div>
   )
}

export default Home
