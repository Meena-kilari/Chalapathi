const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

var country = new Schema({
	cid:{
		type:Number
	},
	cname:{
		type:String
	},
	cdob:{
		type:Date
	},
	country:{
		type:String
	},
	password:{
		type:String
	}
});

country.plugin(passportLocalMongoose);

module.exports = mongoose.model('country', country);