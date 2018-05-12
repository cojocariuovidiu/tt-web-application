const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Course = require('../models/course');
const User = require('../models/user');
const SocialUser = require('../models/socialuser');
const Comments = require('../models/comment');
const Strings = require('../config/strings');
const AWS = require('aws-sdk');
const cfsign = require('aws-cloudfront-sign');
const Score = require('../models/score');

router.get('/public/all', (req, res, next) => {
    Course.find({}).select('title details price scope preview freevideo _id')
        .exec((err, course) => {
        if(err){
            res.status(500).json({success: false, error: err, msg: Strings.message.courseGetFailed});
        }else{
            res.status(200).json({success: true, course: course});
        }
   });
});


router.get('/public/all/teacher', (req, res, next) => {
    Course.find({scope: 'teacher'}).select('title details price scope preview freevideo')
        .exec((err, course) => {
        if(err){
            res.status(500).json({success: false, error: err, msg: Strings.message.courseGetFailed});
        }else{
            res.status(200).json({success: true, course: course});
        }
   });
});

router.get('/public/all/parent', (req, res, next) => {
    Course.find({scope: 'parent'}).select('title details price scope preview freevideo')
        .exec((err, course) => {
        if(err){
            res.status(500).json({success: false, error: err, msg: Strings.message.courseGetFailed});
        }else{
            res.status(200).json({sucess: true, course: course});
        }
   });
});

router.get('/byId/:id', (req, res, next) => {
    Course.getCourseById(req.params.id, (err, course) => {
        if(err)
        {
            res.status(500).json({success: false, error: err, msg: Strings.message.courseGetFailed});
        }
        else
        {
            res.status(200).json({success: true, course: course});
        }
    });
});

router.put('/enroll/course/social/:courseid', passport.authenticate(Strings.strategy.socialStrategy, {session:false}), (req, res, next) => {
    SocialUser.findOne({_id: req.user._id, courses: req.body.courseid}).then((courses, err) => {
        if(courses)
        {
            res.status(500).json({success: false, error: "Duplicate", msg: Strings.message.courseEnrollFailed});
        }
        else if(err){
            throw err;
        }
        else{
            SocialUser.getSocialUserById(req.user._id, (err, user) => {
                user.courses.push(req.body.courseid);
                user.save();
            });
            res.status(201).json({success: true, msg: Strings.message.courseEnrollSuccess});
        }
        
    });
        
});

router.put('/enroll/course/:courseid', passport.authenticate(Strings.strategy.localStrategy, {session:false}), (req, res, next) => {
    User.findOne({_id: req.user._id, courses: req.body.courseid}).then((courses, err) => {
        if(courses)
        {
            res.status(500).json({success: false, error: "Duplicate", msg: Strings.message.courseEnrollFailed});
        }
        else if(err){
            throw err;
        }
        else{
            User.getUserById(req.user._id, (err, user) => {
                user.courses.push(req.body.courseid);
                user.save();
            });
            res.status(201).json({success: true, msg: Strings.message.courseEnrollSuccess});
        }
        
    });
        
});

/*//Get Scores
router.get('/score/:courseid', passport.authenticate(Strings.strategy.socialStrategy, {session: false}), (req, res, next) => {
    Score.getScoreByID()
});*/

//Scoring Local
router.post('/score/:courseid', passport.authenticate(Strings.strategy.localStrategy, {session: false}), (req, res, next) => {
    let newScore = new Score({
        score: req.body.lectureScore,
        lectureID: req.body.lectureID,
        sessionID: req.body.sessionID,
        courseID: req.params.courseid,
        userID: req.user._id
    });
    Score.getScoreByID(newScore.userID, newScore.courseID, newScore.lectureID, newScore.sessionID, (err, score) => {
        if(score){
            res.status(409).json({success: false, error: "Duplicate", score: score ,msg: "Score Exists"});
        }
        else if(err){
            res.status(500).json({success: false, error: Strings.errors.serverError, msg: "Failed to Save"});
        }
        else{
            Score.addScore(newScore, (err, score) => {
                if(err){
                    res.status(500).json({success: false, error: Strings.errors.serverError, msg: "Failed to Save"});
                }
                else{
                    res.status(200).json({success: true, score: score, msg: "Score Saved"});
                }
            });
        }
    });
});

