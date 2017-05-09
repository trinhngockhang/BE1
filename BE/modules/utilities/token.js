const jwt = require('jsonwebtoken');

const secretKey = 'secretKey';

var signToken = (user) => {
  return jwt.sign({id : user._id, username : user.username, email : user.email },secretKey );
}

var decodeToken = (token) =>{
  return jwt.verify(token, secretKey);
}

var verifyToken = (user, token) => {
  try {
    var decoded = jwt.verify(token, user._id.toString());
    return (user.username == decoded.username && user.email && decoded.email);
  } catch (err) {
    console.log(err);
    return false;
  }
}

module.exports = {
  signToken,
  decodeToken
}
