const { ObjectId } = require("mongodb");
const { mongoose } = require("mongoose");

photoSchema = new mongoose.Schema({
    title: {type:String, required: true },
    date:{type:Date, require: false},
    caption:{type:String, require:false},
    event:{type:ObjectId, require:false},
    url:{type:String, required: true}
})

module.exports = mongoose.model('Photo', photoSchema)