//Scoring Social
router.post('/score/social/:courseid', passport.authenticate(Strings.strategy.socialStrategy, {session: false}), (req, res, next) => {
    let newScore = new Score({
        score: req.body.score,
        lectureID: req.body.lectureID,
        sessionID: req.body.sessionID,
        courseID: req.params.courseid,
        userID: req.user._id
    });
    Score.getScoreByID(newScore.userID, newScore.courseID, newScore.lectureID, newScore.sessionID, (err, score) => {
        if(score){
            res.status(409).json({success: false, error: "Duplicate", score: score, msg: "Score Exists"});
        }
        else if(err){
            res.status(500).json({success: false, error: Strings.errors.serverError, msg: "Failed to Save"});
        }
        else{
            Score.addScore(newScore, (err, result) => {
                if(err){
                    res.status(500).json({success: false, error: Strings.errors.serverError, msg: "Failed to Save"});
                }
                else{
                    res.status(200).json({success: true, score: result, msg: "Score Saved"});
                }
            });
        }
    });
});

//Check Score
router.post('/score/check/:courseid', passport.authenticate(Strings.strategy.localStrategy, {session: false}), (req, res, next) => {
    const lectureID = req.body.lectureID; 
    const courseID = req.params.courseid;
    const userID = req.user._id;
    const sessionID = req.body.sessionID;
    Score.getScoreByID(userID, courseID, lectureID, sessionID, (err, score) => {
        if(score){
            res.status(200).json({success: true, score: score, msg: "Score Exists"});
        }
        else{
            res.status(200).json({success: false, score: score, msg: "Score does not Exist"});
        }
    });
});

//Check Score Social
router.post('/score/check/social/:courseid', passport.authenticate(Strings.strategy.socialStrategy, {session: false}), (req, res, next) => {
    const lectureID = req.body.lectureID; 
    const courseID = req.params.courseid;
    const userID = req.user._id;
    const sessionID = req.body.sessionID;
    Score.getScoreByID(userID, courseID, lectureID, sessionID, (err, score) => {
        if(score){
            res.status(200).json({success: true, score: score, msg: "Score Exists"});
        }
        else{
            res.status(200).json({success: false, score: score, msg: "Score does not Exist"});
        }
    });
});

router.get('/all/enrolled/:id', passport.authenticate(Strings.strategy.localStrategy, {session:false}), (req, res, next) => {
    User.findOne({_id: req.params.id}).select('courses').populate('courses').then(data =>{
        res.status(200).json({success: true, course: data});
    }).catch(err =>{
        console.log(err);
        res.status(500).json({success: false, error: err, msg: Strings.message.getEnrolledListFailed});
    });
});

router.get('/all/enrolled/social/:id', passport.authenticate(Strings.strategy.socialStrategy, {session:false}), (req, res, next) => {
    SocialUser.findOne({_id: req.params.id}).select('courses').populate('courses').then(data =>{
        res.status(200).json({success: true, course:data});
    }).catch(err =>{
        console.log(err);
        res.status(500).json({success: false, error: err, msg: Strings.message.enrolledListGetFailed});
    });
});

// Add Comment
router.post('/comment/add/:id', passport.authenticate([Strings.strategy.localStrategy, Strings.strategy.socialStrategy], {session: false}), (req, res, next) => {
    let newComment = new Comments({
        commentBody: req.body.commentBody,
        commentUser: req.body.commentUser,
        commentCourse: req.body.commentCourse,
        commentUserID: req.body.commentUserID
    });
    //console.log(newComment);
    Comments.addComment(newComment, (err, comment) => {
        if(err){
            res.status(500).json({success: false, error: err, msg: Strings.message.commentInsertFailed});
            console.log(err);
        } else {
            res.status(201).json({success: true, data: comment, msg: Strings.message.commentInsertSuccess});
        }
    });
    //Comments.find({})
});

