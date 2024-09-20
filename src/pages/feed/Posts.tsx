import { useQuery } from '@apollo/client'
import { GetPostsQuery, GetPostsQueryVariables } from '../../graphql/generated'
import { useState } from 'react'
import { Post } from '../../components/Post'
import { GET_POSTS } from '../../graphql/queries'
import { Loader } from '../../components/Loader'
import { Sidebar } from '../../components/Sidebar'

export function Posts() {
  const [isFetchingMorePosts, setIsFetchingMorePosts] = useState(false)
  const { loading, error, data, fetchMore } = useQuery<
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
      repliesLimit: 10,
    },
  })

  function loadAdditionalPosts() {
    setIsFetchingMorePosts(true)

    fetchMore({
      variables: {
        after: data?.posts.pageInfo.endCursor,
        postsLimit: 10,
        repliesLimit: 10,
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
      <div className="mt-11 bg-zinc-100">
        <Loader />
      </div>
    )

  return (
    <div className="max-w-[1344px] my-0 mx-auto lg:flex">
      <Sidebar className="hidden w-[22%] pt-5 pl-5 lg:block" />

      <div className="pb-5 lg:flex-1 sm:px-[14px] lg:px-8">
        <div className="p-4 space-y-5 sm:px-0 lg:py-5">
          <h3 className="text-lg font-medium sm:text-2xl">Have fun!</h3>
          <div>
            <button className="py-2 px-5 font-medium text-zinc-600 bg-lime-400 rounded-full">
              Lastest
            </button>
            <button className="py-2 px-5 font-medium text-zinc-600 rounded-full">
              Recent activity
            </button>
          </div>
        </div>

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
      </div>
    </div>
  )
}
