const { ObjectId } = require("mongodb");
const { mongoose } = require("mongoose");

photoSchema = new mongoose.Schema({
    filename: {type:String, required: true },
    date:{type:Date, require: true},
    caption:{type:String, require:false},
    event:{type:ObjectId, require:false}
})

module.exports = mongoose.model('Photo', photoSchema)