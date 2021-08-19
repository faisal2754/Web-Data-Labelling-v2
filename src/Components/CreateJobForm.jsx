import { useState } from 'react'
import React from 'react'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'
import '../Styles/CreateJob.css'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import { nanoid } from 'nanoid'

const CreateJob = () => {
   const [title, setTitle] = useState('')
   const [description, setDescription] = useState('')
   const [labels, setLabels] = useState([{}])

   // const [itemData, setitemData] = useState({
   //    itemData: {
   //       img: '',
   //       altName: ''
   //    }
   // })

   // const handleImg = (e) => {
   //    if (e.target.files) {
   //       itemData.map((image) => {})
   //    }
   // }

   return (
      <div>
         <form
            encType="multipart/form-data"
            onSubmit={(e) => {
               console.log(e.target)
            }}
         >
            <div className="mainForm">
               <div className="jobInfo">
                  <div className="textField">
                     <label>Title</label>
                     <input
                        type="text"
                        value={title}
                        onChange={(e) => {
                           setTitle(e.target.value)
                        }}
                     />
                  </div>
                  <div className="textField">
                     <label>Description</label>
                     <textarea
                        value={description}
                        onChange={(e) => {
                           setDescription(e.target.value)
                        }}
                     ></textarea>
                  </div>

                  <div className="labelSection">
                     <button
                     className="labelButton"
                        type="button"
                        onClick={() => {
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
                              <input
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
                                    // e.target.value
                                 }}
                                 placeholder="label"
                                 value={p.label}
                              />
                              <button
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
               <div className="imageSection">
                  {/* <ImageList rowHeight={100} cols={2}>
                     {itemData.map((item) => (
                        <ImageListItem key={item.img} cols={item.cols || 1}>
                           <img src={item.img} alt={item.title} />
                        </ImageListItem>
                     ))}
                  </ImageList> */}
                  <input
                     id="imageInput"
                     type="file"
                     accept="image/*"
                     multiple
                     onChange={(e) => {
                        e.preventDefault()
                     }}
                  />
                  <label htmlFor="imageInput" className="imageUpload"></label>
               </div>

               <div className="credit-section">
                  <TextField
                     id="filled-number"
                     label="Credits"
                     type="number"
                     InputLabelProps={{
                        shrink: true
                     }}
                     variant="outlined"
                  />
                  <TextField
                     id="filled-number"
                     label="Number of Labellers"
                     type="number"
                     InputLabelProps={{
                        shrink: true
                     }}
                     variant="outlined"
                  />
                  <TextField
                     id="filled-number"
                     label="Number of Images per section"
                     type="number"
                     InputLabelProps={{
                        shrink: true
                     }}
                     variant="outlined"
                  />
               </div>
            </div>
            <div className="submitSection">
               <Button
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