/*//Edit Comment
router.patch('/comment/edit/:id', (req, res, next) => {
    Comments.findById(req.params.id, (err, comment) => {
        if(err)
        {
            res.status(404).json({success: false, error: err, msg: Strings.message.commentNotFound });
        }
        else
        {
            comment.commentBody = req.body.commentBody;
            comment.save((err, result) =>{
                if(err)
                {
                    res.status(500).json({success: false, error: err, msg: Strings.message.commentEditFailed});
                }
                else{
                    res.status(200).json({success: true, data: result ,msg: Strings.message.commentEditSuccess});
                }
            });
        }
    });
});*/

//Delete Comment
router.delete('/comment/delete/:id', passport.authenticate([Strings.strategy.localStrategy, Strings.strategy.socialStrategy], {session: false}), (req, res, next) => {
    Comments.findById(req.params.id, (err, comment) => {
        if(err)
        {
            res.status(404).json({success: false, error: err, msg: Strings.message.commentNotFound});
        }
        else
        {
            if(comment == null){
                res.status(500).json({success: false, error: err, msg: Strings.message.commentDeleteFailed});
            }
            else{
                comment.remove((err, result) =>{
                    if(err)
                    {
                        res.status(500).json({success: false, error: err, msg: Strings.message.commentDeleteFailed});
                    }
                    else{
                        res.status(200).json({success: true, data: result, msg: Strings.message.commentDeleteSuccess});
                    }
                });
            }
        }
    });
});

//Get Comment
router.get('/comment/:id', (req, res, next) => {
    Comments.find({commentCourse: req.params.id})
        .sort({commentDate: 'desc'})
        .exec((err, comment) => {
            if(err){
                res.status(500).json({success: false, error: err, msg: Strings.message.commentGetFailed});
            }else{
                res.status(200).json({success: true, comment: comment});
            }
        });
});

//GET VIDEO URL
router.post('/object/video/url', passport.authenticate([Strings.strategy.localStrategy, Strings.strategy.socialStrategy], {session: false}), (req, res, next) => {
    var link = req.body.videoLink;
    var expired = new Date();
    var time = expired.getTime() + (60 * 1000);
    var signingParams = {
        keypairId: config.CLOUDFRONT_PUBLICACCESSID,
        privateKeyString: config.PRIVATEKEY_CLOUDFRONT,
        expireTime: time
    }
    var videoUrl = config.CLOUDFRONT_URL + link;  
    // Generating a signed URL
    var signedUrl = cfsign.getSignedUrl(videoUrl, signingParams);
    //var sendUrl = `<source src="`+signedUrl+`" type="video/mp4">`;
    res.status(200).json({success: true, signedUrl: signedUrl});
    //console.log(signedUrl);
});

//GET IMAGE URL
router.post('/object/image/url', passport.authenticate([Strings.strategy.localStrategy, Strings.strategy.socialStrategy], {session: false}), (req, res, next) => {
    var link = req.body.imageLink;
    var expired = new Date();
    var time = expired.getTime() + (1440 * 60 * 1000);
    var signingParams = {
        keypairId: config.CLOUDFRONT_PUBLICACCESSID,
        privateKeyString: config.PRIVATEKEY_CLOUDFRONT,
        expireTime: time
    }
    var videoUrl = config.CLOUDFRONT_URL + link;  
    // Generating a signed URL
    var signedUrl = cfsign.getSignedUrl(videoUrl, signingParams);
    //var sendUrl = `<source src="`+signedUrl+`" type="video/mp4">`;
    res.status(200).json({success: true, signedUrl: signedUrl});
    //console.log(signedUrl);
});

  
  
module.exports = router;

