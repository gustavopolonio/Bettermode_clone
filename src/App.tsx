import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { FeedPage } from './pages/feed'

const router = createBrowserRouter([
  {
    path: '/feed',
    element: <FeedPage />,
    // errorElement: <ErrorPage />,
  },
])

export function App() {
  return <RouterProvider router={router} />
}
