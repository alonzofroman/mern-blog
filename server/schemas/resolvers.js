const { User, Post, Comment } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return await User.find({}).populate('posts').populate('comments');
        },
        user: async () => {
            return await User.findOne({ _id: userId }).populate('posts').populate({
                path: 'posts',
                populate: 'comments'
            });
        },
        posts: async () => {
            return await Post.find({}).populate('comments').populate('user');
        },
        post: async () => {
            return await Post.findOne({ _id: postId });
        },
        comments: async () => {
            return await Comment.find({}).populate('posts').populate('user')
        },
        comment: async () => {
            return await Comment.findOne({ _id: commentId }).populate('posts').populate('user')
        }
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            return User.create({ username, email, password });
        },
        addPost: async (parent, { userId, title, content }) => {
            return Post.create({ userId, title, content });
        },
        addComment: async (parent, { userId, postId, content }) => {
            return Comment.create({ userId, postId, content });
        },
        removePost: async (parent, { postId }) => {
            return Post.findOneAndDelete({ _id: postId });
        },
        removeComment: async (parent, { commentId }) => {
            return Comment.findOneAndDelete({ _id: commentId })
        }
    }
};

module.exports = resolvers;