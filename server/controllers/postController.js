const {Post} = require('../models');
const _ = require('lodash');

const postController = {};
postController.post = (req,res)=>{
    let {postTitle,post,_creator} = req.body;
    const newPost = new Post({
        postTitle,
        post,
        _creator
    });
    newPost.save().then((post)=>{
        res.json({success:true,
            data:post
        });
    }).catch((err)=>{
        res.json({
            data:JSON.stringify(err)
        });
    });
}
postController.get = (req,res)=>{
    let postTitle = _.pick(req.params,['postTitle']).postTitle;
    Post.find({postTitle:{$regex:`.*${postTitle}.*`,$options:'i'}}).then((post)=>{
        res.json({success:true,
        data: post});
    }).catch((err)=>{
        res.json({
            message: err.toString()
        })
    });
}
module.exports = postController;