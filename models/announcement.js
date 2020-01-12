var passportLocalMongoose=require('passport-local-mongoose');
var mongoose=require('mongoose');
var AnnouncementSchema=new mongoose.Schema({
	title:{type:String},
	content:{type:String},
	author:{type:String},
	timestamp:{type:Date}
});
AnnouncementSchema.plugin(passportLocalMongoose);
module.exports=mongoose.model("Announcement",AnnouncementSchema);
