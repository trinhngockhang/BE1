  const fs = require('fs');
  const imagesModel = require('./imagesModel');

  var addImage = (data,callback) => {
      imagesModel.findOne({})
      .select('id')
      .sort({id:-1})
      .exec((err,doc) => {
        if(err){
          console.log(err);
          callback(err);
        }else{
          var id= doc && doc.id ? doc.id +=1 : 1;
          data.id=id;
          imagesModel.create(data, (err, doc) => {
            if(err) {
              console.log(err);
              callback(err);
            } else {
              console.log(doc);
              callback(null,doc);
            }
          })
        }
      })
    }

  var getAllImages = (callback) => {
    imagesModel
    .find()
    .exec((err,docs) => {
      if(err) {
        console.log(err);
        callback(err);
      }else{
        console.log(docs);
        callback(null,docs);
      }
    })
  }

  var getOneImage = (id,callback)=>{
    imagesModel
     .findOne({'id': id})
     .exec((err, doc) => {
       if (err) console.log(err);
       else callback(err, doc);
   });
 };

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
