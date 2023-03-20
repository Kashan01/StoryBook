const express = require('express');
const passport = require('passport');
const router  = express.Router();
 

//get auth with google auth/google
router.get('/google',passport.authenticate('google',{ scope :['profile']}))

//get google auth callback
router.get('/google/callback',passport.authenticate('google',{failureRedirect:'/'}),(req,res)=>{
    res.redirect('/dashboard')
})

//logout user
// /auth/logout
router.get("/logout", function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect("/");
    });
  });

module.exports=router;