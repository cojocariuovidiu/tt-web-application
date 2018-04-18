const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const CourseSchema = new Schema({
  title:{
    type: String,
    required: true
  },
  details:{
    type: String,
    required: true
  },
  price:{
    type: String,
    default: 'Free'
  },
  scope:{
    type: String,
    required: true
  }
});

const Course = module.exports = mongoose.model('Course', CourseSchema);

module.exports.getAllCourse = function(callback){
  Course.find(callback);
}

module.exports.getCourseById = function(id, callback){
  const query = {_id: id}
  Course.findOne(query, callback);
}

module.exports.addCourse = function(newCourse, callback){
  newCourse.save(callback);
}