var passportLocalMongoose=require('passport-local-mongoose');
var mongoose=require('mongoose');
var UserSchema=new mongoose.Schema({
	name:{type:String},
	role:{type:String}, //volunteer,execMember,convener,coreMember,President,GS,treasurer,SEF
	year:{type:Number},
	username:{type:String},
	email:{type:String},
	branch:{type:String},
	interests:[{type:String}],
	projects:[{type:String}],//todo add description
	linkedinProfile_link:{type:String},
	githubProfile_link:{tytpe:String},
	age:{type:String}
});
UserSchema.plugin(passportLocalMongoose);
module.exports=mongoose.model("User",UserSchema);