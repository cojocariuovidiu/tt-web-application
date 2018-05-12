const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const User = require('../models/user');
const SocialUser = require('../models/socialuser');
const nodemailer = require('nodemailer');
const Email = require('../config/email');
const Strings = require('../config/strings');

// Check for User
router.post('/check/mobile', (req,res,next) => {
  const mobile = req.body.mobile;
  User.getUserByMobile(mobile, (err, user) => {
    if(user){
      res.status(200).json({success: false, mobile: user.mobile, msg: Strings.message.userExists});
    }
    else{
      res.status(200).json({success: true, mobile: null, msg: Strings.message.mobileNumberAvailable});
    }
  });
});

//Register User
router.post('/register', (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    type: req.body.type,
    tag: req.body.tag,
    verified: req.body.verified,
    mobile: req.body.mobile,
    password: req.body.password
  });
  //console.log(newUser);
  User.getUserByMobile(req.body.mobile, (err, user) => {
    if(user){
      res.status(409).json({success: false, error: Strings.errors.duplicateUser, msg: Strings.message.userExists});
    }
    else{
      User.addUser(newUser, (err, user) => {
        if(err){
          res.status(500).json({success: false, error: Strings.errors.serverError, msg: Strings.message.registerFailed});
        } else {
          res.status(201).json({success: true, msg: Strings.message.registerSuccess,
            user: {
              name: user.name,
              email: user.email,
              type: user.type,
              tag: user.tag,
              mobile: user.mobile,
              verified: user.verified
            }
        });
        }
      });
    }
  })
});

//New Social User
router.post('/register/social', (req, res, next) => {
  let newUser = new SocialUser({
    socialID: req.body.socialID,
    name: req.body.name,
    email: req.body.email,
    tag: req.body.tag,
    verified: req.body.verified
  });

  SocialUser.getSocialUserBySId(req.body.socialID, (err, user) => {
    if(user){
      const token = jwt.sign({data: user}, config.secret, {
        expiresIn: Strings.values.loginExpiration
      });

      res.status(200).json({
        success: true,
        token: `Bearer ${token}`,
        msg: Strings.message.loginSuccess,
        user: {
          id: user._id,
          socialID: user.socialID,
          name: user.name,
          mobile: user.mobile,
          email: user.email,
          type: user.type,
          tag: user.tag,
          verified: user.verified
        }
      });
    }
    else{
      SocialUser.addSocialUser(newUser, (err, user) => {
        if(err){
          res.status(500).json({success: false, error: err, msg: Strings.message.registerFailed});
        } else {
          const token = jwt.sign({data: user}, config.secret, {
            expiresIn: Strings.values.loginExpiration
          });

          res.status(200).json({
            success: true,
            token: `Bearer ${token}`,
            msg: Strings.message.registerSuccess,
            user: {
              id: user._id,
              socialID: user.socialID,
              name: user.name,
              mobile: user.mobile,
              email: user.email,
              type: user.type,
              tag: user.tag,
              verified: user.verified
            }
          });
        }
      });
    }
  });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
  const mobile = req.body.mobile;
  const password = req.body.password;

  User.getUserByMobile(mobile, (err, user) => {
    if(err) throw err;
    if(!user){
      return res.status(404).json({success: false, error: Strings.errors.notFound, msg: Strings.message.userNotFound});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
        const newtoken = jwt.sign({data: user}, config.secret, {
          expiresIn: Strings.values.loginExpiration
        });
        res.status(200).json({
          success: true,
          token: `Bearer ${newtoken}`,
          msg: Strings.message.loginSuccess,
          user: {
            id: user._id,
            name: user.name,
            mobile: user.mobile,
            email: user.email,
            type: user.type,
            tag: user.tag,
            verified: user.verified
          }
        });
      }
      else{
        return res.status(401).json({success: false, error: Strings.errors.notAuthorized, msg: Strings.message.wrongPassword});
      }
    });
  });
});


//Profile Edit
router.patch('/profile/edit/:id', passport.authenticate(Strings.strategy.localStrategy, {session:false}), (req, res, next) => {
  const editUser = {
    name: req.body.name  || req.user.name,
    email: req.body.email || req.user.email,
    type: req.body.type || req.user.type,
    institutetype: req.body.institutetype || req.user.institutetype,
    institutename: req.body.institutename || req.user.institutename,
    gender: req.body.gender || req.user.gender,
    location: req.body.location || req.user.location
   }
  
  User.getUserById(req.params.id, (err, user) => {
    if(err) throw err;
    user.name = editUser.name;
    user.email = editUser.email;
    user.type = editUser.type;
    user.institutetype = editUser.institutetype;
    user.institutename = editUser.institutename;
    user.gender = editUser.gender;
    user.location = editUser.location;
    user.save((err, result) => {
      if(err)
      {
        res.status(500).json({success: false, error: err, msg: Strings.message.profileEditFailed});
      }
      else{
        res.status(200).json({success: true, msg: Strings.message.profileEditSuccess,
          user: {
            name: result.name,
            email: result.email,
            type: result.type,
            mobile: result.mobile,
            tag: result.tag,
            verified: result.verified,
            gender: result.gender,
            location: result.location,
            institutename: result.institutename,
            institutetype: result.institutetype
          }
        });
      }
    });
  });
});

