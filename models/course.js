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
  },
  lectures: [
    {
      lectureTitle:{
        type: String,
        required: true
      },
      lectureDetails:{
        type: String,
        required: true
      },
      lectureLink:{
        type: String,
        required: true
      },
      lecturePrice:{
        type: String,
        default: 'Free'
      },
      lectureQuestions:[
        {
          questionlabel: {
            type: String,
            required: true
          },
          option1: {
            type: String,
            required: true
          },
          option2: {
            type: String,
            required: true
          },
          option3: {
            type: String,
            required: true
          },
          option4: {
            type: String,
            required: true
          },
          answer: {
            type: String,
            required: true
          }
        }
      ]
    }
  ]
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