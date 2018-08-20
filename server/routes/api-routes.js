const express = require('express');
const apiRoutes = express();
const {userController}  = require('../controllers');
apiRoutes.get('/',(req,res)=>{
    res.json({
        success: true,
        data:"api routes Working!"
    });
});

apiRoutes.post('/newUser',userController.post);

module.exports = {apiRoutes};