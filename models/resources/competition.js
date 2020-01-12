var passportLocalMongoose=require('passport-local-mongoose');
var mongoose=require('mongoose');
var CompetitionSchema=new mongoose.Schema({
    id:{type:String},
    title:{type:String},
    url:{type:String},
    host:{type: String},
    brief:{type:String}
});
CompetitionSchema.plugin(passportLocalMongoose);
module.exports=mongoose.model("Competition",CompetitionSchema);