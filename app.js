  console.log("Hello World");

  const fs=require('fs');

  const express=require('express');

  var app=express();


  app.use(express.static(__dirname + '/public'));

  app.get('/',function(req,res){
    res.send('./public/index.html');
  })
  app.get('/image',(req,res) =>{
    res.send("<img src ='https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/16115052_1772837696374833_6320288143498902261_n.jpg?oh=499a054f058db276d11e430bc327716d&oe=59865C15'>");
  })
  app.get('/image/add',(req,res) =>{
    var imageInfo={
      name:req.query.name,
      imageLink:req.query.imageLink,
      description:req.query.description
    }

    fs.writeFileSync('imageData.json',JSON.stringify(imageInfo));

    res.send('success');
  })

  app.listen(6969,function(req,res) {
    console.log('app listen on 6969');
  })
