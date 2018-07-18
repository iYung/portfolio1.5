var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var HomeSchema   = new Schema({
    title: String,
    image: String,
    text: String,
    email: String,
    linkedIn: String,
    github: String,
    resume: String
});

module.exports = mongoose.model('Home', HomeSchema);