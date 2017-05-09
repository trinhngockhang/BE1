  const express = require('express');
  const Router = express.Router();

  const usersController = require('./usersController');

  const token = require('../../utilities/token');

  const bcrypt = require('bcrypt');
  Router.post('/signup', (req, res) => {
    var newUser = {
      username : req.body.username,
      password : req.body.password,
      email : req.body.email,
      avatar : req.body.avatar
    }

    usersController.createUser(newUser, (err, doc) => {
      if (err) {
        console.log(err);
        res.send('Co loi');
      } else {
        res.send('Tao user thanh cong');
      }
    })
  });

  Router.get('/', (req,res) => {
    try{
      if (req.query.s) {
        usersController.getCookedUserByNameAndEmail(req.query.s,(err,doc) => {
          if(err){
            console.log(err);
            res.send("co loi");
          } else {
            res.send(doc);
            console.log(doc);
          }
        })
      } else if(req.query.id){
        usersController.getCookedUsersById(req.query.id,(err,doc) => {
          if(err){
            console.log(err);
            res.send('loi roi');
          } else {
            res.send(doc);
          }
        })
    } else {
        usersController.getAllCookedUsers((err,doc) => {
        if(err){
          console.log(err);
          res.send("co loi");
        } else {
          res.send(doc);
        }
      })
      }
      } catch(e) {
        console.log(e);
        res.send("co exc");
      }

    })

  Router.get('/search', (req, res) => {
    usersController.getUserByUsername(req.query.searchString, (err, doc) => {
      if (err) {
        console.log(err);
        res.send('co loi');
      } else {
        res.send(doc);
      }
    })
  })

  Router.post('/signin', (req, res) => {
    usersController.signIn({username : req.body.username,
      password : req.body.password}, (err, user) =>{
      if (err){
      console.log(err);
      res.send('err');
    } else {
      var newToken = token.signToken(user);
      var userInfo = {
        id : user._id,
        username:user.username
      }
        req.session.token = newToken;
        req.session.userInfo = userInfo;
        res.send({username : user.username});
    }
    })
  })

  Router.get('/me',usersController.authenMiddleware, (req,res) => {
    if (req.userInfo) {
      res.send({username : req.userInfo.username});
    } else {
      res.send('Not authenticate');
    }
  })

  module.exports = Router;
