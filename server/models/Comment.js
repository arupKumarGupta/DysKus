const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const {Schema} = mongoose;
const CommentSchema = Schema({

    comment: {
        type: String,
        minlength: [1,'Comment cannot be empty'],
        required: true
    },
    isDeleted: {
        type:Boolean,
        default:false,
    },
    _creator: {
        type:Schema.ObjectId,
        ref: 'User'
    },
    _post:{
        type: Schema.ObjectId,
        ref: 'Post'
    },
    _createdAt: {
        type: Date,
        default: Date.now()
    }
    
});

const Comment = mongoose.model('Comment',CommentSchema);

module.exports = Comment;

