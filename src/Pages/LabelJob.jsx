import React from 'react'
import Footer from '../Components/Footer'
import ImageSlider from '../Components/ImageSlider'
import NavbarOther from '../Components/NavbarOther'
import { SliderData } from '../Components/SliderData'
import '../Styles/LabelJob.css'

function LabelJob() {
   return (
      <div>
         <NavbarOther />
         <div className="label-job-page">
            <div className="label-job-form">
               <div className="image-section">
                  <h2>Images 0/0</h2>
                  <div className="image-slider-container">
                     <ImageSlider slides={SliderData} />
                  </div>
               </div>
               <div className="label-section">
                  <div className="labels-container">
                     <h2>Labels</h2>
                     <div className="radio-toolbar">
                        <input type="radio" value="label1" name="label" /> Label
                        1
                        <input type="radio" value="label2" name="label" />
                        Label 2
                        <input type="radio" value="Other" name="label" /> Other
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </div>
   )
}

export default LabelJob
