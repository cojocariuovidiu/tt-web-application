const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const SocialUser = require('../models/socialuser');
const Admin = require('../models/admin');
const Uploader = require('../models/uploader');
const config = require('../config/database');

module.exports = function(passport){
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = config.secret;
  passport.use('jwt.local', new JwtStrategy(opts, (jwt_payload, done) => {
    User.getUserById(jwt_payload.data._id, (err, user) => {
      if(err){
        return done(err, false);
      }

      if(user){
        //console.log(user.token);
        //console.log(token);
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  }));
  passport.use('jwt.social', new JwtStrategy(opts, (jwt_payload, done) => {
    SocialUser.getSocialUserById(jwt_payload.data._id, (err, user) => {
      if(err){
        return done(err, false);
      }

      if(user){
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  }));
  passport.use('jwt.admin', new JwtStrategy(opts, (jwt_payload, done) => {
    Admin.getAdminById(jwt_payload.data._id, (err, admin) => {
      if(err){
        return done(err, false);
      }

      if(admin){
        return done(null, admin);
      } else {
        return done(null, false);
      }
    });
  }));
  passport.use('jwt.uploader', new JwtStrategy(opts, (jwt_payload, done) => {
    Uploader.getUploaderById(jwt_payload.data._id, (err, uploader) => {
      if(err){
        return done(err, false);
      }

      if(uploader){
        return done(null, uploader);
      } else {
        return done(null, false);
      }
    });
  }));
}

