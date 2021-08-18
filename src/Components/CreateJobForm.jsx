import { useState } from 'react'
import React from 'react'

const CreateJob = () => {
   const [title, setTitle] = useState('')
   const [description, setDescription] = useState('')

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
         </form>
      </div>
   )
}

export default CreateJob
