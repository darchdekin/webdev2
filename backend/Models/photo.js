const { ObjectId } = require("mongodb");
const { Mongoose } = require("mongoose");

photoSchema = Mongoose.Schema({
    filename: {type:String, required: true },
    date:{type:Date, require: true},
    caption:{type:String, require:false},
    event:{type:ObjectId, require:false}
})

module.exports = Mongoose.model('Photo', photoSchema)