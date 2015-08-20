var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
	name: String,
	email: {type:String, index:true},
	username: {type:String, unique:true},
	password: String
});

mongoose.model('User', UserSchema);