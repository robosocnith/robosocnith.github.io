var passportLocalMongoose=require('passport-local-mongoose');
var mongoose=require('mongoose');
var VendorSchema=new mongoose.Schema({
    id:{type:String},
    title:{type:String},
    url:{type:String},
    address: {type: String},
    brief:{type:String}
});
VendorSchema.plugin(passportLocalMongoose);
module.exports=mongoose.model("Vendor",VendorSchema);