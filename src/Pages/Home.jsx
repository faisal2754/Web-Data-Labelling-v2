import React from 'react'
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'
import { updateJWT } from '../redux/user'
import '../App.css'
import Cards from '../Components/Cards'
import HeroSection from '../Components/HeroSection'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Bruh from '../Components/Bruh'
import Testimonials from '../Components/Testimonials'

function Home() {

   const dispatch = useDispatch()

   const jwt = Cookies.get('jwt')
   if (jwt != null){
      dispatch(updateJWT(jwt))
   }

   return (
      <div>
         <Navbar />
         <HeroSection />
         <Cards />
         <Testimonials/>
         <Footer />
      </div>
   )
}

export default Home
