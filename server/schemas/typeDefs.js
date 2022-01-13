const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        posts: [Post]
        comments: [Comment]
    }

    type Post {
        _id: ID
        content: String
        user: [User]
        comments: [Comment]
    }

    type Comment {
        _id: ID
        content: String
        user: [User]
        post: [Post]
    }

    type Query {
        users: [User]
        user: [User]
        posts: [Post]
        post: [Post]
        comments: [Comment]
        comment: [Comment]
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): User
        addPost(userId: ID!, title: String!, content: String!): Post
        addComment(userId: ID!, content: String!): Comment
        removePost(post_Id: ID!): Post
        removeComment(commentId: ID!): Comment
    }
`;

module.exports = typeDefs;