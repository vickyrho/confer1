var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');



var UserSchema = new Schema({


    name: { type: String, required: true },
    username: { type: String, lowercase: true, required: true, index : {unique: true}},
    password: { type: String, required: true },
    email: { type: String, lowercase: true, required: true, index : {unique: true}},
    role : { type: String, lowercase:true, required:true }

});



UserSchema.pre('save',function(next){
    // stuff
    var user = this ;
    bcrypt.hash(user.password,null,null, function(err,hash){
        user.password = hash;
        next();
    });
});




UserSchema.methods.comparePassword = function(password){
    return bcrypt.compareSync(password,this.password);
};



module.exports = mongoose.model('User',UserSchema);