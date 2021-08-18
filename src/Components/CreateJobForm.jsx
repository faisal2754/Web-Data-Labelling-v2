import { useState } from 'react'
import React from 'react'

const CreateJob = () => {
   const [title, setTitle] = useState('')
   const [description, setDescription] = useState('')
   const [file, setImagePreview] = useState('')
   return (
      <div>
         <form>
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
            <div className='imageSection'>
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
         </form>
      </div>
   )
}

export default CreateJob
