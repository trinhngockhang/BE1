  const fs = require('fs');
  const express = require('express');

  var app = express();
  console.log("chay được rồi nhé ahihi");
  //set public folder public
  app.use(express.static(__dirname + '/public'));

  app.get('/', (req, res) => {
      res.send('./public/index.html');
  });

  app.get('/image/add', (req, res) => {

      var data = fs.readFileSync('imageData.json','utf-8');

      var json =JSON.parse(data);

      var imageInfo = {
          name: req.query.name,
          imageLink: req.query.imageLink,
          description: req.query.description
      }
      json.push(imageInfo);
      fs.writeFileSync('imageData.json',JSON.stringify(json));
      res.send('Success!');
    });

    app.get('/image/get', (req,res) => {
      var data = fs.readFileSync('imageData.json','utf-8');
      var post='';
      var json =JSON.parse(data);

    let i=0;
    while (i<json.length) {
      post += json[i].name + "<br>" + "<img src = " + json[i].imageLink + ">" + "<br>" + json[i].description + "<br> <br> <br> <br>";
      i++;
    }
      res.send(post);
    });

  //mo 1 port de chay local
    app.listen(6969, (req, res) => {
      console.log('App is running on 6969...');
  });
  var i=0;
