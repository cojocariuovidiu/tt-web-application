const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const Schema = mongoose.Schema;

// User Schema
const UploaderSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const Uploader = module.exports = mongoose.model('Uploader', UploaderSchema);

module.exports.getUploaderById = function(id, callback){
    Uploader.findById(id, callback);
}

module.exports.getUploaderByEmail = function(email, callback){
  const query = {email: email}
  Uploader.findOne(query, callback);
}


module.exports.addUploader = function(newUser, callback){
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

module.exports.compareUploaderPassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}