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

const GET_ME_AND_DELETED_JOBS = gql`
   query getDeletedJobs{
      deletedJobs{
      job_id
      title
   }
      me {
         username
         email
         avatar
         balance
      }
   }
   `


const GET_DELETED_JOBS =gql`
   query getDeletedJobs{
      deletedJobs{
         job_id
         title
      }
   }
   `

const GET_ME = gql`
   query getCurrentUser {
      me {
         username
         email
         avatar
         balance
      }
   }
   `
const GET_ACCEPTED_JOBS = gql`
   query acceptedJobs {
      acceptedJobs {
         job_owner {
            username
         }
         title
         credits
         job_id
         description
         preview_images
      }
   }
   `
const GET_CREATED_JOBS = gql`
   query createdJobs {
      ownedJobs {
         title
         credits
         job_id
         description
         preview_images
      }
   }
   `
const GET_LABEL_JOB_INFO = gql`
   query LabelJobInfo($job_id: ID!) {
      labelJobInfo(job_id: $job_id) {
         partition_id
         image_ids
         images
         labels
         title
      }
   }
   `

const GET_SAVED_STATE = gql`
   query LabelJobState($partition_id: ID!) {
      labelJobState(partition_id: $partition_id) {
         image_ids
         labels
      }
   }
   `

export {
   GET_USERS,
   GET_JOBS,
   GET_LABEL_JOB_INFO,
   GET_SAVED_STATE,
   GET_ME,
   GET_ME_AND_DELETED_JOBS,
   GET_ACCEPTED_JOBS,
   GET_CREATED_JOBS,
   GET_DELETED_JOBS
}
