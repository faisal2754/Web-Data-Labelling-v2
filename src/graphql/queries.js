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

const GET_ME = gql`
   query getCurrentUser{
  me{
     username
    email
    avatar
    balance
  }
}
`
const GET_ACCEPTED_JOBS = gql`
   query acceptedJobs{
   acceptedJobs{
     job_owner{
       username
     }
     title
     credits
     description
     preview_images
   }
 }
`
const GET_LABEL_JOB_INFO = gql`
   query LabelJobInfo($job_id: ID!) {
      labelJobInfo(job_id: $job_id) {
         image_ids
         images
         labels
         title
      }
   }
`

export { GET_USERS, GET_JOBS, GET_LABEL_JOB_INFO, GET_ME, GET_ACCEPTED_JOBS }
