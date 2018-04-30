const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ScoreSchema = new Schema({
 score:{
    type: String,
    default: '0',
    required: true
 },
 lectureTitle: {
    type: string,
    required: true
 },
 sessionTitle: {
    type: string,
    required,
 },
 CourseID:{
    type: Schema.Types.ObjectId
 },
 scoreUserID: {
    type: Schema.Types.ObjectId
 }
});

const Score = module.exports = mongoose.model('Score', ScoreSchema);