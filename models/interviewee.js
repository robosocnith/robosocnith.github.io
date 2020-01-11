var passportLocalMongoose=require('passport-local-mongoose');
var mongoose=require('mongoose');
var IntervieweeSchema=new mongoose.Schema({
	name:{type:String},
	status:{type:String}, //selected,shortlisted,rejected
	marks:{type:Number},
	grades:{honesty_to_cv:Number,
			communication_skills:Number},
	year:{type:Number},
	email:{type:String},
	interests:[{type:String}],
	skills:[{type:String}],
	age:{type:String},
	group:{type:Number}
});
IntervieweeSchema.plugin(passportLocalMongoose);
module.exports=mongoose.model("Interviewee",IntervieweeSchema);