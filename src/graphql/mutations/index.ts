import { gql } from '@apollo/client'

export const ADD_REACTION = gql`
  mutation AddReaction($input: AddReactionInput!, $postId: ID!) {
    addReaction(input: $input, postId: $postId) {
      status
    }
  }
`

export const REMOVE_REACTION = gql`
  mutation RemoveReaction($postId: ID!, $reaction: String!) {
    removeReaction(postId: $postId, reaction: $reaction) {
      status
    }
  }
`
