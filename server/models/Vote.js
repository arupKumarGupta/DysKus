const mongoose = require('mongoose');
const {Schema} = mongoose;

const VoteSchema = Schema({
    vote: {
        type: Number,
        default:0 
    },
    _comment: {
        type: Schema.ObjectId,
        ref: 'Comment'
    },
    _post: {
        type: Schema.ObjectId,
        ref: 'Post'
    }
});

const Vote = mongoose.model('Vote',VoteSchema);

module.exports = Vote;