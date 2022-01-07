const { Schema } = require('mongoose');

const commentSchema = new Schema({
    content: {
        type: String,
        required: true,
    }
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;