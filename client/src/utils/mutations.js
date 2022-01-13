import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
      }
    }
  }
`;

export const CREATE_POST = gql`
    mutation addPost($title: String!, $content: String!) {
        addPost(title: $title, content: $content) {
            _id
            title
            content
        }
    }
`;

export const CREATE_COMMENT = gql`
    mutation addComment($content: String!) {
        addComment(content: $content) {
            _id
            content
        }
    }
`;

export const DELETE_POST = gql`
    mutation removePost($id: ID!){
        removePost(id: $id)
    }
`;

export const DELETE_COMMENT = gql`
    mutation removeComment($id: ID!){
        removeComment(id: $id)
    }
`;