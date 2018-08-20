const {User} = require('../models');
const _ = require('lodash');
const userController = {};
userController.post = (req,res)=>{
    console.log(req.body);
    let {username,name,email,password} = req.body;
    const user = new User({
        username,name,email,password
    });
    user.save().then((newUser)=>{
        res.status(200).json({
            success: true,
            data: newUser
        });
    }).catch((err)=>{
        res.status(500).json({
            data: err.toString()
        })
    });
}
module.exports = userController;