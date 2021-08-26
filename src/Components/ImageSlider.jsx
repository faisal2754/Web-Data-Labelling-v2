import React, { useState } from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import '../Styles/Slider.css'

const ImageSlider = ({ slides }) => {
   const [current, setCurrent] = useState(0)
   const length = slides.length
   console.log(length)

   const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1)
   }

   const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1)
   }

   if (!Array.isArray(slides) || slides.length <= 0) {
      return null
   }

   return (
      <section className="label-slider">
         <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
         <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
         {slides.map((slide, index) => {
            return (
               <div
                  className={
                     index === current ? 'label-slide active' : 'label-slide'
                  }
                  key={index}
               >
                  {index === current && (
                     <img
                        src={slide.images}
                        key={slide.image_ids}
                        id={slide.image_ids}
                        alt="travel image"
                        className="image"
                     />
                  )}
               </div>
            )
         })}
      </section>
   )
}

export default ImageSlider
