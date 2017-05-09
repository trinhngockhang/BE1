const express = require('express');
const router = express.Router();

router.use('/libs',express.static(__dirname + '/libs'));
router.use('/css', express.static(__dirname + '/css'));
router.use('/js', express.static(__dirname + '/js'));

router.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

router.get('/image/add', (req, res) => {
  res.sendFile(__dirname + '/addImage.html');
})

router.get('/image/edit', (req, res) => {
  res.sendFile(__dirname + '/addImage.html');
})

router.get('/user/add', (req, res) => {
  res.sendFile(__dirname + '/addUser.html');
})

router.get('/user/edit', (req, res) => {
  res.sendFile(__dirname + '/addUser.html');
})

module.exports = router;
