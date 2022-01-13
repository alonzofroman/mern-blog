const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;