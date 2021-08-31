import React, { useState } from 'react'
import Footer from '../Components/Footer'
import ImageSlider from '../Components/ImageSlider'
import NavbarOther from '../Components/NavbarOther'
import '../Styles/LabelJob.css'
import { GET_LABEL_JOB_INFO } from '../graphql/queries.js'
import { useQuery } from '@apollo/client'
import { nanoid } from 'nanoid'
import { Button } from '../Components/Button'
import { useEffect } from 'react'

function LabelJob() {
   const [index, setIndex] = useState()
   const [assignedLabels, setAssignedLabels] = useState({})

   let slides = []

   const checkRadioButton = () => {
      if (slides[index]) {
         if (slides[index].image_id in assignedLabels) {
            document.getElementById(
               assignedLabels[slides[index].image_id]
            ).checked = true
         }
      }
   }

   useEffect(() => {
      checkRadioButton()
   }, [index])

   const { loading, error, data } = useQuery(GET_LABEL_JOB_INFO, {
      variables: {
         job_id: 1
      }
   })
   if (loading) return 'Loading...'
   if (error) return `Error! ${error.message}`

   let images = []
   let labels = []
   let image_ids = []
   let title = ''

   if (data) {
      images = data.labelJobInfo.images
      labels = data.labelJobInfo.labels
      image_ids = data.labelJobInfo.image_ids
      title = data.labelJobInfo.title
   }

   for (let i = 0; i < images.length; i++) {
      slides.push({ images: images[i], image_id: image_ids[i] })
   }

   const onChangeSlide = (index) => {
      setIndex(index)

      for (let i = 0; i < labels.length; i++) {
         document.getElementById(labels[i]).checked = false
      }
   }

   const assignLabel = (value) => {
      let temp = {}
      Object.assign(temp, assignedLabels)
      const imageId = slides[index].image_id
      temp[imageId] = value
      setAssignedLabels(temp)
   }

   console.log(assignedLabels)

   const saveState = () => {
      const imageIds = Object.keys(assignedLabels)
      const labels = Object.values(assignedLabels)

      console.log(imageIds)
      console.log(labels)
   }

   return (
      <div>
         <NavbarOther />
         <div className="label-job-page">
            <div className="label-job-form">
               <div className="image-section">
                  <h2>{title}</h2>
                  <div className="image-slider-container">
                     <ImageSlider
                        slides={slides}
                        indexCallback={onChangeSlide}
                     />
                  </div>
               </div>
               <div className="label-section">
                  <div className="labels-container">
                     <h2>Labels</h2>
                     <div className="radio-toolbar">
                        {labels.map((label) => (
                           <>
                              <input
                                 id={label}
                                 type="radio"
                                 value={label}
                                 // key={nanoid()}
                                 name="label"
                                 onClick={(e) => assignLabel(e.target.value)}
                              />{' '}
                              <label>{label}</label>
                           </>
                        ))}
                        <input
                           type="radio"
                           value="other"
                           name="label"
                           onClick={(e) => assignLabel(e.target.value)}
                        />{' '}
                        Other
                     </div>
                  </div>
               </div>
            </div>
            <Button
               className="btns"
               buttonStyle="btn--outline"
               buttonSize="btn--large"
               onClick={saveState}
            >
               Save
            </Button>
         </div>
         <Footer />
      </div>
   )
}

export default LabelJob
