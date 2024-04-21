const { mongoose } = require("mongoose");

eventSchema = new mongoose.Schema({
    title: {type:String, required: true },
    date:{type:Date, required: true},
    summary:{type:String, required: false}
})

module.exports = mongoose.model('Event', eventSchema);