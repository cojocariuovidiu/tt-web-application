const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const CommentSchema = new Schema({
    commentBody: {
        type: String,
    },
    commentUser:{
        type: String,
    },
    commentDate:{
        type: Date,
        default: Date.now
    },
    commentCourse: {
        type: Schema.Types.ObjectId,
        ref: 'Course'
    },
    commentUserID:{
        type: Schema.Types.ObjectId
    }
});

const Comments = module.exports = mongoose.model('Comment', CommentSchema);


module.exports.addComment = function(newComment, callback){
    newComment.save(callback);
}

module.exports.getCommentById = function(id, callback){
    Comments.findById(id, callback);
}

