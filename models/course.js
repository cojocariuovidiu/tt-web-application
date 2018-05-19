const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const CourseSchema = new Schema({
  courseTitle:{
    type: String,
    required: true
  },
  courseDetail:{
    type: String,
    required: true
  },
  coursePreview:{
    type: String,
    required: true
  },
  courseFreeVideo:{
    type: String,
    required: true
  },
  coursePrice:{
    type: String,
    default: 'Free'
  },
  courseScope:{
    type: String,
    required: true
  },
  courseSessions:[
  {
    sessionID:{
      type: String,
      required: true
    },
    sessionTitle:{
      type: String,
      required: true
    },
    sessionNo:{
      type: String,
      required: true
    },
    lectures: [
    {
      lectureID:{
        type: String,
        required: true
      },
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