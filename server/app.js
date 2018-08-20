const express = require('express');
const bodyParser = require('body-parser');
const {apiRoutes,routes} = require("./routes"); 
const app = express();

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL+"/"+process.env.DATABASE,()=>{
    console.log("connected to mongo db");
});
app.use(bodyParser.json());
app.use('/api',apiRoutes);
app.use('/',routes);

module.exports = {app};