var passportLocalMongoose=require('passport-local-mongoose');
var mongoose=require('mongoose');
var UserSchema=new mongoose.Schema({
	name:{type:String},
	position:{type:String, enum:['volunteer','executive-member','coordinator','core-coordinator']}, //volunteer,execMember,convener,coreMember,President,GS,treasurer,SEF
	batch:{type:Number},
	username:{type:String},
	email:{type:String},
	branch:{type:String},
	interests:[{type:String}],
    projects:[{type:String}],//todo add description
    links:{linkedin:{type:String}, github:{type:String}},
	dob: {type:Date}
});
UserSchema.plugin(passportLocalMongoose);
module.exports=mongoose.model("User",UserSchema);