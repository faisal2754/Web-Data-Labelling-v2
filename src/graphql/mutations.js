import { gql } from '@apollo/client'

const REGISTER_USER = gql`
    mutation register($username: String!, $email: String!, $password: String!){
        register(username: $username, email: $email, password: $password){
            user_id
            username
            jwt
        }
    }
`

const LOGIN_USER = gql`
    mutation Login($email: String!, $password: String!){
        login(email: $email,password:$password){
            username
            
            jwt
        }
    }
`

export { REGISTER_USER, LOGIN_USER }