//Social Profile Edit
router.patch('/profile/social/edit/:id', passport.authenticate(Strings.strategy.socialStrategy, {session:false}), (req, res, next) => {
  const editUser = {
    name: req.body.name  || req.user.name,
    email: req.user.email,
    mobile: req.body.mobile || req.user.mobile,
    type: req.body.type || req.user.type,
    institutetype: req.body.institutetype || req.user.institutetype,
    institutename: req.body.institutename || req.user.institutename,
    gender: req.body.gender || req.user.gender,
    location: req.body.location || req.user.location
  }
  SocialUser.getSocialUserById(req.params.id, (err, user) => {
    if(err) throw err;
    user.name = editUser.name;
    user.email = editUser.email;
    user.mobile = editUser.mobile;
    user.type = editUser.type;
    user.institutetype = editUser.institutetype;
    user.institutename = editUser.institutename;
    user.gender = editUser.gender;
    user.location = editUser.location;
    user.save((err, result) => {
      if(err)
      {
        res.status(500).json({success: false, error: err, msg: Strings.message.profileEditFailed});
      }
      else{
        res.status(200).json({success: true, msg: Strings.message.profileEditSuccess,
          user:{
            name: result.name,
            email: result.email,
            type: result.type,
            mobile: result.mobile,
            tag: result.tag,
            verified: result.verified,
            gender: result.gender,
            location: result.location,
            institutename: result.institutename,
            institutetype: result.institutetype
          }
        });
      }
    });
  });
});

//Change Password
router.patch('/change/password/:id', passport.authenticate(Strings.strategy.localStrategy, {session:false}), (req, res, next) => {
  var password = req.body.password;
  var newpassword = req.body.newpassword;
  User.getUserById(req.params.id, (err, user) => {
    if(err) throw err;
    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newpassword, salt, (err, hash) => {
            if(err) throw err;
            password = hash;
            user.password = password;
            user.save((err, result) => {
              if(err)
              {
                res.status(500).json({success: false, error: err, msg: Strings.message.passwordEditFailed});
              }
              else{
                res.status(200).json({success: true, msg: Strings.message.passwordEditSuccess});
              }
            });
          });
        });
      } else {
        return res.status(401).json({success: false, error: err, msg: Strings.message.wrongPassword});
      }
    });
    
  });
});

//Change Mobile
router.patch('/change/mobile/:id', passport.authenticate(Strings.strategy.localStrategy, {session:false}), (req, res, next) => {
  var password = req.body.password;
  var mobile = req.body.mobile;
  User.getUserById(req.params.id, (err, user) => {
    if(err) throw err;
    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
        user.mobile = mobile;
        user.save((err, result) => {
          if(err)
          {
            res.status(500).json({success: false, error: err, msg: Strings.message.mobileEditFailed});
          }
          else{
            res.status(200).json({success: true, msg: Strings.message.mobileEditSuccess});
          }
        });  
      } else {
        return res.status(401).json({success: false, error: err, msg: Strings.message.wrongPassword});
      }
    });
    
  });
});


//User Profile
router.get('/profile', passport.authenticate(Strings.strategy.localStrategy, {session:false}), (req, res, next) => {
  res.status(200).json({user: req.user});
});

//SocialUser Profile
router.get('/profile/social', passport.authenticate(Strings.strategy.socialStrategy, {session:false}), (req, res, next) => {
  res.status(200).json({user: req.user});
});

//Contact Us
router.post('/contact/us', (req, res, next) => {
  const body = {
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message
  }
  //var url = Email.content.redirectUrl2 + token;
  var html = `<p>` + body.message + `.</p></br><p>Sincerely,</p></br><p>` + body.name + `</p></br><p>` + body.email + `</p>`;
  let transporter = nodemailer.createTransport({
    service: Email.credentials.emailService,
    auth: {
      user: Email.credentials.devemail,
      pass: Email.credentials.devpassword
    }
  });
  var message = {
    from: body.email,
    to: Email.credentials.devemail,
    subject: body.subject,
    html: html
  };
  transporter.sendMail(message, (err, info) => {
    //console.log(err);
    //console.log(info);
    if (err) {
      res.status(500).json({success: false, error: err, msg: Strings.message.contactEmailSendFailed})
      throw err;
    }
    else{
      res.status(200).json({success: true, msg: Strings.message.contactEmailSendSuccess, body: body});
    }
  });
});

