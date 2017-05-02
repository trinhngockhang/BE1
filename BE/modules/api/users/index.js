    const express = require('express');

    const Router = express.Router();

    const usersModel = require('./usersController');

    Router.post('/',(req,res)=>{
      try{
      var userInfo = {
        userName : req.body.userName,
        password : req.body.password,
        email : req.body.email
      }

      console.log('post data ',req.body);
        //luu lai vao database
      usersModel.createUser(userInfo,(err,doc) => {
        if(err){
          console.log(err);
          res.send('co loi xay ra');
        }else {
          console.log("ok");
          res.send('tao thanh cong user');
        }
      });
      }catch(e){
        console.log("loi roi"+e);
      }
    });


    Router.get('/',(req,res)=>{
      try {
        var userName = req.query.userName;
        var userId = req.query.userId;
        if(userName){
          usersController.getUserByName(userName,(err,doc) => {
            if(err){
              console.log(err);
              res.send("da xay ra loi");
            }else{
              console.log("ok");
              res.send("ok ");
            }
          })
        }else if(userId){
           usersController.getUserByUserId(userId,(err,doc) => {
             if(err){
               console.log(err);
               res.send("ok");
             }else{
               console.log("ok");
               res.send("ok");
             }
           })
         }else {
           usersController.getAllUser ((err,doc) => {
             if(err){
               console.log(err);
               res.send("loi roi");
             }else{
               console.log("done");
             }
           })
         }
      } catch (e) {
          console.log(e);
      }
    });

    Router.put('/',(req,res)=>{

    });

    Router.delete('/',(req,res)=>{

    });

  module.exports = Router;
