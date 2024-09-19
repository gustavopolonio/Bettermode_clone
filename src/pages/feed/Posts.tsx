import { useQuery, gql } from '@apollo/client'

import { GetPostsQuery, GetPostsQueryVariables } from '../../graphql/generated'
import { Post } from './Post'

export const MEDIA_FIELDS_FRAGMENT = gql`
  fragment MediaFields on Media {
    ... on File {
      url
    }
    ... on Image {
      url
      height
    }
    ... on Emoji {
      text
    }
  }
`

export const GET_POSTS = gql`
  query GetPosts(
    $filterBy: [PostListFilterByInput!]
    $postsLimit: Int!
    $orderByString: String
    $postTypeIds: [String!]
    $reverse: Boolean
    $repliesLimit: Int!
  ) {
    posts(
      filterBy: $filterBy
      limit: $postsLimit
      orderByString: $orderByString
      postTypeIds: $postTypeIds
      reverse: $reverse
    ) {
      nodes {
        id
        title
        createdAt
        fields {
          key
          value
        }
        reactionsCount
        reactions {
          reacted
        }
        thumbnail {
          ...MediaFields
        }
        owner {
          member {
            id
            name
            createdAt
            profilePicture {
              ...MediaFields
            }
          }
        }
        replies(limit: $repliesLimit) {
          nodes {
            id
            title
            fields {
              key
              value
            }
            reactionsCount
            reactions {
              reacted
            }
            repliesCount
            totalRepliesCount
            thumbnail {
              ...MediaFields
            }
            owner {
              member {
                id
                name
                createdAt
                profilePicture {
                  ...MediaFields
                }
              }
            }
          }
        }
      }
      pageInfo {
        hasNextPage
      }
    }
  }
  ${MEDIA_FIELDS_FRAGMENT}
`

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

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <main className="bg-zinc-100">
      <div className="px-4 py-3 space-y-5">
        <h3 className="text-lg font-medium">Have fun!</h3>
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
        {data?.posts.nodes?.map((post) => <Post key={post.id} post={post} />)}
      </div>
    </main>
  )
}
