const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var usersModel = new Schema({
  userName:{type:String, required:true,unique:true},
  password:{type:String, required:true,unique:true},
  inGame:{type:String},
  avatar:{type:String},
  discribe:{type:String},
  address:{type:String},
  email:{type:String, required:true},
  phonenumber:{type:Number},
  userId:{type:Number}

})

module.exports = mongoose.model('users', usersModel);
