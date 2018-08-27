const express = require('express');
const apiRoutes = express();
const {userController,postController}  = require('../controllers');
apiRoutes.get('/',(req,res)=>{
    res.json({
        success: true,
        data:"api routes Working!"
    });
});

apiRoutes.post('/newUser',userController.post);
apiRoutes.get('/user/:search?',userController.get);
apiRoutes.post('/newPost',postController.post);
apiRoutes.get('/post/:postTitle',postController.get);

module.exports = {apiRoutes};