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
export const FETCH_SINGLE_POST = gql`
  query getPost($postId: ID!) {
    getPost(postId: $postId) {
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
    likePost(postId: $postId) {
      id
      likes {
        id
        username
        createdAt
      }
      likeCount
    }
  }
`;

export const CREATE_POST = gql`
  mutation createPost($title: String!, $body: String!) {
    createPost(title: $title, body: $body) {
      id
      username
      body
      title
      createdAt
      likes {
        id
        username
        createdAt
      }
      likeCount
      comments {
        id
        body
        username
        createdAt
      }
      commentCount
    }
  }
`;

export const CREATE_COMMENT = gql`
  mutation createComment($postId: ID!, $body: String!) {
    createComment(postId: $postId, body: $body) {
      id
      username
      body
      title
      createdAt
      likes {
        id
        username
        createdAt
      }
      likeCount
      comments {
        id
        body
        username
        createdAt
      }
      commentCount
    }
  }
`;
