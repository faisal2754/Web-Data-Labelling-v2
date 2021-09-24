import React, { useState } from 'react'
import Footer from '../Components/Footer'
import ImageSlider from '../Components/ImageSlider'
import NavbarOther from '../Components/NavbarOther'
import '../Styles/LabelJob.css'
import { GET_LABEL_JOB_INFO, GET_SAVED_STATE } from '../graphql/queries.js'
import { SAVE_STATE } from '../graphql/mutations'
import { useQuery, useMutation } from '@apollo/client'
import { Button } from '../Components/Button'
import { useEffect } from 'react'
import { current } from '@reduxjs/toolkit'
import { ToastContainer, toast } from 'react-toastify'
import { Link, Redirect } from 'react-router-dom'

function LabelJob(props) {
   const [index, setIndex] = useState()
   const [assignedLabels, setAssignedLabels] = useState({})
   const [slides, setSlides] = useState([])
   const { currentID } = props.location

   const checkRadioButton = () => {
      if (slides[index]) {
         if (slides[index].image_id in assignedLabels) {
            console.log(assignedLabels[slides[index].image_id])
            document.getElementById(
               assignedLabels[slides[index].image_id]
            ).checked = true
         }
      }
   }

   let is_complete = false
   const checkCompletion = () => {
      if (
         Object.keys(assignedLabels).length + 1 >= slides.length &&
         Object.keys(assignedLabels).length != 0
      ) {
         document.getElementById('submitButton').style.display = 'inline-block'
         is_complete = true
      } else {
         document.getElementById('submitButton').style.display = 'none'
      }
   }

   useEffect(() => {
      checkRadioButton()
   }, [index])

   const { loading, error, data } = useQuery(GET_LABEL_JOB_INFO, {
      variables: {
         job_id: currentID
      }
   })

   const partition_id = data?.labelJobInfo?.partition_id
   const { data: restoredData } = useQuery(GET_SAVED_STATE, {
      skip: !partition_id,
      variables: {
         partition_id
      }
   })

   const [
      submitJob,
      { data: submitJobData, loading: submitJobLoading, error: submitJobError }
   ] = useMutation(SAVE_STATE)

   useEffect(() => {
      if (restoredData) {
         let temp = {}
         Object.assign(temp, assignedLabels)

         for (let i = 0; i < restoredData.labelJobState.labels.length; i++) {
            const imageId = restoredData.labelJobState.image_ids[i]
            temp[imageId] = restoredData.labelJobState.labels[i]
         }
         setAssignedLabels(temp)

         let tempSlides = []
         for (let i = 0; i < images.length; i++) {
            tempSlides.push({ images: images[i], image_id: image_ids[i] })
         }
         setSlides(tempSlides)
         checkRadioButton()
         checkCompletion()
      }
   }, [restoredData, data])

   checkRadioButton()

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

   const onChangeSlide = (index) => {
      setIndex(index)

      for (let i = 0; i < labels.length; i++) {
         document.getElementById(labels[i]).checked = false
      }
      document.getElementById('other').checked = false
   }

   const assignLabel = (value) => {
      let temp = {}
      Object.assign(temp, assignedLabels)
      const imageId = slides[index].image_id
      temp[imageId] = value
      setAssignedLabels(temp)
      checkCompletion()
   }

   const saveState = (buttonID) => {
      submitJob({
         variables: {
            image_ids: Object.keys(assignedLabels).map((id) => Number(id)),
            labels: Object.values(assignedLabels),
            partition_id: partition_id,
            is_complete: is_complete
         }
      })

      if (buttonID == 'submitButton') {
         return <Redirect to="/dashboard/accepted-jobs" />
      } else {
         toast.success('Your labelling progress has been saved.')
      }
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
               <div className="label-save">
                  <div className="label-section">
                     <h2>Labels</h2>
                     <div className="labels-container">
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
                              id="other"
                              type="radio"
                              value="other"
                              name="label"
                              onClick={(e) => assignLabel(e.target.value)}
                           />{' '}
                           Other
                        </div>
                     </div>
                  </div>
                  <div className="submitSection">
                     <Button
                        id="saveButton"
                        className="btns"
                        buttonStyle="btn--outline"
                        buttonSize="btn--large"
                        onClick={(e) => saveState(e.target.id)}
                     >
                        Save
                     </Button>
                     <Button
                        id="submitButton"
                        className="btns"
                        buttonStyle="btn--primary"
                        buttonSize="btn--large"
                        onClick={(e) => saveState(e.target.id)}
                     >
                        Submit
                     </Button>
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </div>
   )
}

export default LabelJob
