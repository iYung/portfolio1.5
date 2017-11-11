var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var EducationSchema   = new Schema({
    name: String,
    date: String,
    text: String
});

module.exports = mongoose.model('Education', EducationSchema);