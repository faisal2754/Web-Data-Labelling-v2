import React from 'react'
import '../Styles/Footer.css'
import { Button } from './Button'
import { Link } from 'react-router-dom'

function Footer() {
   return (
      <div className="footer-container">
         <div class="footer-links">
            <div className="footer-link-wrapper">
               <div class="footer-link-items">
                  <h2>Main Pages</h2>
                  <Link to="/">Home</Link>
                  <Link to="/">Find Job</Link>
                  <Link to="/">How it Works</Link>
               </div>
            </div>
            <div className="footer-link-wrapper">
               <div class="footer-link-items">
                  <h2>Profile</h2>
                  <Link to="/">Login</Link>
                  <Link to="/">Sign Up</Link>
               </div>
               <div class="footer-link-items">
                  <h2>About Us</h2>
                  <Link to="/">Our Company</Link>
                  <Link to="/">Terms and Conditions</Link>
                  <Link to="/">Contact Us</Link>
               </div>
            </div>
         </div>
         <section class="social-media">
            <div class="social-media-wrap">
               <div class="footer-logo">
                  <Link to="/" className="social-logo">
                     <img src="./images/login_logo.png" alt="bug" height={60} />
                  </Link>
               </div>
               <small class="website-rights">LABEL.ml © 2021</small>
            </div>
         </section>
      </div>
   )
}

export default Footer
