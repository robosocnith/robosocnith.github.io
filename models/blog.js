var passportLocalMongoose=require('passport-local-mongoose');
var mongoose=require('mongoose');
var BlogSchema=new mongoose.Schema({
    id:{type:String},
    title:{type:String},
    subjectType:{type:String, enum:['project','activity','other']},  // 
    brief:{type:String},
    tags: [{type:String}],
	content:{type:String},
	author:{type:String},
	timestamp:{type:Date}
});
BlogSchema.plugin(passportLocalMongoose);
module.exports=mongoose.model("Blog",BlogSchema);
