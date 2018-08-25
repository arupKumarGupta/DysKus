const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const {Schema} = mongoose;
const SubCommentSchema = Schema({
    _mainComment: {
        type:Schema.ObjectId,
        ref: 'Comment'
    },
    _subComments: [
        {
            type: Schema.ObjectId,
            ref:'Comment'
        }
    ]
});
SubCommentSchema.pre('find',(next)=>{


    //select certain fields from the main comment
    this.populate({
        path:'_mainContent',
        select:'rte _creator post -_id'
    });

    //select certain fields from the sub comment
    this.populate({
        path:'_subComments',
        select:'rte _creator post -_id'
    });

    next();
});
const SubComment = mongoose.model('SubComment',SubCommentSchema);
module.exports = SubComment;