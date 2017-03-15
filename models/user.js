var mongoose = require('mongoose')
var Schema = mongoose.Schema
var userScheMa = new Schema({
	userid:String,
	password:String
})

userScheMa.statics = {
	fetch:function(cb){
		console.log(this.find({}))
		return this
		.find({})
		exec(cb)
	}
}

exports.user = mongoose.model('users',userScheMa)