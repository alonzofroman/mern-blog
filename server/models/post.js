const { Schema, model } = require("mongoose");

const userSchema = require('./user');

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
        type: String,
        required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
      }
    ]
  },
);

const Post = model('Post', postSchema);

module.exports = Post;
