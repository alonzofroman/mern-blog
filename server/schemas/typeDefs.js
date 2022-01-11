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
        users: [User]
        comments: [Comment]
    }
    
`