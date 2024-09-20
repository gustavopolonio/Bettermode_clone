import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { FeedPage } from './pages/Feed'
import { PostPage } from './pages/Post'
import { Layout } from './pages/Layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <FeedPage />,
      },
      {
        path: 'posts/:postId',
        element: <PostPage />,
      },
    ],
  },
])

export function App() {
  return <RouterProvider router={router} />
}
