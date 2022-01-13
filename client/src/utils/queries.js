import { gql } from '@apollo/client';

export const GET_USERS = gql`
    query users{
        _id
        username
        email
        password
        posts {
            _id
            title
            content
            user {
                _id
                username
            }
            comments {
                _id
                user
                content
            }
        }
        comments {
            _id
            content
        }
    }
`

export const GET_USER_BY_ID = gql`
    query user($userId: ID!){
        user(userId: $userId) {
            _id
            username
            email
            password
            posts {
                _id
                title
                content
                user {
                    username
                }
            comments {
                _id
                content
                user {
                    _id
                    username
                }
            }
            }
        }
    }
`

export const GET_POSTS = gql`
    query posts{
        _id
        title
        content
        user {
            _id
            username
        }
        comments {
            _id
            content
            user {
                _id
                username
            }
            post {
                _id
            }

        }
    }
`

export const GET_POST_BY_ID = gql`
    query post($postId: ID!){
        post(postId: $postId) {
            _id
            title
            content
            user {
                _id
                username
            }
            comments {
                _id
                content
                user{
                    _id
                    username
                    post {
                        _id
                    }
                }
            }
        }
    }
`

