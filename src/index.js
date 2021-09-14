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

const httpLink = new HttpLink({
   uri: 'https://data-labelling-server.herokuapp.com/graphql',
   fetchOptions: { mode: 'no-cors' }
})

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
   link: concat(authMiddleware, httpLink),
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
