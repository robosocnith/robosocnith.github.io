var passportLocalMongoose=require('passport-local-mongoose');
var mongoose=require('mongoose');
var ComponentSchema=new mongoose.Schema({
    id:{type:String},
    name:{type:String},
    brief:{type:String},
    quantity:{type:Number}
});
SoftwareSchema.plugin(passportLocalMongoose);
module.exports=mongoose.model("Component",ComponentSchema);