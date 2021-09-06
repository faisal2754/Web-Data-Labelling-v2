import { useState, useEffect } from 'react'
import React from 'react'
import '../Styles/CreateJob.css'
import TextField from '@material-ui/core/TextField'
import { nanoid } from 'nanoid'
import ImageUploading from 'react-images-uploading'
import { useMutation } from '@apollo/client'
import { CREATE_JOB } from '../graphql/mutations'
import { Redirect } from 'react-router-dom'
import { toast } from 'react-toastify'
const FormData = require('form-data')
const axios = require('axios').default

const CreateJob = () => {
   const [labels, setLabels] = useState([])
   const [createJob, { loading, error, data }] = useMutation(CREATE_JOB)
   const [currentTotal, setCurrentTotal] = useState(0)
   // const [images, setImages] = useState([])
   // const onChange = (imageList, addUpdateIndex) => {
   //    // data for submit
   //    // console.log(imageList, addUpdateIndex)
   //    setImages(imageList)
   // }
   const showError = () => {
      toast.error('An error occured')
      toast.clearWaitingQueue()
   }

   useEffect(() => {
      document.querySelector('#totalCredits').value = 0
   }, [])

   if (data) {
      return <Redirect to="/view-job" />
   }
   if (error) {
      console.log(error)
   }
   // let myfiles
   // const handlefiles = (e) => {
   //    myfiles = e.target.files
   // }

   const createFormDataJob = async () => {
      const form = new FormData()
      form.append(
         'operations',
         JSON.stringify({
            query: 'mutation ($files: [Upload], $title: String!, $description: String!, $credits: Int!, $num_partitions: Int!, $labels: [String]!){\n  createJob (files: $files, title: $title, description: $description, credits: $credits, num_partitions: $num_partitions, labels: $labels){\n    job_id\n  }\n}',
            variables: {
               title: document.querySelector('#title').value,
               description: document.querySelector('#description').value,
               labels: labels.map((label) => label.label),
               // images: images,
               // images: images.map((image) => image.file),
               credits: currentTotal,
               numLabellers: parseInt(
                  document.querySelector('#numLabellers').value
               ),
               numPartitions: parseInt(
                  document.querySelector('#imgPerSection').value
               )
            }
         })
      )
      // var images = document.querySelector('#testimageup')
      // console.log(images)
      form.append(
         'map',
         JSON
            .stringify
            // images.map((image) => {
            //    const originalimgname = image.file.name
            //    return { originalimgname: ['variables.files.originalimgname'] }
            // })
            ()
      )
      // images.forEach((img) => {
      //    const originalimgname = img.file.name
      //    form.append(originalimgname, img.data_url)
      // })

      // const headers = form.getHeaders()
      console.log(form)
      const res = await axios.post(
         'https://data-labelling-server.herokuapp.com/graphql',
         form
      )
      console.log(res)
   }

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
         <form
            encType="multipart/form-data"
            onSubmit={async (e) => {
               e.preventDefault()
               // await createFormDataJob()
               // console.log(e.target.files)
               const dataForSubmit = {
                  jobTitle: document.querySelector('#title').value,
                  jobDescription: document.querySelector('#description').value,
                  labels: labels.map((label) => label.label),
                  images: document.querySelector('#testimageup').files,
                  // images: images.map((image) => image.file),
                  totalCreditsCost: currentTotal,
                  // numLabellers: parseInt(
                  //    document.querySelector('#numLabellers').value
                  // ),
                  numPartitions: parseInt(
                     document.querySelector('#imgPerSection').value
                  )
               }
               if (dataForSubmit.jobTitle === '') {
                  toast.error('Please enter a valid job title')
                  // toast.clearWaitingQueue()
                  return
               }
               if(dataForSubmit.jobDescription===''){
                  toast.error('Please enter a valid job description')
                  // toast.clearWaitingQueue()
                  return
               }
               if(dataForSubmit.labels.length===0){
                  toast.error('Please enter at least one label')
                  // toast.clearWaitingQueue()
                  return
               }
               if(dataForSubmit.images.length===0){
                  toast.error('Please upload at least 1 image')
                  // toast.clearWaitingQueue()
                  return
               }
               if(dataForSubmit.labels.some)

               console.log(dataForSubmit)
               await createJob({
                  variables: {
                     title: dataForSubmit.jobTitle,
                     description: dataForSubmit.jobDescription,
                     credits: dataForSubmit.totalCreditsCost,
                     labels: dataForSubmit.labels,
                     num_partitions: dataForSubmit.numPartitions,
                     files: dataForSubmit.images[0]
                  }
               }).catch((error) => showError())
            }}
         >
            <div className="createJob_mainForm">
               <div className="createJob_jobInfo">
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
                  <input
                     id="testimageup"
                     type="file"
                     multiple
                     // onChange={handlefiles}
                  />
                  {/* <ImageUploading
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
                           <button
                              className="btn-hover"
                              style={isDragging ? { color: 'red' } : null}
                              onClick={(e) => {
                                 e.preventDefault()
                                 console.log(e.target.files)
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
                           <h2>Total Images : {imageList.length}</h2>
                           <div className="createJob_imagePrev">
                              {imageList.map((image, index) => (
                                 <div key={index} className="image-item">
                                    <img
                                       src={image.data_url}
                                       alt=""
                                       width="200"
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
                                    </div> 
                                 </div>
                              ))}
                           </div>
                        </div>
                     )}
                  </ImageUploading> */}
               </div>

               <div className="createJob_credit-section">
                  <TextField
                     id="credits"
                     label="Credits"
                     type="number"
                     // onChange={Calculate}
                     variant="outlined"
                  />
                  {/* <TextField
                     id="numLabellers"
                     label="Number of Labellers"
                     type="number"
                     // onChange={Calculate}
                     variant="outlined"
                  /> */}
                  <TextField
                     id="imgPerSection"
                     label="Number of Partitions"
                     type="number"
                     // onChange={Calculate}
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
                  {loading ? 'Submitting...' : 'Upload'}
               </button>
            </div>
         </form>
      </div>
   )
}

export default CreateJob
