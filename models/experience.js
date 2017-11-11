var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ExperienceSchema   = new Schema({
    name: String,
    date: String,
    text: String
});

module.exports = mongoose.model('Experience', ExperienceSchema);