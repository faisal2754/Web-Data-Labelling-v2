import React, { useState } from 'react'
import FormData from 'form-data'
import axios from 'axios'

const Bruh = () => {
   const [file, setFile] = useState()

   const onSubmit = async (e) => {
      e.preventDefault()

      const form = new FormData()

      form.append(
         'operations',
         JSON.stringify({
            query: 'mutation ($files: [Upload], $title: String!, $description: String!, $credits: Int!, $num_partitions: Int!, $labels: [String]!){\n  createJob (files: $files, title: $title, description: $description, credits: $credits, num_partitions: $num_partitions, labels: $labels){\n    job_id\n  }\n}',
            variables: {
               files: [],
               title: 'testing job',
               description: 'abcd',
               credits: 20,
               num_partitions: 2,
               labels: ['apple', 'banana', 'cherry']
            }
         })
      )

      form.append(
         'map',
         JSON.stringify({
            0: ['variables.files.0']
         })
      )

      form.append('0', file, {
         filename: 'temp.png'
      })

      let res= axios.post('https://data-labelling-server.herokuapp.com/graphql', form)
   }

   return (
      <div>
         <form onSubmit={onSubmit} enctype="multipart/form-data">
            <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
               <h1>bruh</h1>
               <input id="title" value="test job title" />
               <input id="description" value="test job description" />
               <input id="credits" value="50" />
               <input name="labels" value="lion" />
               <input name="labels" value="zebra" />
               <input id="num_partitions" value="2" />
               <input
                  type="file"
                  id="myfile"
                  multiple
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: 'block' }}
               />
               <button type="submit" style={{ all: 'unset' }}>
                  Submit
               </button>
            </div>
         </form>
      </div>
   )
}

export default Bruh