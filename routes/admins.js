const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Course = require('../models/course');
const Comments = require('../models/comment');
//const Lectures = require('../models/lecture');
//const Evaluate = require('../models/evaluate');
const AWS = require('aws-sdk');
const cfsign = require('aws-cloudfront-sign');
const Strings = require('../config/strings');
const Admin = require('../models/admin');


//Add new Admin
router.post('/add/new/admin',(req, res, next) => {
    let newAdmin = new Admin({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    const secretkey = req.body.secretkey;
    if(secretkey === config.secretkey)
    {
        Admin.getAdminByEmail(req.body.email, (err, admin) => {
            if(admin){
              res.status(409).json({success: false, error: err, msg: Strings.message.userExists});
            }
            else{
              Admin.addAdmin(newAdmin, (err, admin) => {
                if(err){
                  res.status(500).json({success: false, error: err, msg: Strings.message.registerFailed});
                } else {
                  res.status(201).json({success: true, msg: Strings.message.registerSuccess, 
                    admin: {
                      name: admin.name,
                      email: admin.email
                    }
                });
                }
              });
            }
        })
    }
    else{
        res.status(401).json({success: false, error: Strings.errors.notAuthorized, msg: Strings.errors.notAuthorized});
    }
      
});

//Check Email
router.post('/check/email', (req,res,next) => {
    const email = req.body.email;
    Admin.getAdminByEmail(email, (err, user) => {
      if(user){
        res.status(200).json({success: false, email: user.email, msg: Strings.message.emailAddressFound});
      }
      else{
        res.status(200).json({success: true, email: null, msg: Strings.message.emailAddressNotFound});
      }
    });
});

// Authenticate Admin
router.post('/authenticate/admin', (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
  
    Admin.getAdminByEmail(email, (err, admin) => {
      if(err) throw err;
      if(!admin){
        return res.status(404).json({success: false, error: err, msg: Strings.message.userNotFound});
      }
  
      Admin.compareAdminPassword(password, admin.password, (err, isMatch) => {
        if(err) throw err;
        if(isMatch){
          const token = jwt.sign({data: admin}, config.secret, {
            expiresIn: Strings.values.loginExpiration
          });
            res.status(200).json({
                success: true,
                token: `Bearer ${token}`,
                msg: Strings.message.loginSuccess,
                admin: {
                  id: admin._id,
                  name: admin.name,
                  email: admin.email,
                  scope: admin.scope
                }
              });
        }
        else{
          return res.status(401).json({success: false, error: err, msg: Strings.message.wrongPassword});
        }
      });
    });
});


//Post Courses Admin
router.post('/add/new/course', (req, res, next) => {
    let newCourse = new Course({
        title: req.body.title,
        details: req.body.details,
        preview: req.body.preview,
        freevideo: req.body.price,
        price: req.body.price,
        scope: req.body.scope,
        sessions: req.body.sessions
    });
    Course.addCourse(newCourse, (err, course) => {
        if(err){
            res.status(500).json({success: false, error: err, msg: Strings.message.courseInsertFailed });
        } else {
            res.status(200).json({success: true, data: course, msg: Strings.message.courseInsertSuccess });
        }
    });
});

//Delete Course by Course ID
router.delete('/delete/course/:id', passport.authenticate([Strings.strategy.adminStrategy, Strings.strategy.uploaderStrategy], {session: false}), (req, res, next) => {
    Course.getCourseById(req.params.id , (err, course) =>{
        if(course)
        {
            course.remove((err, result) => {
                if(err)
                {
                    res.status(500).json({success: false, error: err, msg: Strings.message.courseDeleteFailed});
                }
                else{
                    res.status(200).json({success: true, data: result, msg: Strings.message.courseDeleteSuccess});
                }
            });
        }
        else if(err){
            res.status(404).json({success: false, error: err, msg: Strings.message.courseNotFound});
        }
        else
        {
            res.status(500).json({success: false, error: err, msg: Strings.message.courseInsertFailed});
        }
    });
});

//Get Courses
router.get('/all/courses', passport.authenticate([Strings.strategy.adminStrategy, Strings.strategy.uploaderStrategy], {session: false}), (req, res, next) => {
    Course.find({}).exec((err, course) => {
        if(err){
            res.status(500).json({success: false, error: err, msg: Strings.message.courseGetFailed});
        }else{
            res.status(200).json({success: true, data: course});
        }
    });
});


//list S3
router.get('/list/videos', (req, res, next) => {
    const dir = 'Courses/TestCourse/';
    let s3Bucket = new AWS.S3({
        accessKeyId: config.AWS_ACCESS_KEY_ID,
        secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
        region: config.AWS_REGION,
        Bucket: config.Bucket
    });
    var params = {
        Bucket: config.BUCKET,
        MaxKeys: 100,
        StartAfter: dir
    };
    s3Bucket.listObjectsV2(params, (err, data) => {
        if(err){
            console.log(err);
            res.status(500).json({success: false, msg: 'Error Occured'});
        }
        else{
            console.log(data);
            res.status(200).json({success: true, data: data});
        }
    });
});

router.get('/object/video/url', passport.authenticate([Strings.strategy.adminStrategy, Strings.strategy.uploaderStrategy], {session: false}), (req, res, next) => {
    var expired = new Date();
    var time = expired.getTime() + (600 * 1000);
    var signingParams = {
        keypairId: config.CLOUDFRONT_PUBLICACCESSID,
        privateKeyString: config.PRIVATEKEY_CLOUDFRONT,
        expireTime: time
    }
      
    // Generating a signed URL
    var signedUrl = cfsign.getSignedUrl(config.CLOUDFRONT_URL, signingParams);
    res.status(200).json({success: true, data: signedUrl});
    console.log(signedUrl);
});


module.exports = router;