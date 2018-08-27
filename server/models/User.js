const mongoose  = require('mongoose');
const _ = require('lodash');
mongoose.Promise = global.Promise;
const UserSchema = mongoose.Schema({
    username:{
        type: String,
        minlength: [4, "Username should be 4 chars or more!"],
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        minlength: [4, "Name should be 4 chars or more!"],
        required: true
    },
    lastName: {
        type: String,
        minlength: [4, "Name should be 4 chars or more!"],
        
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        minlength: [8,"Password must be atleast 8 chars!"],
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    _score: {
        type: Number,
        default: 0
    },
    _createdAt: {
        type: Date,
        default: Date.now()
    }

});
UserSchema.methods.toJSON = function(){
    let user = this;
    let userObj = user.toObject();
    return _.pick(userObj,['firstName','lastName']);
}
const User = mongoose.model('User',UserSchema);

module.exports = User;