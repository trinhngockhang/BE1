    const express = require('express');

    const Router = express.Router();

    const validEmail = require('email-validator');

    const usersController = require('./usersController');

    Router.post('/',(req,res)=>{
      var userInfo = {
        userName : req.body.userName,
        password : req.body.password,
        email : req.body.email
      }
      if(!validEmail.validate(userInfo.email)){
        res.send("Invalid email");
      }
      else{
        try{
          console.log('post data ',req.body);
          //luu lai vao database
          usersController.createUser(userInfo,(err,doc) => {
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
              res.send(doc);
            }
          })
        }else if(userId){
          usersController.getUserByUserId(userId, (err,doc) => {
            if(err){
               console.log(err);
               res.send("da xay ra loi");
            }else{
               console.log("ok");
               res.send(doc);
            }
          })
        }else {
          usersController.getAllUser((err,doc) => {
             if(err){
               console.log(err);
               res.send("loi roi ");
             }else{
               console.log("done");
               res.send(doc);
             }
          })
        }
      } catch (e) {
          console.log(e);
      }
    });

    Router.put('/',(req,res)=>{
      var id = req.body.id;
      var newData = {
        password: req.body.password,
        email: req.body.email,
        address: req.body.address,
        phonenumber: req.body.phonenumber,
        discribe: req.body.discribe,
        avatar: req.body.avatar,
        inGame: req.body.inGame
      }
        
      usersController.updateUserById(id,
      newData,(err,doc)=>{
        if(err){
          res.send("co loi " +err);
        }
        else{
          res.send("update success ");
        }
      });
    });



  module.exports = Router;
