const mongoose = require('mongoose');
const config = require('../config/database');
const Schema = mongoose.Schema;
// User Schema
const SocialUserSchema = mongoose.Schema({
  socialID:{
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    default: 'empty'
  },
  type: {
    type: String,
    default: 'both'
  },
  tag: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  verified: {
    type: String,
    default: 'true'
  },
  institutetype:{
    type: String,
    default: 'empty'
  },
  institutename:{
    type: String,
    default: 'empty'
  },
  gender:{
    type: String,
    default: 'empty'
  },
  location: {
    type: String,
    default: 'empty'
  },
  courses: [{
    type: Schema.Types.ObjectId,
    ref: 'Course'
  }]
});


const SocialUser = module.exports = mongoose.model('SocialUser', SocialUserSchema);

module.exports.getSocialUserById = function(id, callback){
  SocialUser.findById(id, callback);
}

module.exports.getSocialUserBySId = function(socialID, callback){
  const query = {socialID: socialID}
  SocialUser.findOne(query, callback);
}

module.exports.addSocialUser = function(newUser, callback){
  newUser.save(callback);
}
