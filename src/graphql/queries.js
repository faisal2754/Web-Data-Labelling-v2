
import { gql } from "@apollo/client";

const GET_USERS = gql`
    query Users{
        users{
            password
            email
        }
    }

`

export { GET_USERS }