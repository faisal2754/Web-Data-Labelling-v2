import React, { useState } from 'react'
import { useEffect } from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import '../Styles/Slider.css'

const ImageSlider = ({ slides, indexCallback }) => {
   const [current, setCurrent] = useState(0)
   const length = slides.length

   useEffect(() => {
      indexCallback(current)
   }, [current])

   const nextSlide = () => {
      let num = current === length - 1 ? 0 : current + 1
      setCurrent(num)
   }

   const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1)
      indexCallback(current)
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
