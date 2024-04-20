const { Mongoose } = require("mongoose");

eventSchema = Mongoose.Schema({
    title: {type:String, required: true },
    date:{type:Date, require: true}
})

module.exports = Mongoose.model('Event', eventSchema)