console.log('Hello nodemon');

const fs = require('fs');
//dung cai thu vien express
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const config = require('./config.json');
const imagesRouter = require(__dirname + '/modules/api/images/');
const usersRouter = require(__dirname + '/modules/api/users/');
const clientRouter = require('./client');
const session = require('express-session');
var app = express();

//set public folder public
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json({ extended : true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({ secret : 'lol' , resave : false, saveUninitialized: true,
cookie:{} }))

app.use('/', clientRouter);
app.use('/api/image', imagesRouter);
app.use('/api/users', usersRouter);

mongoose.connect(config.connectionString, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected db success');
  }
})

//mo 1 cai port de chay local
app.listen(config.port, (req, res) => {
  console.log(`app listen on ${config.port}`);
})
