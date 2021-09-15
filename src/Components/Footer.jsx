import React from 'react'
import '../Styles/Footer.css'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useSelector } from 'react-redux'

function Footer() {
   const jwt = useSelector((state) => state.user.jwt)
   let isJwt = false
   if (jwt != '') {
      isJwt = true
   }

   return (
      <div className="footer-container">
         <div className="footer-links">
            <div className="footer-link-wrapper">
               <div className="footer-link-items">
                  <h2>Main Pages</h2>
                  <Link to="/">Home</Link>
                  <Link to="/view-job">Find Job</Link>
                  <Link to="/how-to">How it Works</Link>
               </div>
            </div>
            <div className="footer-link-wrapper">
               {isJwt ? (
                  <div></div>
               ) : (
                  <div className="footer-link-items">
                     <h2>Profile</h2>
                     <Link to="/login">Login</Link>
                     <Link to="/register">Sign Up</Link>
                  </div>
               )}
               {!isJwt ? (
                  <div></div>
               ) : (
                  <div className="footer-link-items">
                     <h2>Profile</h2>
                     <Link to="/create-job">Create Job</Link>
                     <Link to="/dashboard/created-jobs">My Jobs</Link>
                     <Link to="/dashboard/accepted-jobs">Accepted Jobs</Link>
                     <Link to="/dashboard/profile">Edit Profile</Link>
                  </div>
               )}
               <div className="footer-link-items">
                  <h2>About Us</h2>
                  <Link to="/">Our Company</Link>
                  <Link to="/">Terms and Conditions</Link>
               </div>
            </div>
         </div>
         <section className="social-media">
            <div className="social-media-wrap">
               <div className="footer-logo">
                  <Link to="/" className="social-logo">
                     <img src="./images/login_logo.png" alt="bug" height={60} />
                  </Link>
               </div>
               <small className="website-rights">LABEL.ml © 2021</small>
            </div>
         </section>
      </div>
   )
}

export default Footer
