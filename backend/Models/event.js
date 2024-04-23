const { ObjectId } = require("mongodb");
const { mongoose } = require("mongoose");

eventSchema = new mongoose.Schema({
    title: {type:String, required: true },
    date:{type:Date, required: true},
    summary:{type:String, required: false},
    photo_c:{type:Number, required: false},
    cover_image:{type:ObjectId, required: false}
})

module.exports = mongoose.model('Event', eventSchema);