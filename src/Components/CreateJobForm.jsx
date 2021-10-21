import { useState, useEffect } from 'react'
import React from 'react'
import { GET_ME } from '../graphql/queries'
import '../Styles/CreateJob.css'
import TextField from '@material-ui/core/TextField'
import { nanoid } from 'nanoid'
import ImageUploading from 'react-images-uploading'
import ReactTooltip from 'react-tooltip'
import { useHistory } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import FormData from 'form-data'
import axios from 'axios'

const CreateJob = () => {
   const [labels, setLabels] = useState([])
   // eslint-disable-next-line no-unused-vars
   const { loading, error, data } = useQuery(GET_ME)
   const [currentTotal, setCurrentTotal] = useState(0)
   const [images, setImages] = useState([])
   const onChange = (imageList, addUpdateIndex) => {
      setImages(imageList)
   }
   const isBlank = (element) => {
      return element == ''
   }
   function checkIfDuplicateExists(w) {
      return new Set(w).size !== w.length
   }

   if (data) {
      console.log(data)
   }
   useEffect(() => {
      document.querySelector('#totalCredits').value = 0
   }, [])
   const history = useHistory()

   const Calculate = (e) => {
      e.preventDefault()
      let currentCredits = document.querySelector('#credits').value
      let numLabels = labels.map((label) => label.label).length
      let currentPartitions = document.querySelector('#partitions').value
      if (currentCredits === 0) return
      if (currentCredits <= 0 || currentCredits === '') {
         toast.error('invalid number of credits')
         toast.clearWaitingQueue()
         return
      }

      // const maxNumLabellers = numLabels % 2 === 0 ? numLabels + 1 : numLabels + 2
      let newTotal = currentCredits * currentPartitions
      if (data.me.balance < newTotal) {
         toast.error('You do not have sufficent credits to create this job')
         toast.clearWaitingQueue()
         return
      }
      setCurrentTotal(newTotal)
   }
   return (
      <div className="createJob_page">
         <h1>Create your Job</h1>
         <form
            encType="multipart/form-data"
            onSubmit={async (e) => {
               e.preventDefault()
               Calculate(e)
               const form = new FormData()
               if (
                  images.length <
                  parseInt(document.querySelector('#partitions').value)
               ) {
                  toast.error(
                     'Invalid number of Partitions, make sure partitions does not exceed images'
                  )
                  return
               }
               //! Begin Error checking

               if (document.querySelector('#title').value === '') {
                  toast.error('Please enter a valid job title')
                  toast.clearWaitingQueue()
                  return
               }
               if (document.querySelector('#description').value === '') {
                  toast.error('Please enter a valid job description')
                  toast.clearWaitingQueue()
                  return
               }
               if (data.me.balance < currentTotal) {
                  toast.error(
                     'You do not have sufficent credits to create this job'
                  )
                  toast.clearWaitingQueue()
                  return
               }
               if (labels.map((label) => label.label).length === 0) {
                  toast.error('Please enter at least one label')
                  toast.clearWaitingQueue()
                  return
               }
               if (labels.map((label) => label.label).some(isBlank)) {
                  toast.error('Please make sure none of your labels are blank')
                  toast.clearWaitingQueue()
                  return
               }
               if (checkIfDuplicateExists(labels.map((label) => label.label))) {
                  toast.error('No Duplicate labels allowed')
                  toast.clearWaitingQueue()
                  return
               }
               if (
                  document.querySelector('#partitions').value === 0 ||
                  document.querySelector('#partitions').value === ''
               ) {
                  toast.error('Invalid number of partitions')
                  toast.clearWaitingQueue()
                  return
               }
               //! End Error Checking
               form.append(
                  'operations',
                  JSON.stringify({
                     query: 'mutation ($files: [Upload], $title: String!, $description: String!, $credits: Int!, $num_partitions: Int!, $labels: [String]!){\n  createJob (files: $files, title: $title, description: $description, credits: $credits, num_partitions: $num_partitions, labels: $labels){\n    job_id\n  }\n}',
                     variables: {
                        files: [],
                        title: document.querySelector('#title').value,
                        description:
                           document.querySelector('#description').value,

                        credits: parseInt(
                           document.querySelector('#credits').value
                        ),
                        num_partitions: parseInt(
                           document.querySelector('#partitions').value
                        ),
                        labels: labels.map((label) => label.label)
                     }
                  })
               )

               let variables = {}
               for (let i = 0; i < images.length; i++) {
                  variables[i] = []
                  variables[i].push(`variables.files.${i}`)
               }
               form.append('map', JSON.stringify(variables))

               for (let i = 0; i < images.length; i++) {
                  form.append(i.toString(), images[i].file)
               }
               const id = toast.loading('Please wait...')
               axios
                  .post(
                     'https://data-labelling-server.herokuapp.com/graphql',
                     form,
                     {
                        headers: {
                           Authorization: 'Bearer ' + Cookies.get('jwt') || null
                        }
                     }
                  )
                  .then((res) => {
                     console.log(res.data)
                     if (!res.data.errors) {
                        toast.update(id, {
                           render: 'Your Job was successfully created',
                           type: 'success',
                           autoClose: 3000,
                           isLoading: false
                        })
                        toast.clearWaitingQueue()
                        history.push('/dashboard/created-jobs')
                     } else {
                        toast.update(id, {
                           render: 'Your Job was not Created, Please try again',
                           type: 'error',
                           autoClose: 3000,
                           isLoading: false
                        })
                        toast.clearWaitingQueue()
                     }
                  })
                  .catch(() => {
                     toast.update(id, {
                        render: 'Your Job was not Created, Please try again',
                        type: 'error',
                        autoClose: 3000,
                        isLoading: false
                     })
                  })
            }}
         >
            <div className="createJob_mainForm">
               <div className="createJob_jobInfo">
                  <h3>Job Info:</h3>
                  <div className="textField">
                     <TextField
                        id="title"
                        fullWidth
                        label="Title"
                        variant="outlined"
                     />
                  </div>
                  <div className="textField">
                     <TextField
                        id="description"
                        label="Description"
                        fullWidth
                        multiline
                        rows={4}
                        defaultValue=""
                        variant="outlined"
                     />{' '}
                  </div>
                  {({ imageList, dragProps, isDragging }) => (
                     <div {...dragProps}>
                        {isDragging ? 'Drop here please' : 'Upload space'}
                        {imageList.map((image, index) => (
                           <img key={index} alt="img" src={image.data_url} />
                        ))}
                     </div>
                  )}

                  {({ imageList, onImageUpload, onImageRemoveAll, errors }) =>
                     errors && (
                        <div>
                           {errors.maxNumber && (
                              <span>
                                 Number of selected images exceed maxNumber
                              </span>
                           )}
                           {errors.acceptType && (
                              <span>Your selected file type is not allow</span>
                           )}
                           {errors.maxFileSize && (
                              <span>Selected file size exceed maxFileSize</span>
                           )}
                           {errors.resolution && (
                              <span>
                                 Selected file is not match your desired
                                 resolution
                              </span>
                           )}
                        </div>
                     )
                  }
                  <div className="labelSection">
                     <button
                        //
                        data-tip="A default 'other' label will be added to your chosen labels"
                        className="btn-hover"
                        type="button"
                        onClick={() => {
                           if (labels.length > 4) {
                              toast.warning(
                                 'You can not have more than 5 labels'
                              )
                              return
                           }
                           setLabels((currentLabels) => [
                              ...currentLabels,
                              {
                                 id: nanoid(),
                                 label: ''
                              }
                           ])
                        }}
                     >
                        Add Label
                     </button>
                     {labels.map((p) => {
                        return (
                           <div key={p.id}>
                              <TextField
                                 onChange={(e) => {
                                    const label = e.target.value
                                    setLabels((currentLabels) =>
                                       currentLabels.map((x) =>
                                          x.id === p.id
                                             ? {
                                                  ...x,
                                                  label
                                               }
                                             : x
                                       )
                                    )
                                 }}
                                 placeholder="Please enter a Label"
                                 value={p.label}
                              />
                              <button
                                 className="btn-hover"
                                 style={{
                                    width: '10%',
                                    height: '100%',
                                    margin: '10px '
                                 }}
                                 onClick={() => {
                                    setLabels((currentLabels) =>
                                       currentLabels.filter(
                                          (x) => x.id !== p.id
                                       )
                                    )
                                 }}
                              >
                                 x
                              </button>
                           </div>
                        )
                     })}
                  </div>
               </div>
               <div className="createJob_imageSection">
                  <h3>Please upload your images here:</h3>

                  <ImageUploading
                     multiple
                     value={images}
                     onChange={onChange}
                     dataURLKey="data_url"
                  >
                     {({
                        imageList,
                        onImageUpload,
                        onImageRemoveAll,
                        onImageUpdate,
                        onImageRemove,
                        isDragging,
                        dragProps
                     }) => (
                        // write your building UI
                        <div className="upload__image-wrapper">
                           <h2>Total Images : {imageList.length}</h2>
                           <div className="createJob_imagePrev">
                              {imageList.slice(0, 8).map(
                                 (
                                    image,
                                    index //set the maximum images you want in the preview to the upper bounds of slice
                                 ) => (
                                    <div key={index} className="image-item">
                                       <img
                                          src={image.data_url}
                                          alt=""
                                          width="100"
                                          height="70"
                                       />
                                    </div>
                                 )
                              )}
                           </div>
                           <div className="upload__button-section">
                              <button
                                 className="btn-hover"
                                 style={isDragging ? { color: 'red' } : null}
                                 onClick={(e) => {
                                    e.preventDefault()
                                    onImageUpload()
                                 }}
                                 {...dragProps}
                              >
                                 Click or Drop here
                              </button>
                              &nbsp;
                              <button
                                 className="btn-hover"
                                 onClick={(e) => {
                                    onImageRemoveAll()
                                    e.preventDefault()
                                 }}
                              >
                                 Remove all images
                              </button>
                           </div>
                        </div>
                     )}
                  </ImageUploading>
               </div>

               <div className="createJob_credit-section">
                  <h3>Credits Info:</h3>

                  <TextField
                     id="credits"
                     label="Credits"
                     type="number"
                     variant="outlined"
                  />

                  <TextField
                     id="partitions"
                     label="Number of Partitions"
                     type="number"
                     variant="outlined"
                  />
                  <h2 id="totalCredits">Total: {currentTotal}</h2>
                  <button
                     data-place="bottom"
                     data-multiline="true"
                     data-tip="This will calculate the total credits spent for this job.<br/>Each partition will pay out Credits/Number of Partitions<br/>"
                     className="btn-hover"
                     onClick={Calculate}
                  >
                     Calculate
                  </button>
                  <ReactTooltip effect="solid" />
               </div>
            </div>
            <div className="createJob_submitSection">
               <button
                  className="btn-hover"
                  variant="contained"
                  color="default"
                  type="submit"
               >
                  Submit Job
               </button>
            </div>
         </form>
      </div>
   )
}

export default CreateJob
