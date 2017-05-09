const fs = require('fs');
const imagesModel = require('./imagesModel');

var addImage = (data, callback) => {
  imagesModel.findOne({})
    .select('id')
    .sort({id : -1})
    .exec((err, doc) => {
      if (err) {
        console.log(err);
        callback(err);
      } else {
        var id;
        console.log('doc',doc);
        if (doc && doc.id) {
          id = doc.id + 1
        } else {
          id = 1;
        }

        data.id = id;
        imagesModel.create(data, (err, doc) => {
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

var getAllImages = (cb) => {
  imagesModel.find({}).populate('createBy').exec((err, doc) => {
    if (err) {
      cb(err);
    } else {
      console.log('result',doc);
      cb(null, doc);
    }
  })
}


var fetchImageCollection = () => {
  var imageInfoCollection = [];

  try {
    var contents = fs.readFileSync('imageData.json','utf-8');

    imageInfoCollection = JSON.parse(contents);

  } catch (e) {
    console.log(e);
  }

  return imageInfoCollection;
}

var saveImageCollection = (data) => {
    fs.writeFileSync('imageData.json', JSON.stringify(data));
}

var updateImageCollectionById = (id, newData) => {
  var imageInfoCollection = fetchImageCollection();

  if (id < 1 || id > imageInfoCollection.length)
    return 'Id invalid';
  else {
    imageInfoCollection[id-1] = newData;

    saveImageCollection(imageInfoCollection);
    return 'Success';
  }
}

var getAllCookedImages = (cb) => {
  getAllImages((err, doc) => {
    if(err) {
      console.log(err);
      cb(err)
    }else {
      var newDoc = doc.map((value) => {
        return cookImageData(value);
      })
      cb(null,newDoc);
    }
  })
}

var cookImageData = (rawImageData) =>{
  return {
      id : rawImageData._id,
      imageUrl : rawImageData.imageLink,
      view : rawImageData.views,
      plus : rawImageData.likes.length,
      posterAvatar : rawImageData.createBy ? rawImageData.createBy.avatar : '' ,
      posterName : rawImageData.createBy ? rawImageData.createBy.username : '' ,
      posterTitle : rawImageData.name,
      content : rawImageData.description
  }
}

module.exports = {
  fetchImageCollection,
  saveImageCollection,
  updateImageCollectionById,
  addImage,
  getAllImages,
  cookImageData,
  getAllCookedImages
}
