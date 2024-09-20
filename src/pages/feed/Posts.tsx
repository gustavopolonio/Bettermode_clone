import { useQuery } from '@apollo/client'
import { GetPostsQuery, GetPostsQueryVariables } from '../../graphql/generated'
import { Post } from '../../components/Post'
import { GET_POSTS } from '../../graphql/queries'
import { Loader } from '../../components/Loader'
import { Sidebar } from '../../components/Sidebar'

export function Posts() {
  const { loading, error, data } = useQuery<
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

  if (error) return `Error! ${error.message}`
  if (loading)
    return (
      <div className="mt-11 bg-zinc-50">
        <Loader />
      </div>
    )

  return (
    <div className="max-w-[1344px] my-0 mx-auto lg:flex">
      <Sidebar className="hidden w-[22%] pt-5 pl-5 lg:block" />

      <div className="lg:flex-1">
        <div className="p-4 space-y-5 lg:p-5">
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

        <div className="space-y-5 sm:px-[14px] lg:px-5">
          {data?.posts.nodes?.map((post) => (
            <Post key={post.id} post={post} queryToRefetch="GetPosts" />
          ))}
        </div>
      </div>
    </div>
  )
}
