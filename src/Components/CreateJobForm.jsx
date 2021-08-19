import { useState } from 'react'
import React from 'react'
import '../Styles/CreateJob.css'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import { makeStyles } from '@material-ui/core/styles'

const CreateJob = () => {
   const [title, setTitle] = useState('')
   const [description, setDescription] = useState('')
   const [file] = useState('')
   const [credit] = useState('')

   return (
      <div>
         <form>
            <div>
               <label>title</label>
               <input
                  type="text"
                  value={title}
                  onChange={(e) => {
                     setTitle(e.target.value)
                  }}
               />
            </div>
            <div>
               <label>Description</label>
               <textarea
                  value={description}
                  onChange={(e) => {
                     setDescription(e.target.value)
                  }}
               ></textarea>
            </div>
            <div></div>
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
               </div>
               <div className="imageSection">
                  <img src={file} alt="image" />
                  <input
                     id="imageInput"
                     type="file"
                     accept="image/*"
                     multiple
                     onchange={(e) => {
                        URL.createObjectURL(e.target.files[0])
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
               <div>
                  <Button
                     variant="contained"
                     color="default"
                     type="submit"
                     startIcon={<CloudUploadIcon />}
                  >
                     Upload
                  </Button>
               </div>
            </div>
         </form>
      </div>
   )
}

export default CreateJob
