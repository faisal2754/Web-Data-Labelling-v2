import {gql} from '@apollo/client'

const REGISTER_USER = gql`
    mutation register($username: String!, $email: String!, $password: String!){
        register(username: $username, email: $email, password: $password){
            user_id
            username
            jwt
        }
    }
`

export {REGISTER_USER}

