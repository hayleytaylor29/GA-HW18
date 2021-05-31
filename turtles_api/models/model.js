const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const turtleSchema = new mongoose.Schema({
    name: {type: String, required: true},
    role: {type: String}
})

const turtle = mongoose.model('turtle', turtleSchema);

module.exports = turtle;