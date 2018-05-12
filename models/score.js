const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ScoreSchema = new Schema({
 score:{
    type: String,
    default: 'none',
    required: true
 },
 lectureID: {
    type: String,
    required: true
 },
 sessionID: {
    type: String,
    required: true
 },
 courseID:{
    type: Schema.Types.ObjectId
 },
 userID: {
    type: Schema.Types.ObjectId
 }
});

const Score = module.exports = mongoose.model('Score', ScoreSchema);

module.exports.getScoreByID = function(userID, courseID, lectureID, sessionID, callback){
    const query = {userID: userID, courseID: courseID, lectureID: lectureID, sessionID: sessionID}
    Score.findOne(query, callback);
}

module.exports.addScore = function(newScore, callback){
    newScore.save(callback);
}