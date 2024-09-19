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
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Imtlc2szY3FFVmUiLCJuZXR3b3JrSWQiOiJ6NEdDTVU3NFpSIiwibmV0d29ya0RvbWFpbiI6ImJldHRlcm1vZGUudHJpYmVwbGF0Zm9ybS5jb20iLCJ0b2tlblR5cGUiOiJVU0VSIiwiZW50aXR5SWQiOm51bGwsInBlcm1pc3Npb25Db250ZXh0IjpudWxsLCJwZXJtaXNzaW9ucyI6bnVsbCwic2Vzc2lvbklkIjoiUHBXenBjWE5Zb2I3dVgxODc1ZGx4cUcweUREQ0R2UE04NXVDTzFkaVNVeTNjRHJEYWMiLCJpYXQiOjE3MjY1ODY4NDIsImV4cCI6MTcyOTE3ODg0Mn0.fnIQn9-KJ3EuUOVuCLedxDrD8GCn7Wh0OphrXnnv1VI',
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>,
)
