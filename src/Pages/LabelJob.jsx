import React, { useState } from 'react'
import Footer from '../Components/Footer'
import ImageSlider from '../Components/ImageSlider'
import NavbarOther from '../Components/NavbarOther'
import '../Styles/LabelJob.css'
import { GET_LABEL_JOB_INFO } from '../graphql/queries.js'
import { useQuery } from '@apollo/client'
import { nanoid } from 'nanoid'
import { Button } from '../Components/Button'

function LabelJob() {
   const [index, setIndex] = useState()
   const [assignedLabels, setAssignedLabels] = useState()

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

   let slides = []
   for (let i = 0; i < images.length; i++) {
      slides.push({ images: images[i], image_ids: image_ids[i] })
   }

   const onChangeSlide = (index) => {
      setIndex(index)
   }

   const assignLabel = (value) => {
      let assignedLabelsCopy = assignedLabels.slice()
      assignedLabelsCopy[index] = value
      setAssignedLabels(assignedLabelsCopy)
      console.log('Image No. ' + index + ' = ' + value)
      console.log(assignedLabels)
   }

   let finalLabels = []
   const setFinalLabels = () => {
      for (let j = 0; j < images.length; j++) {
         if (typeof assignedLabels[j] === 'undefined') {
            finalLabels.push({
               image_ids: image_ids[j],
               labels: null
            })
         } else {
            finalLabels.push({
               image_ids: image_ids[j],
               labels: assignedLabels[j]
            })
         }
      }
      console.log(finalLabels)
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
                                 type="radio"
                                 value={label}
                                 key={nanoid()}
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
               onClick={setFinalLabels}
            />
            Save
         </div>
         <Footer />
      </div>
   )
}

export default LabelJob
