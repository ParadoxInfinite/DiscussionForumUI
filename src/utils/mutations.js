import gql from "graphql-tag";
export const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      username
      createdAt
      token
    }
  }
`;
export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      email
      username
      createdAt
      token
    }
  }
`;
export const FETCH_POSTS = gql`
  {
    getPosts {
      id
      username
      createdAt
      title
      body
      comments {
        id
        body
        username
        createdAt
      }
      likes {
        id
        username
      }
      commentCount
      likeCount
    }
  }
`;
export const LIKE_POST = gql`
  mutation likePost($postId: ID!) {
    likePost(postId: $postId)
  }
`;
