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
        user: [user]
        post: [Post]
    }

    type Query {
        users: [User]
        user: [User]
        posts: [Post]
        
    }
`