import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { FeedPage } from './pages/feed'
import { PostPage } from './pages/post'
import { Layout } from './pages/layout'

const router = createBrowserRouter([
  {
    path: '/feed',
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
