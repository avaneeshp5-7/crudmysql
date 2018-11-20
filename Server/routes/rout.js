var express = require('express');
var mysql = require('mysql');
var bodyparser = require('body-parser');
var rout=express.Router()
rout.use(bodyparser.json());
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"people"
});
con.connect();

rout.post("/addData",(req,res)=>{
    var str={
        Name:req.body.name,
        Age:req.body.age,
        Gender:req.body.gender,
        MobileNo:req.body.mobile
    }
    
    con.query("insert into people SET?",str,(err,result)=>{
        if(err){
            res.status(404).send(err);
        }
        else{
            res.status(200).send(result);
        }
    });
});


rout.get("/getData",(req,res)=>{
    con.query("select * from people",(err,result)=>{
        if(err){
            res.status(404).send(err);
        }
        else{
            res.status(200).send(result);
        }
    });
});

rout.put("/updateData",(req,res)=>{
    peopleid=req.body.peopleid,
    Name=req.body.name,
    Age=req.body.age,
    Gender=req.body.gender,
    MobileNo=req.body.mobile

    con.query("update people set Name='"+Name+"',Age='"+Age+"',Gender='"+Gender+"',MobileNo='"+MobileNo+"' where peopleid='"+peopleid+"'",(err,result)=>{
        if(err){
            res.status(404).send(err);
        }
        else{
            res.status(200).send(result);
        }
    });
});
rout.post("/deleteData",(req,res)=>{
    peopleid=req.body.peopleid;
    con.query("delete from people where peopleid='"+peopleid+"'",(err,result)=>{
        if(err){
            res.status(404).send(err);
        }
        else{
            res.status(200).send(result);
        }
    });
});
module.exports=rout;