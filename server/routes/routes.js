const express = require('express');
const routes = express();

routes.get('/',(req,res)=>{
    res.json({
        success: true,
        data:"routes Working!"
    });
});

module.exports = {routes};