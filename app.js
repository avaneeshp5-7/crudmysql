var express = require('express');
var app=express();
app.use(express.urlencoded({extended:true}));
var people=require('./Server/routes/rout')
app.use("/api",people)
app.listen(9000);
console.log("Server Started On Port No. 9000");