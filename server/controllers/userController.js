const {User} = require('../models');
const _ = require('lodash');
const userController = {};
userController.post = (req,res)=>{
    console.log(req.body);
    let {username,firstName,lastName,email,password} = req.body;
    const user = new User({
        username,firstName,lastName,email,password
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


userController.get = (req,res)=>{
    let searchString = _.pick(req.params,['search']).search;
    if(!searchString)
        searchString = '';
    let search = new RegExp(searchString,'i');
    let searchExp = {$regex: search};
    User.find({isDeleted:false}).or([{username:searchExp},{firstName:searchExp},{lastName:searchExp}]).then((user)=>{
        if(!user){
            return res.json({success:true,data:null});
        }
        res.json({success:true,data:user});
    }).catch((err)=>{
        res.json({message: err.toString()});
    });
    
    User.find({});
}
module.exports = userController;