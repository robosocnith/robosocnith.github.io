var passportLocalMongoose=require('passport-local-mongoose');
var mongoose=require('mongoose');
var SponsorshipSchema=new mongoose.Schema({
    name:{type:String},
    url:{type:String},
    brief:{type:String},
    proposal:{type:String}
});
SoftwareSchema.plugin(passportLocalMongoose);
module.exports=mongoose.model("Sponsorship",SponsorshipSchema);