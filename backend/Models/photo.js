const { ObjectId } = require("mongodb");
const { mongoose } = require("mongoose");

photoSchema = new mongoose.Schema({
    title: {type:String, required: true },
    date:{type:Date, require: false},
    caption:{type:String, require:false},
    event:{type:ObjectId, ref: 'Event', require:false},
    url:{type:String, required: true},
    tags:[{type:String, required: false}],
    credit:[{type:String, required: false}],
    campaign:{type:ObjectId, ref:'campaign'}
})

module.exports = mongoose.model('Photo', photoSchema)