import { gql } from '@apollo/client'

const REGISTER_USER = gql`
   mutation register($username: String!, $email: String!, $password: String!) {
      register(username: $username, email: $email, password: $password) {
         user_id
         username
         jwt
      }
   }
`
const CREATE_JOB = gql`
   mutation CreateJob(
      $title: String!
      $description: String!
      $credits: Int!
      $labels: [String]!
      $num_partitions: Int!
      $files: [Upload]
   ) {
      createJob(
         title: $title
         description: $description
         credits: $credits
         labels: $labels
         num_partitions: $num_partitions
         files: $files
      ) {
         job_id
         created_at
         title
      }
   }
`

const LOGIN_USER = gql`
   mutation Login(
      $email: String!,
    $password: String!) {
      login(email: $email, password: $password) {
         username
         email
         jwt
      }
   }
`

const ACCEPT_JOB = gql`
   mutation AcceptJob($job_id: ID!) {
      acceptJob(job_id: $job_id)
   }
`

const SAVE_STATE = gql`
   mutation SaveState(
      $image_ids: [ID]!
      $labels: [String]!
      $partition_id: ID
      $is_complete: Boolean
   ) {
      saveState(
         image_ids: $image_ids
         labels: $labels
         partition_id: $partition_id
         is_complete: $is_complete
      )
   }
`

export { REGISTER_USER, LOGIN_USER, CREATE_JOB, ACCEPT_JOB, SAVE_STATE }
