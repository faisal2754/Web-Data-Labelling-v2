import { useState, useEffect } from 'react'
import React from 'react'
import '../Styles/CreateJob.css'
import TextField from '@material-ui/core/TextField'
import { nanoid } from 'nanoid'
import ImageUploading from 'react-images-uploading'
// import { Redirect } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { GET_CREATED_JOBS } from '../graphql/queries'
import { useQuery, useLazyQuery } from '@apollo/client'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import FormData from 'form-data'
import axios from 'axios'

const CreateJob = () => {
   const [labels, setLabels] = useState([])
   const [currentTotal, setCurrentTotal] = useState(0)
   const [images, setImages] = useState([])
   const onChange = (imageList, addUpdateIndex) => {
      setImages(imageList)
   }

   useEffect(() => {
      document.querySelector('#totalCredits').value = 0
   }, [])
   const history = useHistory()

   const Calculate = (e) => {
      e.preventDefault()
      let currentCredits = document.querySelector('#credits').value
      // let currentLabellers = document.querySelector('#numLabellers').value
      if (currentCredits === 0) return
      if (currentCredits <= 0 || currentCredits === '') {
         toast.error('invalid number of credits')
         toast.clearWaitingQueue()
         return
      }
      let newTotal = currentCredits
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
               //TODO Dont allow more partitions than images

               if (
                  images.length <
                  parseInt(document.querySelector('#imgPerSection').value)
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
               if (labels.map((label) => label.label).length === 0) {
                  toast.error('Please enter at least one label')
                  toast.clearWaitingQueue()
                  return
               }
               if (
                  document.querySelector('#imgPerSection').value === 0 ||
                  document.querySelector('#imgPerSection').value === ''
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

                        credits: parseInt(currentTotal),
                        num_partitions: parseInt(
                           document.querySelector('#imgPerSection').value
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
                  .then(() => {
                     toast.update(id, {
                        render: 'Your Job was successfully created',
                        type: 'success',
                        autoClose: 3000,
                        isLoading: false
                     })
                     toast.clearWaitingQueue()
                     history.push('/dashboard/created-jobs')

                     // window.location.reload();
                  })
                  .catch(() => {
                     toast.update(id, {
                        render: 'Your Job was not Created',
                        type: 'error',
                        autoClose: 3000,
                        isLoading: false
                     })
                     toast.clearWaitingQueue()
                  })
            }}
         >
            <div className="createJob_mainForm">
               <div className="createJob_jobInfo">
                  <h3 style={{ padding: '1rem' }}>Job Info:</h3>
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
                        className="btn-hover"
                        type="button"
                        onClick={() => {
                           if (labels.length > 4) return
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

                           <h3 style={{ textAlign: 'center' }}>
                              Total Images : {imageList.length}
                           </h3>
                           <div className="createJob_imagePrev">
                              {imageList.map((image, index) => (
                                 <div key={index} className="image-item">
                                    <img
                                       src={image.data_url}
                                       alt=""
                                       width="100"
                                    />
                                    {/* <div className="image-item__btn-wrapper">
                                       <button
                                          className="btn-hover"
                                          onClick={(e) => {
                                             onImageUpdate(index)
                                             e.preventDefault()
                                          }}
                                       >
                                          Update
                                       </button>
                                       <button
                                          className="btn-hover"
                                          onClick={(e) => {
                                             onImageRemove(index)
                                             e.preventDefault()
                                          }}
                                       >
                                          Remove
                                       </button>
                                    </div>  */}
                                 </div>
                              ))}
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
                     id="imgPerSection"
                     label="Number of Partitions"
                     type="number"
                     variant="outlined"
                  />
                  <h2 id="totalCredits">Total: {currentTotal}</h2>
                  <button className="btn-hover" onClick={Calculate}>
                     Calculate
                  </button>
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
