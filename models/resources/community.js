var passportLocalMongoose=require('passport-local-mongoose');
var mongoose=require('mongoose');
var CommunitySchema=new mongoose.Schema({
    id:{type:String},
    title:{type:String},
    url:{type:String},
    brief:{type:String},
    tag:[{type:String}]
});
CompetitionSchema.plugin(passportLocalMongoose);
module.exports=mongoose.model("Community",CommunitySchema);