var passportLocalMongoose=require('passport-local-mongoose');
var mongoose=require('mongoose');
var SoftwareSchema=new mongoose.Schema({
    id:{type:String},
    title:{type:String},
    url:{type:String},
    brief:{type:String}
});
SoftwareSchema.plugin(passportLocalMongoose);
module.exports=mongoose.model("Software",SoftwareSchema);