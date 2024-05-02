const { ObjectId } = require("mongodb");
const { mongoose } = require("mongoose");

campaignSchema = new mongoose.Schema({
    name: {type:String, required:true},
    start: Date,
    end: Date,
    info:String
})

module.exports = mongoose.model('Campaign', campaignSchema)