//TO DO User Verify, Forgot Password
router.post('/forgot/password', (req, res, next) => {
  User.getUserByMobile(req.body.mobile, (err, user) => {
    if(user)
    {
      /*const options = {
        pool: true,
        host: 'smtp-relay.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: config.devemail,
          password: config.devpassword
        }
      };*/
      const token = jwt.sign({data: user}, config.secret, {
        expiresIn: Strings.values.emailLinkExpiration
      });
      var url = Email.content.redirectUrl + token;
      var html = Email.content.html + `<h4> Dear ` + user.name + `</h4>` + Email.content.html2 +`<p>` + url + `</p>`;
      let transporter = nodemailer.createTransport({
        service: Email.credentials.emailService,
        auth: {
          user: Email.credentials.devemail,
          pass: Email.credentials.devpassword
        }
      });
      var message = {
        from: Email.credentials.devemail,
        to: user.email,
        subject: Email.content.emailSubject,
        html: html
      };
      transporter.sendMail(message, (err, info) => {
        //console.log(err);
        //console.log(info);
        res.status(200).json({success: true, msg: Strings.message.passwordEmailSuccess, mobile: user.mobile});
      });
    }
    else{
      res.status(500).json({success: false, error: err ,msg: Strings.message.passwordEmailFailed});
    }
  });

});

//Change Password
router.patch('/forgot/change/password/:token', passport.authenticate(Strings.strategy.localStrategy, {session:false}), (req, res, next) => {
  var password = req.body.password;
  //console.log(password);
  User.getUserById(req.user._id, (err, user) => {
    if(err) throw err;
    console.log(req.user._id);
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, (err, hash) => {
        if(err) throw err;
        password = hash;
        user.password = password;
        user.save((err, result) => {
          if(err)
          {
            res.status(500).json({success: false, error: err, msg: Strings.message.passwordEditFailed});
          }
          else{
            res.status(200).json({success: true, msg: Strings.message.passwordEditSuccess});
          }
        });
      });
    });
  });
});

//Send Verify Email
router.post('/send/verify/email', passport.authenticate(Strings.strategy.localStrategy, {session: false}), (req, res, next) => {
  User.getUserByMobile(req.body.mobile, (err, user) => {
    if(user)
    {
      /*const options = {
        pool: true,
        host: 'smtp-relay.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: config.devemail,
          password: config.devpassword
        }
      };*/
      const token = jwt.sign({data: user}, config.secret, {
        expiresIn: Strings.values.emailLinkExpiration
      });
      var url = Email.content.redirectUrl2 + token;
      var html = Email.content.html + `<h4> Dear ` + user.name + `</h4>` + Email.content.html3 +`<p>` + url + `</p>`;
      let transporter = nodemailer.createTransport({
        service: Email.credentials.emailService,
        auth: {
          user: Email.credentials.devemail,
          pass: Email.credentials.devpassword
        }
      });
      var message = {
        from: Email.credentials.devemail,
        to: user.email,
        subject: Email.content.emailSubject2,
        html: html
      };
      transporter.sendMail(message, (err, info) => {
        //console.log(err);
        //console.log(info);
        res.status(200).json({success: true, msg: Strings.message.emailVerifySendSuccess, mobile: user.mobile});
      });
    }
    else{
      res.status(500).json({success: false, error: err ,msg: Strings.message.emailVerifySendFailed});
    }
  });
});

//Verify Email
router.patch('/verify/email/:token', passport.authenticate(Strings.strategy.localStrategy, {session:false}), (req, res, next) => {
  var verified = req.body.verified;
  User.getUserById(req.user._id, (err, user) => {
    if(user) {
      user.verified = verified;
      //user.token = token;
      user.save((err, result) => {
        if(err)
        {
          res.status(500).json({success: false, error: err, msg: Strings.message.emailVerifyFailed});
        }
        else{
          const token = jwt.sign({data: user}, config.secret, {
            expiresIn: Strings.values.loginExpiration
          });
          res.status(200).json({success: true, msg: Strings.message.emailVerifySuccess,
            token: `Bearer ${token}`,
            user: {
              id: user._id,
              name: user.name,
              mobile: user.mobile,
              email: user.email,
              type: user.type,
              tag: user.tag,
              verified: user.verified
            }
          });
        }
      });
    }
    else{
      throw err;
      res.status(500).json({success: false, error: err, msg: Strings.message.emailVerifyFailed});
    }
  });
});

module.exports = router;
