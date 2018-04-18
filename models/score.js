const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ScoreSchema = new Schema({
 score:{
    type: String,
    default: '0'
 },
 lectureIDofCourse: {
    type: Schema.Types.ObjectId,
    ref: 'Lecture'
 },
 scoreUserID: {
    type: Schema.Types.ObjectId
 }
});

const Score = module.exports = mongoose.model('Score', ScoreSchema);