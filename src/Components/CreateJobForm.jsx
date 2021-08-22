import { useState, useEffect } from 'react'
import React from 'react'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'
import '../Styles/CreateJob.css'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import { nanoid } from 'nanoid'
import ImageUploading from 'react-images-uploading'

const CreateJob = () => {
   const [title, setTitle] = useState('')
   const [description, setDescription] = useState('')
   const [labels, setLabels] = useState([{}])
   const [currentTotal, setCurrentTotal] = useState(0)
   const [images, setImages] = useState([])

   const maxNumber = 100
   const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      console.log(imageList, addUpdateIndex)
      setImages(imageList)
   }

   useEffect(() => {
      document.querySelector('#totalCredits').value = 0
   }, [])

   // useEffect(() => {
   //    if (clear) document.querySelector('#totalCredits').value = ''
   // })

   const Calculate = (e) => {
      e.preventDefault()
      let currentCredits = document.querySelector('#credits').value
      let currentLabellers = document.querySelector('#numLabellers').value
      if (currentCredits == 0) return
      let newTotal = currentCredits * currentLabellers
      setCurrentTotal(newTotal)
   }

   // const Clear = (e) => {
   //    e.preventDefault()
   //    console.log('sum:', currentTotal)
   //    document.querySelector('form').reset()
   //    setClear(true)
   //    setCurrentTotal(0)
   // }

   return (
      <div className="createJob_page">
         <form
            encType="multipart/form-data"
            onSubmit={(e) => {
               console.log(e.target)
            }}
         >
            <div className="createJob_mainForm">
               <div className="createJob_jobInfo">
                  <div className="textField">
                     <TextField id="title" label="Title" variant="outlined" />
                  </div>
                  <div className="textField">
                     <TextField
                        id="description"
                        label="Description"
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
                           <img key={index} src={image.data_url} />
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
                                 style={{ padding: '3 rem' }}
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
                                 className="btn"
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
                  
                  <ImageUploading
                     multiple
                     value={images}
                     onChange={onChange}
                     maxNumber={maxNumber}
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
                                 onImageUpload()
                                 e.preventDefault()
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
                           {imageList.slice(0, 5).map((image, index) => (
                              <div key={index} className="image-item">
                                 <img src={image.data_url} alt="" width="100" />
                                 <div className="image-item__btn-wrapper">
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
                     )}
                  </ImageUploading>
               </div>

               <div className="createJob_credit-section">
                  <TextField
                     id="credits"
                     label="Credits"
                     type="number"
                     // onChange={Calculate}
                     variant="outlined"
                  />
                  <TextField
                     id="numLabellers"
                     label="Number of Labellers"
                     type="number"
                     // onChange={Calculate}
                     variant="outlined"
                  />
                  <TextField
                     id="imgPerSection"
                     label="Number of Images per section"
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
               <Button
                  className="btn-hover"
                  variant="contained"
                  color="default"
                  type="submit"
                  startIcon={<CloudUploadIcon />}
               >
                  Upload
               </Button>
            </div>
         </form>
      </div>
   )
}

export default CreateJob
