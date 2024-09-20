import { useQuery } from '@apollo/client'
import { useState } from 'react'

import { GetPostsQuery, GetPostsQueryVariables } from '../graphql/generated'
import { GET_POSTS } from '../graphql/queries'
import { Post } from '../components/Post'
import { Loader } from '../components/Loader'

export function FeedPage() {
  const [isFetchingMorePosts, setIsFetchingMorePosts] = useState(false)
  const [isRefetchingPosts, setIsRefetchingPosts] = useState(false)
  const [postsOrder, setPostsOrder] = useState('publishedAt')
  const { loading, error, data, fetchMore, refetch } = useQuery<
    GetPostsQuery,
    GetPostsQueryVariables
  >(GET_POSTS, {
    variables: {
      filterBy: [],
      postsLimit: 10,
      orderByString: 'publishedAt',
      reverse: true,
      postTypeIds: [
        'vLrOvQ20J61YIgx',
        'L3Wt0PM4KIkzZlE',
        'JL7C2DDhErvQPTz',
        'bFScuuQzcQJlQvZ',
        'at3PgXfPVdzurWL',
        '12HF7mD8Ph0kGpi',
      ],
    },
  })

  function getPosts(orderByString: string) {
    setIsRefetchingPosts(true)

    refetch({
      orderByString,
    }).finally(() => {
      setPostsOrder(orderByString)
      setIsRefetchingPosts(false)
    })
  }

  function loadAdditionalPosts() {
    setIsFetchingMorePosts(true)

    fetchMore({
      variables: {
        after: data?.posts.pageInfo.endCursor,
        postsLimit: 10,
      },
      updateQuery(previousData, { fetchMoreResult }) {
        if (!fetchMoreResult) return previousData

        return {
          posts: {
            ...fetchMoreResult.posts,
            nodes: [
              ...(previousData.posts.nodes || []),
              ...(fetchMoreResult.posts.nodes || []),
            ],
          },
        }
      },
    }).finally(() => {
      setIsFetchingMorePosts(false)
    })
  }

  if (error) return `Error! ${error.message}`
  if (loading)
    return (
      <div className="mt-11 bg-zinc-100 flex-1">
        <Loader />
      </div>
    )

  return (
    <div className="pb-5 lg:flex-1 sm:px-[14px] lg:px-8">
      <div className="p-4 space-y-5 sm:px-0 lg:py-5">
        <h3 className="text-lg font-medium sm:text-2xl">Have fun!</h3>
        <div className="space-x-1">
          <button
            onClick={() => getPosts('publishedAt')}
            className={`py-2 px-5 font-medium text-zinc-600 rounded-full ${postsOrder === 'publishedAt' ? 'bg-lime-400' : ''} hover:bg-lime-400`}
          >
            Latest
          </button>
          <button
            onClick={() => getPosts('lastActivityAt')}
            className={`py-2 px-5 font-medium text-zinc-600 rounded-full ${postsOrder === 'lastActivityAt' ? 'bg-lime-400' : ''} hover:bg-lime-400`}
          >
            Recent activity
          </button>
        </div>
      </div>

      {isRefetchingPosts ? (
        <Loader />
      ) : (
        <>
          <div className="space-y-5">
            {data?.posts.nodes?.map((post) => (
              <Post key={post.id} post={post} queryToRefetch="GetPosts" />
            ))}
          </div>

          <button
            onClick={loadAdditionalPosts}
            className="mt-5 text-xs font-medium w-full h-10 bg-white rounded-full border-[1px] border-zinc-400 hover:bg-zinc-100 md:text-sm"
          >
            {isFetchingMorePosts ? <Loader /> : 'Show more'}
          </button>
        </>
      )}
    </div>
  )
}
