  const mongoose = require('mongoose');

  const usersModel = require('./usersModel');
  const token = require('../../utilities/token');
  const bcrypt = require('bcrypt');

  var createUser = (data, callback) => {
    usersModel.findOne({})
      .select('id')
      .sort({id : -1})
      .exec((err, doc) => {
        if (err) {
          console.log(err);
          callback(err);
        } else {
          var id;
          if (doc && doc.id) {
            id = doc.id + 1;
          } else {
            id = 1;
          }
          data.id = id;
          usersModel.create(data, (err, doc) => {
            if (err) {
              console.log(err);
              console.log('message', err.message);
              callback(err);
            } else {
              callback(null,doc);
            }
          })
        }
      })
  }

  var getAllUsers = (cb) => {
    usersModel.find({}).exec((err,doc) => {
      if(err){
        cb(err);
      } else {
        console.log(doc);
        cb(null,doc);
      }
    })
  }

  var getUserByUsername = (username, callback) => {
    try {
      usersModel.findOne({"username" : username}).exec((err, user) => {
        if (err) {
          callback(err);
        } else {
          callback(null, user);
        }
      })
    } catch (e) {
      console.log(e);
      callback(e);
    }
  }

  var searchUserByUsernameAndEmail = (searchString, callback) => {
    try {
      usersModel.find({ $text: { $search: searchString } }).exec((err, doc) => {
        if (err) {
          callback(err);
        } else {
          callback(null, doc);
        }
      })
    } catch (e) {
      console.log(e);
      callback(e);
    }
  }

  var signIn = (data, callback) => {
    if (data && data.username && data.password) {
      getUserByUsername(data.username, (err, user) => {
        if(user){
          console.log("abc");
          bcrypt.compare(data.password, user.password, (err, res) => {
            if (res) {
              callback(null, user);
            } else {
              callback('sai password');
            }
          })
        } else {
          callback('user not found');
        }
      })
    }
  }
  var getUserByToken = (usertoken,callback) => {
    var userInfo = token.decodeToken(usertoken);
    getUserByUsername(userInfo.username, (err,doc) => {
      if (doc) {
        callback(null,doc);
      } else {
        callback('token not valid');
      }
    })
  }
  var authenMiddleware = (req,res, next) => {
    var userToken = req.session.token;

    getUserByToken(userToken, (err,doc) => {
      if (doc) {
        req.userInfo = {
          id : doc._id,
          username : doc.username
        }
        next();
      } else {
        res.send('Not authenticate');
      }
    })
  }

  var getCookedUserByNameAndEmail = (searchString,cb) => {
    searchUserByUsernameAndEmail(searchString,(err,doc) => {
      if(err){
        console.log("err " + err);
        cb(err);
      } else {
        var newDoc = doc.map((value) => {
        return cookUserData(value);
      })
        cb(null,newDoc);
      }
    })
  }

  var getAllCookedUsers = (cb) => {
    getAllUsers((err,doc) => {
      if(err){
        console.log(err);
        cb(err);
      } else {
        var newDoc = doc.map((value) => {
          return cookUserData(value);
        })
        cb(null,newDoc);
      }
    })
  }

  var getCookedUsersById = (id,cb) => {
    getUserById(id,(err,doc) => {
      if(err){
        console.log(err);
        cb(err);
      } else {
        var newDoc = doc.map((value) => {
          return cookUserData(value);
        })
        cb(null,newDoc);
      }
    })
  }

  var getUserById = (id,cb) => {
    usersModel.find({'id':id}).exec((err,doc) => {
      if(err){
        cb(err);
      } else {
        console.log(doc);
        cb(null,doc);
      }
    })
  }

  var cookUserData = (rawUserData) =>{
    return {
      id : rawUserData.id,
      username : rawUserData.username,
      email : rawUserData.email,
  		avatar : rawUserData.avatar,
      createdDate : rawUserData.createdDate,
      updatedDate : rawUserData.updatedDate
    }
  }

  module.exports = {
    createUser,
    searchUserByUsernameAndEmail,
    signIn,
    authenMiddleware,
    getAllCookedUsers,
    getCookedUserByNameAndEmail,
    getCookedUsersById
  }
