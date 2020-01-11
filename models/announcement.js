var passportLocalMongoose=require('passport-local-mongoose');
var mongoose=require('mongoose');
var AnnouncementSchema=new mongoose.Schema({
	heading:{type:String},
	content:{type:String},
	made_by:{type:String},
	to:[{type:String}],
	made_on:{type:Date}
});
AnnouncementSchema.plugin(passportLocalMongoose);
module.exports=mongoose.model("Announcement",AnnouncementSchema);
