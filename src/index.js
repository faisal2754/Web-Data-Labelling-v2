import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.jsx'
import {
   ApolloClient,
   InMemoryCache,
   ApolloProvider,
   useQuery,
   gql
} from '@apollo/client'

const client = new ApolloClient({
   uri: 'https://data-labelling-server.herokuapp.com/graphql',
   cache: new InMemoryCache(),
   credentials: 'include'
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
