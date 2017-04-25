  const fs = require('fs');
  const imagesModel = require('./imagesModel');

  var addImage = (data) => {

    imagesModel.create(data, (err, doc) => {
      if (err) {
        console.log(err);
      } else {
        console.log(doc);
      }
    })
  }

  var getAllImages = () => {
    return imagesModel.find({},function(err){
      if(err) throw err;
    });
  }

  var getOneImage = ()=>{
    return imagesModel.findOne({_id:id},function(err){
      if(err) throw err;
    });
  }
  var deleteImageCollectionbyId= (id) => {
    imagesModel.remove({_id:id}, function(err){
    if(err) throw err;
  });
  }

  var updateImageCollectionById=(id,newData)=>{
    imagesModel.findOneAndUpdate(id, newData, {upsert:true}, function(err, doc){
    if (err) return res.send( { error: err });

  });
  }

  module.exports = {
    getAllImages,
    getOneImage,
    updateImageCollectionById,
    addImage,
    deleteImageCollectionbyId
  }
