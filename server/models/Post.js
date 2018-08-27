const mongoose = require('mongoose');
const _ = require('lodash');
mongoose.Promise = global.Promise;

const PostSchema = mongoose.Schema({
    postTitle: {
        type:String,
        required: true
    },
    post:{
        type: String,
        required: true,
        minlength: [20, 'Description should be atleast 20 chars long!']
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    _creator: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    _createdAt:{
        type: Date,
        default: Date.now()
    }
});

PostSchema.methods.toJSON = function(){
    let post = this;
    let postObj = post.toObject();
    return _.pick(postObj,['postTitle','post','_creator']);
}
const filterFields = function(next){
    let post = this;
    post.populate({
        path: '_creator',
        select: 'firstName lastName username -_id'
    });
    next();
}
PostSchema.pre('find',filterFields);

const Post = mongoose.model('Post',PostSchema);

module.exports = Post;