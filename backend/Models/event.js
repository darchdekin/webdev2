const { ObjectId } = require("mongodb");
const { mongoose } = require("mongoose");

eventSchema = new mongoose.Schema({
    title: {type:String, required: true },
    date:{type:Date, required: true},
    summary:{type:String, required: false},
    photo_c:{type:Number, required: false},
    cover_image:{type:ObjectId, ref:'photo', required: false},
    campaign:{type:ObjectId, ref:'campaign'}
})

module.exports = mongoose.model('Event', eventSchema);