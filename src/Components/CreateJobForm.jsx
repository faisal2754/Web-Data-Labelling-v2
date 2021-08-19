import { useState } from 'react'
import React from 'react'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'
import '../Styles/CreateJob.css'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'

const CreateJob = () => {
   const [title, setTitle] = useState('')
   const [description, setDescription] = useState('')

   return (
      <div>
         <form>
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
                  <ImageList rowHeight={100} cols={3}>
                     {/* {itemData.map((item) => (
                        <ImageListItem key={item.img} cols={item.cols || 1}>
                           <img src={item.img} alt={item.title} />
                        </ImageListItem>
                     ))} */}
                  </ImageList>
                  <input
                     id="imageInput"
                     type="file"
                     accept="image/*"
                     multiple
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
