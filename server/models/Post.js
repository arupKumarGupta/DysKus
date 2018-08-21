const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const PostSchema = mongoose.Scheme({
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


PostSchema.pre('find',(next)=>{
    this.populate({
        path: '_creator',
        select: 'name username -_id'
    });
    next();
});

const Post = mongoose.model('Post',PostSchema);

module.exports = Post;