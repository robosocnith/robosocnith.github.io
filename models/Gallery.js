var passportLocalMongoose=require('passport-local-mongoose');
var mongoose=require('mongoose');
var GallerySchema=new mongoose.Schema({
id:{type:String},
tag:{type:String},
url:{type:String}
});
GallerySchema.plugin(passportLocalMongoose);
module.exports=mongoose.model("Gallery",GallerySchema);