var bodyParser=require('body-parser'),
express=require('express')
passport=require('passport'),
LocalStrategy=require('passport-local'),
nodemailer=require('nodemailer'),
mongoose=require('mongoose'),
ejs=require('ejs'),
router=express.Router();
var Interviewee=require('../models/interviewee');

 //LocalStrategy = require("passport-local"),
 
var User=require('../models/user');
var Announcement=require('../models/announcement');

router.get('/hi',function(req,res){
	res.send('hiii');
});
router.get('/register',function(req,res){
	res.render('interviewRegisteration');
});
router.post('/register',function(req,res){
	Interviewee.register(new User({"name":req.body.name,"email":req.body.email,"interests":req.body.interests,"skills":req.body.skills}),req.body.password,function(err,user){
	if(!err)
	{
		res.redirect('/thankyou');
	}
	else{
	res.render('error',{err});}
});
});
router.get('/viewInterviewee',function(req,res){
	res.render('viewInterviewee');
});


router.get('/confirm',isFourth,function(req,res){
	Interviewee.find({"status":"selected"},function(err,selected){
		res.render('confirmInterviewees',{selected});
	});
});
module.exports=router;
