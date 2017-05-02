  const express = require('express');

  const Router = express.Router();

  const imagesController = require('./imagesController');

  Router.post('/', (req, res) => {
    try{
    var imageInfo = {
      name : req.body.name,
      imageLink : req.body.imageLink,
      description : req.body.description
    }

    console.log('post data ',req.body);

    //luu lai vao database
    imagesController.addImage(imageInfo,(err,doc) => {
      if(err){
        console.log(err);
        res.send('co loi xay ra');
      }else {
        res.send('success');
      }
    });

  }catch(e){
    console.log("loi roi");
  };
  });

    Router.get('/', (req, res) => {
    var id = req.query.id;
    if(id){
      imagesController.getOneImage(id, (err, docs) => {
      if (err) {
      res.status(500).json({message: 'Error'});
      }
      res.json(docs);
      });
    }else{
      name = req.query.name;
      imagesController.getAllImages((err, docs) => {
      if (err) {
        res.status(500).json({message: 'Error'});
      }
        res.json(docs);
      });
    }
    });

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
