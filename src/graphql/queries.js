import { gql } from '@apollo/client'

const GET_USERS = gql`
   query Users {
      users {
         balance
         avatar
      }
   }
`

const GET_JOBS = gql`
   query ViewJobs {
      viewJobs {
         created_at
         credits
         description
         job_id
         preview_images
         title
         job_owner {
            username
         }
      }
   }
`

export { GET_USERS, GET_JOBS }
