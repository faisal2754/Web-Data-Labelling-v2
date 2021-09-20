import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.jsx'
import {
   ApolloClient,
   InMemoryCache,
   ApolloProvider,
   useQuery,
   gql,
   HttpLink,
   ApolloLink,
   concat
} from '@apollo/client'
import Cookies from 'js-cookie'
import store from './redux/store'
import { Provider } from 'react-redux'
import { onError } from 'apollo-link-error'

const errorLink = onError(({ graphQLErrors, networkError }) => {
   if (graphQLErrors) {
      console.log('graphQLErrors', graphQLErrors)
   }
   if (networkError) {
      console.log('networkError', networkError)
   }
})

const httpLink = new HttpLink({
   uri: 'https://data-labelling-server.herokuapp.com/graphql'
})

const link = ApolloLink.from([errorLink, httpLink])
// const httpLink = new HttpLink({
//    uri: 'https://data-labelling-server.herokuapp.com/graphql'
// })

const authMiddleware = new ApolloLink((operation, forward) => {
   operation.setContext(({ headers = {} }) => ({
      headers: {
         ...headers,
         Authorization: 'Bearer ' + Cookies.get('jwt') || null
      }
   }))

   return forward(operation)
})

const client = new ApolloClient({
   // uri: 'https://data-labelling-server.herokuapp.com/graphql',
   link: concat(authMiddleware, link),
   cache: new InMemoryCache(),
   credentials: 'same-origin'
})

ReactDOM.render(
   <React.StrictMode>
      <ApolloProvider client={client}>
         <Provider store={store}>
            <App />
         </Provider>
      </ApolloProvider>
   </React.StrictMode>,
   document.getElementById('root')
)