import { useQuery } from '@apollo/client'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

import { GetPostQuery, GetPostQueryVariables } from '../graphql/generated'
import { GET_POST } from '../graphql/queries'
import { Post } from '../components/Post'
import { Loader } from '../components/Loader'

export function PostPage() {
  const { postId } = useParams()

  const { loading, error, data } = useQuery<
    GetPostQuery,
    GetPostQueryVariables
  >(GET_POST, {
    variables: {
      id: postId!,
      repliesLimit: 10,
    },
    skip: !postId,
  })

  if (error) return `Error! ${error.message}`
  if (loading)
    return (
      <div className="mt-11 bg-zinc-100 flex-1">
        <Loader />
      </div>
    )

  return !data ? (
    'Post not found :('
  ) : (
    <div className="pb-5 sm:px-[14px] lg:flex-1">
      <div className="px-4 py-3 flex justify-between items-center">
        <Link to="/feed" className="rounded-full p-2.5 hover:bg-zinc-200">
          <ArrowLeft className="size-5" />
        </Link>
        <div className="flex items-center gap-2">
          <img
            src={
              (data.post.space?.image?.__typename === 'Image' &&
                data.post.space.image.url) ||
              ''
            }
            alt={data.post.space?.name}
            className="size-5"
          />
          <span className="font-medium">{data.post.space?.name}</span>
        </div>
      </div>

      <Post
        post={data?.post}
        isContentAlwaysVisible={true}
        queryToRefetch="GetPost"
      />
    </div>
  )
}
