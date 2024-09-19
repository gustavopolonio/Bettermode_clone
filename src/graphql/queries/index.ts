import { gql } from '@apollo/client'
import { POST_FIELDS_FRAGMENT } from '../fragments'

export const GET_POST = gql`
  query GetPost($id: ID!, $repliesLimit: Int!) {
    post(id: $id) {
      ...PostFields
    }
  }
  ${POST_FIELDS_FRAGMENT}
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
        ...PostFields
      }
      pageInfo {
        hasNextPage
      }
    }
  }
  ${POST_FIELDS_FRAGMENT}
`
