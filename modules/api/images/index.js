  const express = require('express');

  const Router = express.Router();

  const imagesController = require('./imagesController');

  Router.post('/', (req, res) => {
    //khai bao object
    var imageInfo = {
      name : req.body.name,
      imageLink : req.body.imageLink,
      description : req.body.description
    }

    console.log('post data ',req.body);

    //luu lai vao database
    imagesController.addImage(imageInfo);
    //bao thanh cong
    res.send('Success');
  });

  Router.get('/', (req, res) => {
    try{
    if(!req.query.id && req.query.id !=0){

      imagesController.getAllImages().then((result) => {res.send(result)});

    }else if (req.query.id) {

      imagesController.getOneImage().then((result) => {res.send(result)});
    }
  }catch(e){
    console.log(e);
  }
  })

  Router.put('/', (req, res) => {
    try{
      if (req.body._id) {
        var newData = {
        name : req.body.name,
        imageLink : req.body.imageLink,
        description : req.body.description
      }
      imagesController.updateImageCollectionById(req.body.id, newData);

      res.send("updated");

  }
    else {
      res.send(`Don't have id`);
  }

  }catch(e){
    console.log(e);
  }

  })

  Router.delete('/', (req, res) => {
    try{  if(req.body._id){
      imagesController.deleteImageCollectionbyId(req.body._id);
      res.send("deleted");


    }else {
      res.send("can't delete");
    }
  }catch(e){
    res.send("delete fail");
  }
    })

    module.exports = Router;
