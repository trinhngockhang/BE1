  const fs = require('fs');
  const usersModel = require('./usersModel');

  var createUser = (data,callback) => {
    usersModel.findOne({})
    .select('userId')
    .sort({userId:-1})
    .exec((err,doc) => {
      if(err){
        console.log(err);
        callback(err);
      }else{
        var id = doc && doc.userId ? doc.userId+= 1 : 1;
        data.userId=id;
        usersModel.create(data, (err, doc) => {
          if (err) {
            console.log(err);
            callback(err);
            } else {
              console.log(doc);
              callback(null, doc);
          }
        })
      }
    })
  }

  var getUserByName = (name, callback) => {
    usersModel.find({"userName" : {"$regex": name} }
    , (err, doc) => {
      if (err){
        callback(err);
      } else {
        callback(null,doc);
        }
    })
  }

  var getUserByUserId = (id, callback) => {
    usersModel.find({"userId" : id}, (err, doc) => {
      if (err) {
        callback(err);
      } else {
        callback(null, doc);
      }
    })
  }

  var getAllUser = (callback) =>{
    usersModel.find({})
    .exec((err,doc) => {
      if(err){
        callback(err);
        console.log("loi roi");
      }else{
        callback(null,doc);
        }
    })
  }

  var updateUserById = (userId, newData,callback) => {
  try {
    usersModel.updateOne({
      userId:userId
    }, {
      $set: {
        password: newData.password,
        email: newData.email,
        address: newData.address,
        phonenumber: newData.phonenumber,
        discribe: newData.discribe,
        avatar: newData.avatar,
        inGame: newData.inGame
      }
    },(err,doc)=>{
      if(err){
        callback(err);
      }
      else{
        callback(null, doc);
      }
    });
  } catch (e) {
    console.log(e);
  }
};
  module.exports = {
    createUser:createUser,
    getUserByName,
    getUserByUserId,
    getAllUser,
    updateUserById
  }
