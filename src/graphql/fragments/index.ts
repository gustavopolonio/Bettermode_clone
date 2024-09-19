import { gql } from '@apollo/client'

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

export const POST_FIELDS_FRAGMENT = gql`
  fragment PostFields on Post {
    id
    title
    createdAt
    fields {
      key
      value
    }
    space {
      name
      image {
        ...MediaFields
      }
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
  ${MEDIA_FIELDS_FRAGMENT}
`
