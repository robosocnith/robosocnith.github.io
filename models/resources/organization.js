var passportLocalMongoose=require('passport-local-mongoose');
var mongoose=require('mongoose');
var OrganizationSchema=new mongoose.Schema({
    id:{type:String},
    title:{type:String},
    contact: {url:{type:String}, email: {type:String}, address:{type:String}},
    url:{type:String},
    brief:{type:String},
    tag:[{type:String}]
});
OrganizationSchema.plugin(passportLocalMongoose);
module.exports=mongoose.model("Organization",OrganizationSchema);