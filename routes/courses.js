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
const Evaluate = require('../models/evaluate');
const AWS = require('aws-sdk');
const cfsign = require('aws-cloudfront-sign');
const emoji = require('node-emoji');

router.get('/public/all', (req, res, next) => {
    Course.find({}).select('title details price scope')
        .exec((err, course) => {
        if(err){
            res.status(500).json({success: false, error: err, msg: Strings.message.courseGetFailed});
        }else{
            res.status(200).json({success: true, course: course});
        }
   });
});

router.get('/all', (req, res, next) => {
    Course.find({})
        .exec((err, course) => {
        if(err){
            res.status(500).json({success: false, error: err, msg: Strings.message.courseGetFailed});
        }else{
            res.status(200).json({success: true, course: course});
        }
   });
});


router.get('/all/teacher', (req, res, next) => {
    Course.find({scope: 'teacher'}).select('title details')
        .exec((err, course) => {
        if(err){
            res.status(500).json({success: false, error: err, msg: Strings.message.courseGetFailed});
        }else{
            res.status(200).json({success: true, course: course});
        }
   });
});

router.get('/all/parent', (req, res, next) => {
    Course.find({scope: 'parent'}).select('title details')
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

router.put('/enroll/course/social/:uid', passport.authenticate(Strings.strategy.socialStrategy, {session:false}), (req, res, next) => {
    SocialUser.findOne({_id: req.params.uid, courses: req.body.courseid}).then(courses => {
        if(courses)
        {
            res.status(500).json({success: false, error: err, msg: Strings.message.courseEnrollFailed});
        }
        else{
            SocialUser.getSocialUserById(req.params.uid, (err, user) => {
                user.courses.push(req.body.courseid);
                user.save();
            });
            res.status(201).json({success: true, msg: Strings.message.courseEnrollSuccess});
        }
        
    });
        
});

router.put('/enroll/course/:uid', passport.authenticate(Strings.strategy.localStrategy, {session:false}), (req, res, next) => {
    User.findOne({_id: req.params.uid, courses: req.body.courseid}).then(courses => {
        if(courses)
        {
            res.status(500).json({success: false, error: err, msg: Strings.message.courseEnrollFailed});
        }
        else{
            User.getUserById(req.params.uid, (err, user) => {
                user.courses.push(req.body.courseid);
                user.save();
            });
            res.status(201).json({success: true, msg: Strings.message.courseEnrollSuccess});
        }
        
    });
        
});

router.get('/all/enrolled/:id', passport.authenticate(Strings.strategy.localStrategy, {session:false}), (req, res, next) => {
    User.findOne({_id: req.params.id}).select('courses').populate('courses').then(data =>{
        res.status(200).json({success: true, courses:data});
    }).catch(err =>{
        console.log(err);
        res.status(500).json({success: false, error: err, msg: Strings.message.getEnrolledListFailed});
    });
});

router.get('/all/enrolled/public/:id', (req, res, next) => {
    User.findOne({_id: req.params.id}).select('courses').populate('courses').then(data =>{
        res.status(200).json({success: true, courses:data});
    }).catch(err =>{
        console.log(err);
        res.status(500).json({success: false, error: err, msg: Strings.message.getEnrolledListFailed});
    });
});

router.get('/all/enrolled/social/:id', passport.authenticate(Strings.strategy.socialStrategy, {session:false}), (req, res, next) => {
    SocialUser.findOne({socialID: req.params.id}).select('courses').populate('courses').then(data =>{
        res.status(200).json({success: true, courses:data});
    }).catch(err =>{
        console.log(err);
        res.status(500).json({success: false, error: err, msg: Strings.message.enrolledListGetFailed});
    });
});

// Add Comment
router.post('/comment/add/:id', (req, res, next) => {
    var emojiedBody = emoji.emojify(req.body.commentBody);
    console.log(emojiedBody);
    let newComment = new Comments({
        commentBody: emojiedBody,
        commentUser: req.body.commentUser,
        commentCourse: req.params.id,
        commentUserID: req.body.commentUserID
    });
    Comments.addComment(newComment, (err, comment) => {
        if(err){
            res.status(500).json({success: false, error: err, msg: Strings.message.commentInsertFailed});
        } else {
            res.status(201).json({success: true, data: comment, msg: Strings.message.commentInsertSuccess});
        }
    });
    //Comments.find({})
});

//Edit Comment
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
});

//Delete Comment
router.delete('/comment/delete/:id', (req, res, next) => {
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
    Comments.find({commentCourse: req.params.id}).select('_id commentUser commentBody commentDate commentUserID')
        .sort({commentDate: 'desc'})
        .exec((err, comment) => {
            if(err){
                res.status(500).json({success: false, error: err, msg: Strings.message.commentGetFailed});
            }else{
                res.status(200).json({success: true, comment: comment});
            }
        });
});

/*//Get Lectures by Course ID
router.get('/lectures/:id', passport.authenticate(Strings.strategy.localStrategy, {session:false}), (req, res, next) => {
    User.findOne({courses: req.params.id}).then(course => {
        if(course){
            Lectures.find({lectureCourse: req.params.id})
                .sort({_id: 'asc'})
                .exec((err, lectures) => {
                if(err){
                    res.status(500).json({success: false, error: err, msg: Strings.message.lectureGetFailed});
                }
                else{
                    res.status(200).json({success: true, lectures:lectures});
                }   
            });
        }
        else{
            res.status(401).json({success: false, error: err, msg: Strings.message.courseNotEnrolled});
        }
    }).catch(err => {
        console.log(err);
    });
});

//Get Lectures Social by Course ID
router.get('/lectures/social/:id', passport.authenticate(Strings.strategy.socialStrategy, {session:false}), (req, res, next) => {
    SocialUser.findOne({courses: req.params.id}).then(course => {
        if(course)
        {
            Lectures.find({lectureCourse: req.params.id})
                .sort({_id: 'asc'})
                .exec((err, lectures) => {
                if(err){
                    res.status(500).json({success: false, error: err, msg: Strings.message.lectureGetFailed});
                }
                else{
                    res.status(200).json({success: true, lectures:lectures});
                }
            });
        }
        else{
            res.status(401).json({success: false, error: err, msg: Strings.message.courseNotEnrolled});
        }
    }).catch(err =>{
        console.log(err);
    });
});

//Get Evaluation Questions by Lecture ID
router.get('/evalutaion/lecture/:id', passport.authenticate(Strings.strategy.localStrategy, {sesion: false}), (req, res, next) => {
    Evaluate.find({lectureIDofCourse: req.params.id})
        .exec((err, eval) => {
            if(err){
                res.status(500).json({success: false, error: err, msg: Strings.message.evaluationGetFailed});
            }
            else{
                res.status(200).json({success: true, data: eval});
            }
        });
});
*/

//GET VIDEO URL
router.get('/object/video/url', (req, res, next) => {
    var expired = new Date();
    var time = expired.getTime() + (60 * 1000);
    var signingParams = {
        keypairId: config.CLOUDFRONT_PUBLICACCESSID,
        privateKeyString: config.PRIVATEKEY_CLOUDFRONT,
        expireTime: time
    }
      
    // Generating a signed URL
    var signedUrl = cfsign.getSignedUrl(config.CLOUDFRONT_URL, signingParams);
    //var sendUrl = `<source src="`+signedUrl+`" type="video/mp4">`;
    res.status(200).json({success: true, signedUrl: signedUrl});
    console.log(signedUrl);
});

  
module.exports = router;

