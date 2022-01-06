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
    }
  },
);

const Post = model('Post', postSchema);

module.exports = Post;
