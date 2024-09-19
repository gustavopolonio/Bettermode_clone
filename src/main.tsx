import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import { App } from './App'

import './index.css'

const client = new ApolloClient({
  uri: import.meta.env.VITE_API_BASE_URL,
  cache: new InMemoryCache({
    possibleTypes: {
      Media: ['Emoji', 'File', 'Image'],
    },
  }),
  headers: {
    authorization: import.meta.env.VITE_ACCESS_TOKEN,
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>,
)
