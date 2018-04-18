const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const EvaluateSchema = new Schema({
  questionLabel:{
    type: String,
    required: true
  },
  optionA:{
    type: String,
    required: true
  },
  optionB: {
    type: String,
    required: true
  },
  optionC: {
    type: String,
    required: true
  },
  optionD: {
    type: String,
    required: true
  },
  correctAnswer:{
    type: String,
    required: true       
  },
  lectureIDofCourse:{
    type: Schema.Types.ObjectId,
    ref: 'Lecture'
  }
});

const Evaluate = module.exports = mongoose.model('Evaluate', EvaluateSchema);

module.exports.findEvaluateByLectureId = function(id, callback){
  const query = {lectureIDofCourse: id}
  Evaluate.findOne(query, callback);
}

module.exports.addEvaluate = function(newEvaluate, callback){
  newEvaluate.save(callback);
}

module.exports.findEvaluateById = function(id, callback){
  const query = {_id: id}
  Evaluate.findOne(query, callback);
}
