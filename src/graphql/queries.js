
import {gql} from "@apollo/client";

const GET_USERS=gql`
    query Users{
        users{
            balance
            avatar
        }
    }

`

export {GET_USERS}