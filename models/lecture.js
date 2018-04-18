const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const LectureSchema = new Schema({
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
  lectureCourse:{
    type: Schema.Types.ObjectId,
    ref: 'Course',
    req: true
  },
  lecturePrice:{
    type: String,
    default: 'Free'
  }
});

const Lecture = module.exports = mongoose.model('Lecture', LectureSchema);

module.exports.getAllLecture = function(callback){
  Lecture.find(callback);
}

module.exports.addLecture = function(newLecture, callback){
  newLecture.save(callback);
}

module.exports.findLectureByCourseId = function(id, callback){
  const query = {lectureCourse: id}
  Lecture.findOne(query, callback);
}

module.exports.findLectureById = function(id, callback){
  const query = {_id: id}
  Lecture.findOne(query, callback);
}

