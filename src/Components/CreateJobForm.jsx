import { useState, useEffect } from 'react'
import React from 'react'
import { GET_ME } from '../graphql/queries'
import '../Styles/CreateJob.css'
import TextField from '@material-ui/core/TextField'
import { Redirect } from 'react-router-dom'
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
      return element === ''
   }
   const isother = (element) => {
      element=element.toLowerCase();
      // console.log(element)
      return element === 'other'
   }
   const checkLength = (element) => {
      return element.length >= 20
   }
   function checkIfDuplicateExists(w) {
      return new Set(w).size !== w.length
   }

   // const customId = "custom-id-invalCredits";
   const history = useHistory()

   const cook = Cookies.get('jwt')
   if (cook == null) {
      console.log('boy')
      return <Redirect to="/" />
   }

   const Calculate = (e) => {
      e.preventDefault()
      let currentCredits = document.querySelector('#credits').value
      // let numLabels = labels.map((label) => label.label).length
      let currentPartitions = document.querySelector('#partitions').value
      if (currentCredits === 0) return
      if (currentCredits <= 0 || currentCredits === '') {
         toast.error('invalid number of credits', {
            toastId: 'invalCredit1'
         })
         // toast.error('invalid number of credits')
         // toast.clearWaitingQueue()
         return
      }

      // const maxNumLabellers = numLabels % 2 === 0 ? numLabels + 1 : numLabels + 2
      let newTotal = currentCredits * currentPartitions
      if (data.me.balance < newTotal) {
         toast.error('You do not have sufficent credits to create this job', {
            toastId: 'invalCredit2'
         })
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
                     'Invalid number of Partitions, make sure partitions does not exceed images',
                     {
                        toastId: 'invalPartition'
                     }
                  )
                  return
               }
               //! Begin Error checking

               if (document.querySelector('#title').value === '') {
                  toast.error('Please enter a valid job title', {
                     toastId: 'invaltitle'
                  })
                  toast.clearWaitingQueue()
                  return
               }
               if (document.querySelector('#title').value.length > 25) {
                  toast.error('Job title is too long', {
                     toastId: 'invaltitleLength'
                  })
                  toast.clearWaitingQueue()
                  return
               }
               if (document.querySelector('#description').value === '') {
                  toast.error('Please enter a valid job description', {
                     toastId: 'invalDesc'
                  })
                  toast.clearWaitingQueue()
                  return
               }
               if (data.me.balance < currentTotal) {
                  toast.error(
                     'You do not have sufficent credits to create this job',
                     {
                        toastId: 'invalCredit3'
                     }
                  )
                  toast.clearWaitingQueue()
                  return
               }
               if (labels.map((label) => label.label).length === 0) {
                  toast.error('Please enter at least one label', {
                     toastId: "invalLabels"
                   })
                  toast.clearWaitingQueue()
                  return
               }
               if (labels.map((label) => label.label).some(isBlank)) {
                  toast.error('Please make sure none of your labels are blank', {
                     toastId: "invallabels2"
                   })
                  toast.clearWaitingQueue()
                  return
               }
               if (labels.map((label) => label.label).some(isother)) {
                  toast.error('Other Label will be automatically added,please select another label', {
                     toastId: "invalother"
                   })
                  toast.clearWaitingQueue()
                  return
               }
               if (labels.map((label) => label.label).some(checkLength)) {
                  toast.error('Maximum length of labels is 20 Characters', {
                     toastId: "invallabelLength"
                   })
                  toast.clearWaitingQueue()
                  return
               }
               if (checkIfDuplicateExists(labels.map((label) => label.label))) {
                  toast.error('No Duplicate labels allowed', {
                     toastId: "invaldupLabel"
                   })
                  toast.clearWaitingQueue()
                  return
               }
               if (
                  document.querySelector('#partitions').value === 0 ||
                  document.querySelector('#partitions').value === ''
               ) {
                  toast.error('Invalid number of partitions', {
                     toastId: "invalnumpartition"
                   })
                  toast.clearWaitingQueue()
                  return
               }
               //! End Error Checking
               labels.push({id: "otherLabel",label:"Other"})//add other label
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
               // console.log(variables)
               // return

               let variables = {}
               for (let i = 0; i < images.length; i++) {
                  variables[i] = []
                  variables[i].push(`variables.files.${i}`)
               }
               form.append('map', JSON.stringify(variables))

               for (let i = 0; i < images.length; i++) {
                  form.append(i.toString(), images[i].file)
               }
               const id = toast.loading('Please wait...', {
                  toastId: "loading"
                })
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
                        console.log(res)
                        toast.update(id, {
                           render:
                              'Your Job was not Created, Please try again ehehehe',
                           type: 'error',
                           autoClose: 3000,
                           isLoading: false
                        })
                        toast.clearWaitingQueue()
                     }
                  })
                  .catch((e) => {
                     console.log(e)
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
                        inputProps={{ maxLength: 25 }}
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
                        inputProps={{ maxLength: 250 }}
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
                                 'You can not have more than 5 labels', {
                                    toastId: "toomanyLabels"
                                  }
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
                                 inputProps={{ maxLength: 15 }}
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
                              {imageList.slice(0, 9).map(
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
